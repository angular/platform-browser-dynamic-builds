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
var xhr_cache_1 = require('./src/xhr/xhr_cache');
var xhr_impl_1 = require('./src/xhr/xhr_impl');
/**
 * @experimental
 */
exports.CACHED_TEMPLATE_PROVIDER = [{ provide: compiler_1.XHR, useClass: xhr_cache_1.CachedXHR }];
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.platformBrowserDynamic = core_1.createPlatformFactory(compiler_1.platformCoreDynamic, 'browserDynamic', platform_providers_1.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
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
        }]
        .concat(customProviders)));
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
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map