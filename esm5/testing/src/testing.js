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
import * as i0 from "@angular/core";
export * from './private_export_testing';
/**
 * @publicApi
 */
export var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
var BrowserDynamicTestingModule = /** @class */ (function () {
    function BrowserDynamicTestingModule() {
    }
    BrowserDynamicTestingModule.ngModuleDef = i0.ɵdefineNgModule({ type: BrowserDynamicTestingModule, bootstrap: [], declarations: [], imports: [], exports: [BrowserTestingModule] });
    BrowserDynamicTestingModule.ngInjectorDef = i0.defineInjector({ factory: function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); }, providers: [
            { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
        ], imports: [[BrowserTestingModule]] });
    return BrowserDynamicTestingModule;
}());
export { BrowserDynamicTestingModule };
/*@__PURE__*/ i0.ɵsetClassMetadata(BrowserDynamicTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                ]
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQStCLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyw0Q0FBNEMsSUFBSSwyQ0FBMkMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzlJLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOztBQUUzRSxjQUFjLDBCQUEwQixDQUFDO0FBRXpDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcscUJBQXFCLENBQzlELDBCQUEwQixFQUFFLHVCQUF1QixFQUNuRCwyQ0FBMkMsQ0FBQyxDQUFDO0FBRWpEOzs7O0dBSUc7QUFDSDtJQUFBO0tBT0M7eUVBRFksMkJBQTJCLDBEQUw1QixvQkFBb0I7Z0pBS25CLDJCQUEyQixtQkFKM0I7WUFDVCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUM7U0FDckUsWUFIUSxDQUFDLG9CQUFvQixDQUFDO3NDQS9CakM7Q0FxQ0MsQUFQRCxJQU9DO1NBRFksMkJBQTJCO21DQUEzQiwyQkFBMkI7Y0FOdkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDO2lCQUNyRTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlLCBQbGF0Zm9ybVJlZiwgU3RhdGljUHJvdmlkZXIsIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7ybVJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTIGFzIElOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge0Jyb3dzZXJUZXN0aW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3Rlc3RpbmcnO1xuXG5pbXBvcnQge0RPTVRlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnLi9kb21fdGVzdF9jb21wb25lbnRfcmVuZGVyZXInO1xuaW1wb3J0IHtwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZ30gZnJvbSAnLi9wbGF0Zm9ybV9jb3JlX2R5bmFtaWNfdGVzdGluZyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vcHJpdmF0ZV9leHBvcnRfdGVzdGluZyc7XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcgPSBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkoXG4gICAgcGxhdGZvcm1Db3JlRHluYW1pY1Rlc3RpbmcsICdicm93c2VyRHluYW1pY1Rlc3RpbmcnLFxuICAgIElOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlMpO1xuXG4vKipcbiAqIE5nTW9kdWxlIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Jyb3dzZXJUZXN0aW5nTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IFRlc3RDb21wb25lbnRSZW5kZXJlciwgdXNlQ2xhc3M6IERPTVRlc3RDb21wb25lbnRSZW5kZXJlcn0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlIHtcbn1cbiJdfQ==