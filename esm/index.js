/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { COMPILER_PROVIDERS, CompilerConfig, XHR } from '@angular/compiler';
import { AppModule, ApplicationRef, Compiler, PLATFORM_DIRECTIVES, PLATFORM_PIPES, ReflectiveInjector, coreLoadAndBootstrap, isDevMode } from '@angular/core';
import { BrowserModule, WORKER_APP_APPLICATION_PROVIDERS, WORKER_SCRIPT, WORKER_UI_APPLICATION_PROVIDERS, bootstrapModuleFactory, workerAppPlatform, workerUiPlatform } from '@angular/platform-browser';
import { Console, ReflectionCapabilities, reflector } from './core_private';
import { initDomAdapter } from './platform_browser_private';
import { PromiseWrapper } from './src/facade/async';
import { isPresent } from './src/facade/lang';
import { CachedXHR } from './src/xhr/xhr_cache';
import { XHRImpl } from './src/xhr/xhr_impl';
/**
 * @experimental
 */
export const BROWSER_APP_COMPILER_PROVIDERS = [
    COMPILER_PROVIDERS, {
        provide: CompilerConfig,
        useFactory: (platformDirectives, platformPipes) => {
            return new CompilerConfig({ platformDirectives, platformPipes });
        },
        deps: [PLATFORM_DIRECTIVES, PLATFORM_PIPES]
    },
    { provide: XHR, useClass: XHRImpl },
    { provide: PLATFORM_DIRECTIVES, useValue: COMMON_DIRECTIVES, multi: true },
    { provide: PLATFORM_PIPES, useValue: COMMON_PIPES, multi: true }
];
/**
 * @experimental
 */
export const CACHED_TEMPLATE_PROVIDER = [{ provide: XHR, useClass: CachedXHR }];
function _initGlobals() {
    initDomAdapter();
    reflector.reflectionCapabilities = new ReflectionCapabilities();
}
/**
 * Creates the runtime compiler for the browser.
 *
 * @stable
 */
export function browserCompiler({ useDebug, useJit = true, providers = [] } = {}) {
    _initGlobals();
    if (useDebug === undefined) {
        useDebug = isDevMode();
    }
    const injector = ReflectiveInjector.resolveAndCreate([
        COMPILER_PROVIDERS, {
            provide: CompilerConfig,
            useValue: new CompilerConfig({ genDebugInfo: useDebug, useJit: useJit })
        },
        { provide: XHR, useClass: XHRImpl }, providers ? providers : []
    ]);
    return injector.get(Compiler);
}
/**
 * Creates an instance of an `@AppModule` for the browser platform.
 *
 * ## Simple Example
 *
 * ```typescript
 * @AppModule({
 *   modules: [BrowserModule]
 * })
 * class MyModule {}
 *
 * let moduleRef = bootstrapModule(MyModule);
 * ```
 * @stable
 */
