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
var async_1 = require('./src/facade/async');
var lang_1 = require('./src/facade/lang');
var xhr_cache_1 = require('./src/xhr/xhr_cache');
var xhr_impl_1 = require('./src/xhr/xhr_impl');
/**
 * @deprecated The compiler providers are already included in the {@link CompilerFactory} that is
 * contained the {@link browserDynamicPlatform}()`.
 */
exports.BROWSER_APP_COMPILER_PROVIDERS = [
    compiler_1.COMPILER_PROVIDERS, {
        provide: compiler_1.CompilerConfig,
        useFactory: function (platformDirectives, platformPipes) {
            return new compiler_1.CompilerConfig({
                deprecatedPlatformDirectives: platformDirectives,
                deprecatedPlatformPipes: platformPipes
            });
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
function initReflector() {
    core_private_1.reflector.reflectionCapabilities = new core_private_1.ReflectionCapabilities();
}
/**
 * CompilerFactory for the browser dynamic platform
 *
 * @experimental
 */
exports.BROWSER_DYNAMIC_COMPILER_FACTORY = compiler_1.RUNTIME_COMPILER_FACTORY.withDefaults({ providers: [{ provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl }] });
/**
 * Providers for the browser dynamic platform
 *
 * @experimental
 */
exports.BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    platform_browser_1.BROWSER_PLATFORM_PROVIDERS,
    { provide: core_1.CompilerFactory, useValue: exports.BROWSER_DYNAMIC_COMPILER_FACTORY },
    { provide: core_1.PLATFORM_INITIALIZER, useValue: initReflector, multi: true },
];
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.browserDynamicPlatform = core_1.createPlatformFactory('browserDynamic', exports.BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    var compilerOptions;
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
        compilerOptions = customProvidersOrDynamicModule.compilerOptions;
    }
    var DynamicModule = (function () {
        function DynamicModule() {
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
        return DynamicModule;
    }());
    return core_1.bootstrapModule(DynamicModule, exports.browserDynamicPlatform(), core_1.CompilerFactory.mergeOptions(compilerOptions, { deprecatedAppProviders: providers }))
        .then(function (moduleRef) {
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
}
exports.bootstrap = bootstrap;
/**
 * @deprecated Create an {@link AppModule} that includes the {@link WorkerUiModule} and use {@link
 * bootstrapModule}
 * with the {@link workerUiPlatform}() instead.
 */
function bootstrapWorkerUi(workerScriptUri, customProviders) {
    console.warn('bootstrapWorkerUi is deprecated. Create an @AppModule that includes the `WorkerUiModule` and use `bootstrapModule` with the `workerUiPlatform()` instead.');
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
 * @deprecated The compiler providers are already included in the {@link CompilerFactory} that is
 * contained the {@link workerAppPlatform}().
 */
var WORKER_APP_COMPILER_PROVIDERS = [
    compiler_1.COMPILER_PROVIDERS, {
        provide: compiler_1.CompilerConfig,
        useFactory: function (platformDirectives, platformPipes) {
            return new compiler_1.CompilerConfig({
                deprecatedPlatformDirectives: platformDirectives,
                deprecatedPlatformPipes: platformPipes
            });
        },
        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
    },
    { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
    { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true }
];
/**
 * @deprecated Create an {@link AppModule} that includes the {@link WorkerAppModule} and use {@link
 * bootstrapModule}
 * with the {@link workerAppPlatform}() instead.
 */
function bootstrapWorkerApp(appComponentType, customProviders) {
    console.warn('bootstrapWorkerApp is deprecated. Create an @AppModule that includes the `WorkerAppModule` and use `bootstrapModule` with the `workerAppPlatform()` instead.');
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