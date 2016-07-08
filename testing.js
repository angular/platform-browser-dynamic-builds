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
var compiler_1 = require('@angular/compiler');
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_2 = require('@angular/core/testing');
var testing_3 = require('@angular/platform-browser/testing');
var index_1 = require('./index');
var dom_test_component_renderer_1 = require('./testing/dom_test_component_renderer');
__export(require('./private_export_testing'));
/**
 * CompilerFactory for browser dynamic test platform
 *
 * @experimental
 */
exports.BROWSER_DYNAMIC_TEST_COMPILER_FACTORY = index_1.BROWSER_DYNAMIC_COMPILER_FACTORY.withDefaults({
    providers: [
        { provide: compiler_1.DirectiveResolver, useClass: testing_1.MockDirectiveResolver },
        { provide: compiler_1.ViewResolver, useClass: testing_1.MockViewResolver }
    ]
});
/**
 * Providers for the browser dynamic platform
 *
 * @experimental
 */
var BROWSER_DYNAMIC_TEST_PLATFORM_PROVIDERS = [
    testing_3.TEST_BROWSER_PLATFORM_PROVIDERS,
    index_1.BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    { provide: core_1.CompilerFactory, useValue: exports.BROWSER_DYNAMIC_TEST_COMPILER_FACTORY },
];
/**
 * @experimental API related to bootstrapping are still under review.
 */
exports.browserDynamicTestPlatform = core_1.createPlatformFactory('browserDynamicTest', BROWSER_DYNAMIC_TEST_PLATFORM_PROVIDERS);
var BrowserDynamicTestModule = (function () {
    function BrowserDynamicTestModule() {
    }
    /** @nocollapse */
    BrowserDynamicTestModule.decorators = [
        { type: core_1.AppModule, args: [{
                    modules: [testing_3.BrowserTestModule],
                    providers: [
                        { provide: testing_2.TestComponentBuilder, useClass: testing_1.OverridingTestComponentBuilder },
                        { provide: testing_2.TestComponentRenderer, useClass: dom_test_component_renderer_1.DOMTestComponentRenderer },
                    ]
                },] },
    ];
    return BrowserDynamicTestModule;
}());
exports.BrowserDynamicTestModule = BrowserDynamicTestModule;
//# sourceMappingURL=testing.js.map