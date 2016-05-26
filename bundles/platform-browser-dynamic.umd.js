/**
 * @license AngularJS v2.0.0-be48ba1
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}), global.ng.platformBrowser));
}(this, function (exports, _angular_platformBrowser) {
    'use strict';
    /* @deprecated the platform-browser-dynamic module is deprecated. */
    var BROWSER_APP_DYNAMIC_PROVIDERS = [
        _angular_platformBrowser.BROWSER_APP_PROVIDERS,
        _angular_platformBrowser.BROWSER_APP_COMPILER_PROVIDERS
    ];
    console.log("platform-browser-dynamic is deprecated, use platform-browser instead");
    exports.BROWSER_APP_DYNAMIC_PROVIDERS = BROWSER_APP_DYNAMIC_PROVIDERS;
    exports.bootstrap = _angular_platformBrowser.bootstrap;
    exports.CACHED_TEMPLATE_PROVIDER = _angular_platformBrowser.CACHED_TEMPLATE_PROVIDER;
}));
