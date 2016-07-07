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
var TEST_BROWSER_DYNAMIC_COMPILER_PROVIDERS = [
    index_1.BROWSER_APP_COMPILER_PROVIDERS,
    [
        { provide: compiler_1.DirectiveResolver,
            useClass: testing_1.MockDirectiveResolver },
        { provide: compiler_1.ViewResolver,
            useClass: testing_1.MockViewResolver }
    ]
];
/**
 * Creates a compiler for testing
 *
 * @stable
 */
function browserTestCompiler(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.providers, providers = _c === void 0 ? [] : _c, _d = _b.useJit, useJit = _d === void 0 ? true : _d;
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        TEST_BROWSER_DYNAMIC_COMPILER_PROVIDERS,
        { provide: compiler_1.CompilerConfig, useValue: new compiler_1.CompilerConfig({ genDebugInfo: true, useJit: useJit }) },
        providers ? providers : []
    ]);
    return injector.get(core_1.Compiler);
}
exports.browserTestCompiler = browserTestCompiler;
/**
 * Platform for testing.
 *
 * @experimental API related to bootstrapping are still under review.
 */
exports.browserDynamicTestPlatform = testing_3.browserTestPlatform;
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