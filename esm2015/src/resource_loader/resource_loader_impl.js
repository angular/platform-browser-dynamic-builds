/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
export class ResourceLoaderImpl extends ResourceLoader {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        let /** @type {?} */ resolve;
        let /** @type {?} */ reject;
        const /** @type {?} */ promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        const /** @type {?} */ xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
            // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
            // by IE10)
            const /** @type {?} */ response = xhr.response || xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
            let /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
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
                reject(`Failed to load ${url}`);
            }
        };
        xhr.onerror = function () { reject(`Failed to load ${url}`); };
        xhr.send();
        return promise;
    }
}
ResourceLoaderImpl.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResourceLoaderImpl.ctorParameters = () => [];
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