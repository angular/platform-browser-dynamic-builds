/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { createPlatformFactory } from '@angular/core';
import { platformCoreDynamic } from './platform_core_dynamic';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './platform_providers';
import { CachedResourceLoader } from './resource_loader/resource_loader_cache';
export { ɵCompilerImpl, ɵplatformCoreDynamic, ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ɵResourceLoaderImpl } from './private_export';
export { VERSION } from './version';
export { JitCompilerFactory } from './compiler_factory';
/**
 * \@experimental
 */
export const /** @type {?} */ RESOURCE_CACHE_PROVIDER = [{ provide: ResourceLoader, useClass: CachedResourceLoader, deps: [] }];
/**
 *
 */
export const /** @type {?} */ platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
//# sourceMappingURL=platform-browser-dynamic.js.map