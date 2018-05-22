/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, createPlatformFactory } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { DOMTestComponentRenderer } from './dom_test_component_renderer';
import { platformCoreDynamicTesting } from './platform_core_dynamic_testing';
export * from './private_export_testing';
export var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 *
 */
var BrowserDynamicTestingModule = /** @class */ (function () {
    function BrowserDynamicTestingModule() {
    }
    BrowserDynamicTestingModule.decorators = [
        { type: NgModule, args: [{
                    exports: [BrowserTestingModule],
                    providers: [
                        { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                    ]
                },] }
    ];
    return BrowserDynamicTestingModule;
}());
export { BrowserDynamicTestingModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUErQixxQkFBcUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsNENBQTRDLElBQUksMkNBQTJDLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5SSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRSxjQUFjLDBCQUEwQixDQUFDO0FBRXpDLE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUFHLHFCQUFxQixDQUM5RCwwQkFBMEIsRUFBRSx1QkFBdUIsRUFDbkQsMkNBQTJDLENBQUMsQ0FBQzs7Ozs7Ozs7OztnQkFPaEQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDO3FCQUNyRTtpQkFDRjs7c0NBaENEOztTQWlDYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGUsIFBsYXRmb3JtUmVmLCBTdGF0aWNQcm92aWRlciwgY3JlYXRlUGxhdGZvcm1GYWN0b3J5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHvJtUlOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlMgYXMgSU5URVJOQUxfQlJPV1NFUl9EWU5BTUlDX1BMQVRGT1JNX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7QnJvd3NlclRlc3RpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZyc7XG5cbmltcG9ydCB7RE9NVGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICcuL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlcic7XG5pbXBvcnQge3BsYXRmb3JtQ29yZUR5bmFtaWNUZXN0aW5nfSBmcm9tICcuL3BsYXRmb3JtX2NvcmVfZHluYW1pY190ZXN0aW5nJztcblxuZXhwb3J0ICogZnJvbSAnLi9wcml2YXRlX2V4cG9ydF90ZXN0aW5nJztcblxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nID0gY3JlYXRlUGxhdGZvcm1GYWN0b3J5KFxuICAgIHBsYXRmb3JtQ29yZUR5bmFtaWNUZXN0aW5nLCAnYnJvd3NlckR5bmFtaWNUZXN0aW5nJyxcbiAgICBJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTKTtcblxuLyoqXG4gKiBOZ01vZHVsZSBmb3IgdGVzdGluZy5cbiAqXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQnJvd3NlclRlc3RpbmdNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogVGVzdENvbXBvbmVudFJlbmRlcmVyLCB1c2VDbGFzczogRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUge1xufVxuIl19