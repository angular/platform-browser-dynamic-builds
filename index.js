/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var compiler_1 = require('@angular/compiler');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var core_private_1 = require('./core_private');
var platform_providers_1 = require('./src/platform_providers');
var xhr_cache_1 = require('./src/xhr/xhr_cache');
var xhr_impl_1 = require('./src/xhr/xhr_impl');
/**
 * @deprecated The compiler providers are already included in the {@link CompilerFactory} that is
 * contained the {@link browserDynamicPlatform}()`.
 */
exports.BROWSER_APP_COMPILER_PROVIDERS = [];
/**
 * @experimental
 */
exports.CACHED_TEMPLATE_PROVIDER = [{ provide: compiler_1.XHR, useClass: xhr_cache_1.CachedXHR }];
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.browserDynamicPlatform = core_1.createPlatformFactory(compiler_1.coreDynamicPlatform, 'browserDynamic', platform_providers_1.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    var compilerOptions;
    var providers = [];
    var declarations = [];
    var imports = [];
    var precompile = [];
    var deprecationMessages = [];
    if (customProvidersOrDynamicModule instanceof Array) {
        providers = customProvidersOrDynamicModule;
        var deprecatedConfiguration = compiler_1.analyzeAppProvidersForDeprecatedConfiguration(providers);
        declarations = deprecatedConfiguration.moduleDeclarations.concat(declarations);
        compilerOptions = deprecatedConfiguration.compilerOptions;
        deprecationMessages = deprecatedConfiguration.deprecationMessages;
    }
    else if (customProvidersOrDynamicModule) {
        providers = normalizeArray(customProvidersOrDynamicModule.providers);
        declarations = normalizeArray(customProvidersOrDynamicModule.declarations);
        imports = normalizeArray(customProvidersOrDynamicModule.imports);
        precompile = normalizeArray(customProvidersOrDynamicModule.precompile);
        compilerOptions = customProvidersOrDynamicModule.compilerOptions;
    }
    var DynamicModule = (function () {
        function DynamicModule() {
        }
        /** @nocollapse */
        DynamicModule.decorators = [
            { type: core_1.NgModule, args: [{
                        providers: providers,
                        declarations: declarations.concat([appComponentType]),
                        imports: [platform_browser_1.BrowserModule, imports],
                        precompile: precompile.concat([appComponentType])
                    },] },
        ];
        return DynamicModule;
    }());
    return core_1.bootstrapModule(DynamicModule, exports.browserDynamicPlatform(), compilerOptions)
        .then(function (moduleRef) {
        var console = moduleRef.injector.get(core_private_1.Console);
        deprecationMessages.forEach(function (msg) { return console.warn(msg); });
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
}
exports.bootstrap = bootstrap;
/**
 * Bootstraps the worker ui.
 *
 * @experimental
 */
function bootstrapWorkerUi(workerScriptUri, customProviders) {
    if (customProviders === void 0) { customProviders = []; }
    // For now, just creates the worker ui platform...
    return Promise.resolve(platform_browser_1.workerUiPlatform([{
            provide: platform_browser_1.WORKER_SCRIPT,
            useValue: workerScriptUri,
        }].concat(customProviders)));
}
exports.bootstrapWorkerUi = bootstrapWorkerUi;
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.workerAppDynamicPlatform = core_1.createPlatformFactory(compiler_1.coreDynamicPlatform, 'workerAppDynamic', [{
        provide: core_1.CompilerOptions,
        useValue: { providers: [{ provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl }] },
        multi: true
    }]);
/**
 * @deprecated Create an {@link NgModule} that includes the {@link WorkerAppModule} and use {@link
 * bootstrapModule}
 * with the {@link workerAppDynamicPlatform}() instead.
 */
function bootstrapWorkerApp(appComponentType, customProviders) {
    console.warn('bootstrapWorkerApp is deprecated. Create an @NgModule that includes the `WorkerAppModule` and use `bootstrapModule` with the `workerAppDynamicPlatform()` instead.');
    var deprecatedConfiguration = compiler_1.analyzeAppProvidersForDeprecatedConfiguration(customProviders);
    var declarations = [deprecatedConfiguration.moduleDeclarations.concat([appComponentType])];
    var DynamicModule = (function () {
        function DynamicModule() {
        }
        /** @nocollapse */
        DynamicModule.decorators = [
            { type: core_1.NgModule, args: [{
                        providers: customProviders,
                        declarations: declarations,
                        imports: [platform_browser_1.WorkerAppModule],
                        precompile: [appComponentType]
                    },] },
        ];
        return DynamicModule;
    }());
    return core_1.bootstrapModule(DynamicModule, exports.workerAppDynamicPlatform(), deprecatedConfiguration.compilerOptions)
        .then(function (moduleRef) {
        var console = moduleRef.injector.get(core_private_1.Console);
        deprecatedConfiguration.deprecationMessages.forEach(function (msg) { return console.warn(msg); });
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
}
exports.bootstrapWorkerApp = bootstrapWorkerApp;
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map