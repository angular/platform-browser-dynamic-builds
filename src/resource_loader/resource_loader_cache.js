/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var compiler_1 = require('@angular/compiler');
var core_1 = require('@angular/core');
var lang_1 = require('../facade/lang');
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */
var CachedResourceLoader = (function (_super) {
    __extends(CachedResourceLoader, _super);
    function CachedResourceLoader() {
        _super.call(this);
        this._cache = lang_1.global.$templateCache;
        if (this._cache == null) {
            throw new core_1.BaseException('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    CachedResourceLoader.prototype.get = function (url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return Promise.reject('CachedResourceLoader: Did not find cached template for ' + url);
        }
    };
    return CachedResourceLoader;
}(compiler_1.ResourceLoader));
exports.CachedResourceLoader = CachedResourceLoader;
//# sourceMappingURL=resource_loader_cache.js.map