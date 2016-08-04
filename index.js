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
exports.platformBrowserDynamic = core_1.createPlatformFactory(compiler_1.platformCoreDynamic, 'browserDynamic', platform_providers_1.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * @deprecated Use {@link platformBrowserDynamic} instead
 */
exports.browserDynamicPlatform = exports.platformBrowserDynamic;
function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    var compilerOptions;
    var providers = [];
    var declarations = [];
    var imports = [];
    var entryComponents = [];
    var deprecationMessages = [];
    var schemas = [];
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
        entryComponents = normalizeArray(customProvidersOrDynamicModule.entryComponents);
        schemas = normalizeArray(customProvidersOrDynamicModule.schemas);
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
                        entryComponents: entryComponents,
                        bootstrap: [appComponentType],
                        schemas: schemas
                    },] },
        ];
        return DynamicModule;
    }());
    return exports.platformBrowserDynamic()
        .bootstrapModule(DynamicModule, compilerOptions)
        .then(function (moduleRef) {
        var console = moduleRef.injector.get(core_private_1.Console);
        deprecationMessages.forEach(function (msg) { return console.warn(msg); });
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        return appRef.components[0];
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
    return Promise.resolve(platform_browser_1.platformWorkerUi([{
            provide: platform_browser_1.WORKER_SCRIPT,
            useValue: workerScriptUri,
        }].concat(customProviders)));
}
exports.bootstrapWorkerUi = bootstrapWorkerUi;
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.platformWorkerAppDynamic = core_1.createPlatformFactory(compiler_1.platformCoreDynamic, 'workerAppDynamic', [{
        provide: core_1.COMPILER_OPTIONS,
        useValue: { providers: [{ provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl }] },
        multi: true
    }]);
/**
 * @deprecated Use {@link platformWorkerAppDynamic} instead
 */
exports.workerAppDynamicPlatform = exports.platformWorkerAppDynamic;
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
                        bootstrap: [appComponentType]
                    },] },
        ];
        return DynamicModule;
    }());
    return exports.platformWorkerAppDynamic()
        .bootstrapModule(DynamicModule, deprecatedConfiguration.compilerOptions)
        .then(function (moduleRef) {
        var console = moduleRef.injector.get(core_private_1.Console);
        deprecatedConfiguration.deprecationMessages.forEach(function (msg) { return console.warn(msg); });
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        return appRef.components[0];
    });
}
exports.bootstrapWorkerApp = bootstrapWorkerApp;
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map