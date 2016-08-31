/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader, platformCoreDynamic } from '@angular/compiler';
import { COMPILER_OPTIONS, createPlatformFactory } from '@angular/core';
import { WORKER_SCRIPT, platformWorkerUi } from '@angular/platform-browser';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './platform_providers';
import { CachedResourceLoader } from './resource_loader/resource_loader_cache';
import { ResourceLoaderImpl } from './resource_loader/resource_loader_impl';
export * from './private_export';
/**
 * @experimental
 */
export var RESOURCE_CACHE_PROVIDER = [{ provide: ResourceLoader, useClass: CachedResourceLoader }];
/**
 * @experimental API related to bootstrapping are still under review.
 */
export var platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * Bootstraps the worker ui.
 *
 * @experimental
 */
export function bootstrapWorkerUi(workerScriptUri, customProviders) {
    if (customProviders === void 0) { customProviders = []; }
    // For now, just creates the worker ui platform...
    return Promise.resolve(platformWorkerUi([{
            provide: WORKER_SCRIPT,
            useValue: workerScriptUri,
        }]
        .concat(customProviders)));
}
/**
 * @experimental API related to bootstrapping are still under review.
 */
export var platformWorkerAppDynamic = createPlatformFactory(platformCoreDynamic, 'workerAppDynamic', [{
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl }] },
        multi: true
    }]);
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=platform-browser-dynamic.js.map