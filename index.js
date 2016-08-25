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
var platform_providers_1 = require('./src/platform_providers');
var resource_loader_cache_1 = require('./src/resource_loader/resource_loader_cache');
var resource_loader_impl_1 = require('./src/resource_loader/resource_loader_impl');
/**
 * @experimental
 */
exports.RESOURCE_CACHE_PROVIDER = [{ provide: compiler_1.ResourceLoader, useClass: resource_loader_cache_1.CachedResourceLoader }];
/**
 * @stable
 */
exports.platformBrowserDynamic = core_1.createPlatformFactory(compiler_1.platformCoreDynamic, 'browserDynamic', platform_providers_1.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * Bootstraps the worker ui.
 *
 * @experimental WebWorker support is currently experimental
 */
function bootstrapWorkerUi(workerScriptUri, customProviders) {
    if (customProviders === void 0) { customProviders = []; }
    // For now, just creates the worker ui platform...
    return Promise.resolve(platform_browser_1.platformWorkerUi([{
            provide: platform_browser_1.WORKER_SCRIPT,
            useValue: workerScriptUri,
        }]
        .concat(customProviders)));
}
exports.bootstrapWorkerUi = bootstrapWorkerUi;
/**
 * @experimental WebWorker support is currently experimental
 */
exports.platformWorkerAppDynamic = core_1.createPlatformFactory(compiler_1.platformCoreDynamic, 'workerAppDynamic', [{
        provide: core_1.COMPILER_OPTIONS,
        useValue: { providers: [{ provide: compiler_1.ResourceLoader, useClass: resource_loader_impl_1.ResourceLoaderImpl }] },
        multi: true
    }]);
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map