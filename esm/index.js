/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { COMPILER_PROVIDERS, CompilerConfig, XHR, RUNTIME_COMPILER_FACTORY } from '@angular/compiler';
import { AppModule, ApplicationRef, PLATFORM_DIRECTIVES, PLATFORM_PIPES, ReflectiveInjector, coreLoadAndBootstrap, bootstrapModule, PLATFORM_INITIALIZER, CompilerFactory, createPlatformFactory } from '@angular/core';
import { BrowserModule, WORKER_APP_APPLICATION_PROVIDERS, WORKER_SCRIPT, WORKER_UI_APPLICATION_PROVIDERS, workerAppPlatform, workerUiPlatform, BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { ReflectionCapabilities, reflector } from './core_private';
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
function initReflector() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
}
/**
 * CompilerFactory for the browser dynamic platform
 *
 * @experimental
 */
export const BROWSER_DYNAMIC_COMPILER_FACTORY = RUNTIME_COMPILER_FACTORY.withDefaults({ providers: [{ provide: XHR, useClass: XHRImpl }] });
/**
 * Providers for the browser dynamic platform
 *
 * @experimental
 */
export const BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    BROWSER_PLATFORM_PROVIDERS,
    { provide: CompilerFactory, useValue: BROWSER_DYNAMIC_COMPILER_FACTORY },
    { provide: PLATFORM_INITIALIZER, useValue: initReflector, multi: true },
];
/**
 * @experimental API related to bootstrapping are still under review.
 */
export const browserDynamicPlatform = createPlatformFactory('browserDynamic', BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
export function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    let compilerOptions;
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
        compilerOptions = customProvidersOrDynamicModule.compilerOptions;
    }
    class DynamicModule {
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
    return bootstrapModule(DynamicModule, browserDynamicPlatform(), CompilerFactory.mergeOptions(compilerOptions, { deprecatedAppProviders: providers }))
        .then((moduleRef) => {
        const appRef = moduleRef.injector.get(ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
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