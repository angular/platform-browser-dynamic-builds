"use strict";
var platform_browser_1 = require('@angular/platform-browser');
exports.bootstrap = platform_browser_1.bootstrap;
exports.CACHED_TEMPLATE_PROVIDER = platform_browser_1.CACHED_TEMPLATE_PROVIDER;
var platform_browser_2 = require('@angular/platform-browser');
/* @deprecated the platform-browser-dynamic module is deprecated. */
exports.BROWSER_APP_DYNAMIC_PROVIDERS = [
    platform_browser_2.BROWSER_APP_PROVIDERS,
    platform_browser_2.BROWSER_APP_COMPILER_PROVIDERS
];
console.log("platform-browser-dynamic is deprecated, use platform-browser instead");
//# sourceMappingURL=index.js.map