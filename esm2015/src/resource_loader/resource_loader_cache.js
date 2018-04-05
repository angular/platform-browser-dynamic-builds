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
import { ɵglobal as global } from '@angular/core';
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */
export class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = (/** @type {?} */ (global)).$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return /** @type {?} */ (Promise.reject('CachedResourceLoader: Did not find cached template for ' + url));
        }
    }
}
function CachedResourceLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    CachedResourceLoader.prototype._cache;
}
//# sourceMappingURL=resource_loader_cache.js.map