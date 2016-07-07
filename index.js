/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var common_1 = require('@angular/common');
var compiler_1 = require('@angular/compiler');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var core_private_1 = require('./core_private');
var platform_browser_private_1 = require('./platform_browser_private');
var async_1 = require('./src/facade/async');
var lang_1 = require('./src/facade/lang');
var xhr_cache_1 = require('./src/xhr/xhr_cache');
var xhr_impl_1 = require('./src/xhr/xhr_impl');
/**
 * @experimental
 */
exports.BROWSER_APP_COMPILER_PROVIDERS = [
    compiler_1.COMPILER_PROVIDERS, {
        provide: compiler_1.CompilerConfig,
        useFactory: function (platformDirectives, platformPipes) {
            return new compiler_1.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
        },
        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
    },
    { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
    { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true }
];
/**
 * @experimental
 */
exports.CACHED_TEMPLATE_PROVIDER = [{ provide: compiler_1.XHR, useClass: xhr_cache_1.CachedXHR }];
function _initGlobals() {
    platform_browser_private_1.initDomAdapter();
    core_private_1.reflector.reflectionCapabilities = new core_private_1.ReflectionCapabilities();
}
/**
 * Creates the runtime compiler for the browser.
 *
 * @stable
 */
function browserCompiler(_a) {
    var _b = _a === void 0 ? {} : _a, useDebug = _b.useDebug, _c = _b.useJit, useJit = _c === void 0 ? true : _c, _d = _b.providers, providers = _d === void 0 ? [] : _d;
    _initGlobals();
    if (useDebug === undefined) {
        useDebug = core_1.isDevMode();
    }
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        compiler_1.COMPILER_PROVIDERS, {
            provide: compiler_1.CompilerConfig,
            useValue: new compiler_1.CompilerConfig({ genDebugInfo: useDebug, useJit: useJit })
        },
        { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl }, providers ? providers : []
    ]);
    return injector.get(core_1.Compiler);
}
exports.browserCompiler = browserCompiler;
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
function bootstrapModule(moduleType, compiler) {
    if (compiler === void 0) { compiler = browserCompiler(); }
    return compiler.compileAppModuleAsync(moduleType).then(platform_browser_1.bootstrapModuleFactory);
}
exports.bootstrapModule = bootstrapModule;
function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    _initGlobals();
    var compiler;
    var compilerProviders = [];
    var providers = [];
    var directives = [];
    var pipes = [];
    var modules = [];
    var precompile = [];
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
    var deprecationMessages = [];
    if (providers && providers.length > 0) {
        // Note: This is a hack to still support the old way
        // of configuring platform directives / pipes and the compiler xhr.
        // This will soon be deprecated!
        var inj = core_1.ReflectiveInjector.resolveAndCreate(providers);
        var compilerConfig = inj.get(compiler_1.CompilerConfig, null);
        if (compilerConfig) {
            // Note: forms read the platform directives / pipes, modify them
            // and provide a CompilerConfig out of it
            directives = directives.concat(compilerConfig.platformDirectives);
            pipes = pipes.concat(compilerConfig.platformPipes);
            deprecationMessages.push("Passing a CompilerConfig to \"bootstrap()\" as provider is deprecated. Pass the provider to \"createCompiler()\" and call \"bootstrap()\" with the created compiler instead.");
        }
        else {
            // If nobody provided a CompilerConfig, use the
            // PLATFORM_DIRECTIVES / PLATFORM_PIPES values directly.
            var platformDirectives = inj.get(core_1.PLATFORM_DIRECTIVES, []);
            if (platformDirectives.length > 0) {
                deprecationMessages.push("Passing PLATFORM_DIRECTIVES to \"bootstrap()\" as provider is deprecated. Use the new parameter \"directives\" of \"bootstrap()\" instead.");
            }
            directives = directives.concat(platformDirectives);
            var platformPipes = inj.get(core_1.PLATFORM_PIPES, []);
            if (platformPipes.length > 0) {
                deprecationMessages.push("Passing PLATFORM_PIPES to \"bootstrap()\" as provider is deprecated. Use the new parameter \"pipes\" of \"bootstrap()\" instead.");
            }
            pipes = pipes.concat(platformPipes);
        }
        var xhr = inj.get(compiler_1.XHR, null);
        if (xhr) {
            compilerProviders.push([{ provide: compiler_1.XHR, useValue: xhr }]);
            deprecationMessages.push("Passing an instance of XHR to \"bootstrap()\" as provider is deprecated. Pass the provider to \"createCompiler()\" and call \"bootstrap()\" with the created compiler instead.");
        }
        // Need to copy console from providers to compiler
        // as well so that we can test the above deprecation messages!
        var console_1 = inj.get(core_private_1.Console, null);
        if (console_1) {
            compilerProviders.push([{ provide: core_private_1.Console, useValue: console_1 }]);
        }
    }
    if (!compiler) {
        compiler = browserCompiler({ providers: compilerProviders });
    }
    var console = compiler.injector.get(core_private_1.Console);
    deprecationMessages.forEach(function (msg) { console.warn(msg); });
    var DynamicModule = (function () {
        function DynamicModule(appRef) {
            this.appRef = appRef;
        }
        /** @nocollapse */
        DynamicModule.decorators = [
            { type: core_1.AppModule, args: [{
                        providers: providers,
                        modules: modules.concat([platform_browser_1.BrowserModule]),
                        directives: directives,
                        pipes: pipes,
                        precompile: precompile.concat([appComponentType])
                    },] },
        ];
        /** @nocollapse */
        DynamicModule.ctorParameters = [
            { type: core_1.ApplicationRef, },
        ];
        return DynamicModule;
    }());
    return bootstrapModule(DynamicModule, compiler)
        .then(function (moduleRef) { return moduleRef.instance.appRef.waitForAsyncInitializers().then(function () { return moduleRef.instance.appRef.bootstrap(appComponentType); }); });
}
exports.bootstrap = bootstrap;
/**
 * @experimental
 */
function bootstrapWorkerUi(workerScriptUri, customProviders) {
    var app = core_1.ReflectiveInjector.resolveAndCreate([
        platform_browser_1.WORKER_UI_APPLICATION_PROVIDERS, exports.BROWSER_APP_COMPILER_PROVIDERS,
        { provide: platform_browser_1.WORKER_SCRIPT, useValue: workerScriptUri },
        lang_1.isPresent(customProviders) ? customProviders : []
    ], platform_browser_1.workerUiPlatform().injector);
    // Return a promise so that we keep the same semantics as Dart,
    // and we might want to wait for the app side to come up
    // in the future...
    return async_1.PromiseWrapper.resolve(app.get(core_1.ApplicationRef));
}
exports.bootstrapWorkerUi = bootstrapWorkerUi;
/**
 * @experimental
 */
var WORKER_APP_COMPILER_PROVIDERS = [
    compiler_1.COMPILER_PROVIDERS, {
        provide: compiler_1.CompilerConfig,
        useFactory: function (platformDirectives, platformPipes) {
            return new compiler_1.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
        },
        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
    },
    { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
    { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true }
];
/**
 * @experimental
 */
function bootstrapWorkerApp(appComponentType, customProviders) {
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate([
        platform_browser_1.WORKER_APP_APPLICATION_PROVIDERS, WORKER_APP_COMPILER_PROVIDERS,
        lang_1.isPresent(customProviders) ? customProviders : []
    ], platform_browser_1.workerAppPlatform().injector);
    return core_1.coreLoadAndBootstrap(appComponentType, appInjector);
}
exports.bootstrapWorkerApp = bootstrapWorkerApp;
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map