/**
 * @license Angular v4.0.0-rc.3-3c15916
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
import { ResourceLoader, platformCoreDynamic } from '@angular/compiler';
import { createPlatformFactory, PLATFORM_ID, COMPILER_OPTIONS, Injectable, ɵglobal, Version } from '@angular/core';
import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

class ResourceLoaderImpl extends ResourceLoader {
    get(url) {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
            // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
            // by IE10)
            const response = xhr.response || xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
            let status = xhr.status === 1223 ? 204 : xhr.status;
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

const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
];

/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */
class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = ɵglobal.$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return Promise.reject('CachedResourceLoader: Did not find cached template for ' + url);
        }
    }
}

/**
 * @stable
 */
const VERSION = new Version('4.0.0-rc.3-3c15916');

/**
 * @experimental
 */
const RESOURCE_CACHE_PROVIDER = [{ provide: ResourceLoader, useClass: CachedResourceLoader }];
/**
 * @stable
 */
const platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

export { RESOURCE_CACHE_PROVIDER, platformBrowserDynamic, VERSION, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ResourceLoaderImpl as ɵResourceLoaderImpl };