export function bootstrapModule(moduleType, compiler = browserCompiler()) {
    return compiler.compileAppModuleAsync(moduleType).then(bootstrapModuleFactory);
}
export function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    _initGlobals();
    let compiler;
    let compilerProviders = [];
    let providers = [];
    let directives = [];
    let pipes = [];
    let modules = [];
    let precompile = [];
    if (customProvidersOrDynamicModule instanceof Array) {
        providers = customProvidersOrDynamicModule;
    }
    else if (customProvidersOrDynamicModule) {
        providers = normalizeArray(customProvidersOrDynamicModule.providers);
        directives = normalizeArray(customProvidersOrDynamicModule.directives);
        pipes = normalizeArray(customProvidersOrDynamicModule.pipes);
        modules = normalizeArray(customProvidersOrDynamicModule.modules);
        precompile = normalizeArray(customProvidersOrDynamicModule.precompile);
        compiler = customProvidersOrDynamicModule.compiler;
    }
    const deprecationMessages = [];
    if (providers && providers.length > 0) {
        // Note: This is a hack to still support the old way
        // of configuring platform directives / pipes and the compiler xhr.
        // This will soon be deprecated!
        const inj = ReflectiveInjector.resolveAndCreate(providers);
        const compilerConfig = inj.get(CompilerConfig, null);
        if (compilerConfig) {
            // Note: forms read the platform directives / pipes, modify them
            // and provide a CompilerConfig out of it
            directives = directives.concat(compilerConfig.platformDirectives);
            pipes = pipes.concat(compilerConfig.platformPipes);
            deprecationMessages.push(`Passing a CompilerConfig to "bootstrap()" as provider is deprecated. Pass the provider to "createCompiler()" and call "bootstrap()" with the created compiler instead.`);
        }
        else {
            // If nobody provided a CompilerConfig, use the
            // PLATFORM_DIRECTIVES / PLATFORM_PIPES values directly.
            const platformDirectives = inj.get(PLATFORM_DIRECTIVES, []);
            if (platformDirectives.length > 0) {
                deprecationMessages.push(`Passing PLATFORM_DIRECTIVES to "bootstrap()" as provider is deprecated. Use the new parameter "directives" of "bootstrap()" instead.`);
            }
            directives = directives.concat(platformDirectives);
            const platformPipes = inj.get(PLATFORM_PIPES, []);
            if (platformPipes.length > 0) {
                deprecationMessages.push(`Passing PLATFORM_PIPES to "bootstrap()" as provider is deprecated. Use the new parameter "pipes" of "bootstrap()" instead.`);
            }
            pipes = pipes.concat(platformPipes);
        }
        const xhr = inj.get(XHR, null);
        if (xhr) {
            compilerProviders.push([{ provide: XHR, useValue: xhr }]);
            deprecationMessages.push(`Passing an instance of XHR to "bootstrap()" as provider is deprecated. Pass the provider to "createCompiler()" and call "bootstrap()" with the created compiler instead.`);
        }
        // Need to copy console from providers to compiler
        // as well so that we can test the above deprecation messages!
        const console = inj.get(Console, null);
        if (console) {
            compilerProviders.push([{ provide: Console, useValue: console }]);
        }
    }
    if (!compiler) {
        compiler = browserCompiler({ providers: compilerProviders });
    }
    const console = compiler.injector.get(Console);
    deprecationMessages.forEach((msg) => { console.warn(msg); });
    class DynamicModule {
        constructor(appRef) {
            this.appRef = appRef;
        }
    }
    /** @nocollapse */
    DynamicModule.decorators = [
        { type: AppModule, args: [{
                    providers: providers,
                    modules: modules.concat([BrowserModule]),
                    directives: directives,
                    pipes: pipes,
                    precompile: precompile.concat([appComponentType])
                },] },
    ];
    /** @nocollapse */
    DynamicModule.ctorParameters = [
        { type: ApplicationRef, },
    ];
    return bootstrapModule(DynamicModule, compiler)
        .then((moduleRef) => moduleRef.instance.appRef.waitForAsyncInitializers().then(() => moduleRef.instance.appRef.bootstrap(appComponentType)));
}
/**
 * @experimental
 */
export function bootstrapWorkerUi(workerScriptUri, customProviders) {
    var app = ReflectiveInjector.resolveAndCreate([
        WORKER_UI_APPLICATION_PROVIDERS, BROWSER_APP_COMPILER_PROVIDERS,
        { provide: WORKER_SCRIPT, useValue: workerScriptUri },
        isPresent(customProviders) ? customProviders : []
    ], workerUiPlatform().injector);
    // Return a promise so that we keep the same semantics as Dart,
    // and we might want to wait for the app side to come up
    // in the future...
    return PromiseWrapper.resolve(app.get(ApplicationRef));
}
/**
 * @experimental
 */
const WORKER_APP_COMPILER_PROVIDERS = [
    COMPILER_PROVIDERS, {
        provide: CompilerConfig,
        useFactory: (platformDirectives, platformPipes) => {
            return new CompilerConfig({ platformDirectives, platformPipes });
        },
        deps: [PLATFORM_DIRECTIVES, PLATFORM_PIPES]
    },
    { provide: XHR, useClass: XHRImpl },
    { provide: PLATFORM_DIRECTIVES, useValue: COMMON_DIRECTIVES, multi: true },
    { provide: PLATFORM_PIPES, useValue: COMMON_PIPES, multi: true }
];
/**
 * @experimental
 */
export function bootstrapWorkerApp(appComponentType, customProviders) {
    var appInjector = ReflectiveInjector.resolveAndCreate([
        WORKER_APP_APPLICATION_PROVIDERS, WORKER_APP_COMPILER_PROVIDERS,
        isPresent(customProviders) ? customProviders : []
    ], workerAppPlatform().injector);
    return coreLoadAndBootstrap(appComponentType, appInjector);
}
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map