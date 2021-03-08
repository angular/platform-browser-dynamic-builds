/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createPlatformFactory, NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { DOMTestComponentRenderer } from './dom_test_component_renderer';
import { platformCoreDynamicTesting } from './platform_core_dynamic_testing';
import * as i0 from "@angular/core";
export * from './private_export_testing';
/**
 * @publicApi
 */
export const platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
export class BrowserDynamicTestingModule {
}
BrowserDynamicTestingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BrowserDynamicTestingModule });
BrowserDynamicTestingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ factory: function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); }, providers: [
        { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
    ], imports: [BrowserTestingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BrowserDynamicTestingModule, { exports: [BrowserTestingModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserDynamicTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyw0Q0FBNEMsSUFBSSwyQ0FBMkMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzlJLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOztBQUUzRSxjQUFjLDBCQUEwQixDQUFDO0FBRXpDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcscUJBQXFCLENBQzlELDBCQUEwQixFQUFFLHVCQUF1QixFQUNuRCwyQ0FBMkMsQ0FBQyxDQUFDO0FBRWpEOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sMkJBQTJCOzs2RUFBM0IsMkJBQTJCO21KQUEzQiwyQkFBMkIsbUJBSjNCO1FBQ1QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDO0tBQ3JFLFlBSFMsb0JBQW9CO3dGQUtuQiwyQkFBMkIsY0FMNUIsb0JBQW9CO3VGQUtuQiwyQkFBMkI7Y0FOdkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDO2lCQUNyRTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y3JlYXRlUGxhdGZvcm1GYWN0b3J5LCBOZ01vZHVsZSwgUGxhdGZvcm1SZWYsIFN0YXRpY1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHvJtUlOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlMgYXMgSU5URVJOQUxfQlJPV1NFUl9EWU5BTUlDX1BMQVRGT1JNX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7QnJvd3NlclRlc3RpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZyc7XG5cbmltcG9ydCB7RE9NVGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICcuL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlcic7XG5pbXBvcnQge3BsYXRmb3JtQ29yZUR5bmFtaWNUZXN0aW5nfSBmcm9tICcuL3BsYXRmb3JtX2NvcmVfZHluYW1pY190ZXN0aW5nJztcblxuZXhwb3J0ICogZnJvbSAnLi9wcml2YXRlX2V4cG9ydF90ZXN0aW5nJztcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZyA9IGNyZWF0ZVBsYXRmb3JtRmFjdG9yeShcbiAgICBwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZywgJ2Jyb3dzZXJEeW5hbWljVGVzdGluZycsXG4gICAgSU5URVJOQUxfQlJPV1NFUl9EWU5BTUlDX1BMQVRGT1JNX1BST1ZJREVSUyk7XG5cbi8qKlxuICogTmdNb2R1bGUgZm9yIHRlc3RpbmcuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQnJvd3NlclRlc3RpbmdNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogVGVzdENvbXBvbmVudFJlbmRlcmVyLCB1c2VDbGFzczogRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUge1xufVxuIl19