/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
var ResourceLoaderImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceLoaderImpl, _super);
    function ResourceLoaderImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ResourceLoaderImpl.prototype.get = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ resolve;
        var /** @type {?} */ reject;
        var /** @type {?} */ promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var /** @type {?} */ xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
            // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
            // by IE10)
            var /** @type {?} */ response = xhr.response || xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
            var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
            // fix status code when it is 0 (0 status is undocumented).
            // Occurs when accessing file resources or on Android 4.1 stock browser
            // while retrieving files from application cache.
            if (status === 0) {
                status = response ? 200 : 0;
            }
            if (200 <= status && status <= 300) {
                resolve(response);
            }
            else {
                reject("Failed to load " + url);
            }
        };
        xhr.onerror = function () { reject("Failed to load " + url); };
        xhr.send();
        return promise;
    };
    ResourceLoaderImpl.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ResourceLoaderImpl.ctorParameters = function () { return []; };
    return ResourceLoaderImpl;
}(ResourceLoader));
export { ResourceLoaderImpl };
function ResourceLoaderImpl_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ResourceLoaderImpl.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ResourceLoaderImpl.ctorParameters;
}
//# sourceMappingURL=resource_loader_impl.js.map