"use strict";
var testing_1 = require('@angular/platform-browser/testing');
var index_1 = require('../index');
var compiler_1 = require('@angular/compiler');
var testing_2 = require('@angular/compiler/testing');
var dom_test_component_renderer_1 = require('./dom_test_component_renderer');
/**
 * Default platform providers for testing.
 */
exports.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = 
/*@ts2dart_const*/ [testing_1.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS];
exports.ADDITIONAL_DYNAMIC_TEST_BROWSER_PROVIDERS = [
    /*@ts2dart_Provider*/ { provide: compiler_1.DirectiveResolver, useClass: testing_2.MockDirectiveResolver },
    /*@ts2dart_Provider*/ { provide: compiler_1.ViewResolver, useClass: testing_2.MockViewResolver },
    testing_2.TestComponentBuilder,
    /*@ts2dart_Provider*/ { provide: testing_2.TestComponentRenderer, useClass: dom_test_component_renderer_1.DOMTestComponentRenderer },
];
/**
 * Default application providers for testing.
 */
exports.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS = 
/*@ts2dart_const*/ [
    index_1.BROWSER_APP_DYNAMIC_PROVIDERS,
    testing_1.ADDITIONAL_TEST_BROWSER_PROVIDERS,
    exports.ADDITIONAL_DYNAMIC_TEST_BROWSER_PROVIDERS
];
//# sourceMappingURL=browser.js.map