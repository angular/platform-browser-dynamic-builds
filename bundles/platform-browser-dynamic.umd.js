/**
 * @license AngularJS v0.0.0-PLACEHOLDER
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/compiler', '@angular/core', '@angular/platform-browser'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}), global.ng.compiler, global.ng.core, global.ng.platformBrowser));
}(this, function (exports, _angular_compiler, _angular_core, _angular_platformBrowser) {
    'use strict';
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = _angular_platformBrowser.__platform_browser_private__.INTERNAL_BROWSER_PLATFORM_PROVIDERS;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    var XHRImpl = (function (_super) {
        __extends(XHRImpl, _super);
        function XHRImpl() {
            _super.apply(this, arguments);
        }
        XHRImpl.prototype.get = function (url) {
            var resolve;
            var reject;
            var promise = new Promise(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'text';
            xhr.onload = function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
                var response = isPresent(xhr.response) ? xhr.response : xhr.responseText;
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = xhr.status === 1223 ? 204 : xhr.status;
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
        return XHRImpl;
    }(_angular_compiler.XHR));
    /** @nocollapse */
    XHRImpl.decorators = [
        { type: _angular_core.Injectable },
    ];
    var INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
        INTERNAL_BROWSER_PLATFORM_PROVIDERS,
        {
            provide: _angular_core.COMPILER_OPTIONS,
            useValue: { providers: [{ provide: _angular_compiler.XHR, useClass: XHRImpl }] },
            multi: true
        },
    ];
    /**
     * An implementation of XHR that uses a template cache to avoid doing an actual
     * XHR.
     *
     * The template cache needs to be built and loaded into window.$templateCache
     * via a separate mechanism.
     */
    var CachedXHR = (function (_super) {
        __extends(CachedXHR, _super);
        function CachedXHR() {
            _super.call(this);
            this._cache = global$1.$templateCache;
            if (this._cache == null) {
                throw new _angular_core.BaseException('CachedXHR: Template cache was not found in $templateCache.');
            }
        }
        CachedXHR.prototype.get = function (url) {
            if (this._cache.hasOwnProperty(url)) {
                return Promise.resolve(this._cache[url]);
            }
            else {
                return Promise.reject('CachedXHR: Did not find cached template for ' + url);
            }
        };
        return CachedXHR;
    }(_angular_compiler.XHR));
    /**
     * @experimental
     */
    var CACHED_TEMPLATE_PROVIDER = [{ provide: _angular_compiler.XHR, useClass: CachedXHR }];
    /**
     * @experimental API related to bootstrapping are still under review.
     */
    var platformBrowserDynamic = _angular_core.createPlatformFactory(_angular_compiler.platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
    /**
     * Bootstraps the worker ui.
     *
     * @experimental
     */
    function bootstrapWorkerUi(workerScriptUri, customProviders) {
        if (customProviders === void 0) { customProviders = []; }
        // For now, just creates the worker ui platform...
        return Promise.resolve(_angular_platformBrowser.platformWorkerUi([{
                provide: _angular_platformBrowser.WORKER_SCRIPT,
                useValue: workerScriptUri,
            }]
            .concat(customProviders)));
    }
    /**
     * @experimental API related to bootstrapping are still under review.
     */
    var platformWorkerAppDynamic = _angular_core.createPlatformFactory(_angular_compiler.platformCoreDynamic, 'workerAppDynamic', [{
            provide: _angular_core.COMPILER_OPTIONS,
            useValue: { providers: [{ provide: _angular_compiler.XHR, useClass: XHRImpl }] },
            multi: true
        }]);
    exports.CACHED_TEMPLATE_PROVIDER = CACHED_TEMPLATE_PROVIDER;
    exports.platformBrowserDynamic = platformBrowserDynamic;
    exports.bootstrapWorkerUi = bootstrapWorkerUi;
    exports.platformWorkerAppDynamic = platformWorkerAppDynamic;
}));
