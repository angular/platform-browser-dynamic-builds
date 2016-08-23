/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_2 = require('@angular/core/testing');
var testing_3 = require('@angular/platform-browser/testing');
var platform_providers_1 = require('./src/platform_providers');
var dom_test_component_renderer_1 = require('./testing/dom_test_component_renderer');
__export(require('./private_export_testing'));
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.platformBrowserDynamicTesting = core_1.createPlatformFactory(testing_1.platformCoreDynamicTesting, 'browserDynamicTesting', platform_providers_1.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
var BrowserDynamicTestingModule = (function () {
    function BrowserDynamicTestingModule() {
    }
    /** @nocollapse */
    BrowserDynamicTestingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [testing_3.BrowserTestingModule],
                    providers: [
                        { provide: testing_2.TestComponentRenderer, useClass: dom_test_component_renderer_1.DOMTestComponentRenderer },
                    ]
                },] },
    ];
    return BrowserDynamicTestingModule;
}());
exports.BrowserDynamicTestingModule = BrowserDynamicTestingModule;
//# sourceMappingURL=testing.js.map