/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8+sha-532bd11", ngImport: i0, type: BrowserDynamicTestingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.8+sha-532bd11", ngImport: i0, type: BrowserDynamicTestingModule, exports: [BrowserTestingModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.8+sha-532bd11", ngImport: i0, type: BrowserDynamicTestingModule, providers: [{ provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }], imports: [BrowserTestingModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8+sha-532bd11", ngImport: i0, type: BrowserDynamicTestingModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [BrowserTestingModule],
                    providers: [{ provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyw0Q0FBNEMsSUFBSSwyQ0FBMkMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzlJLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOztBQUUzRSxjQUFjLDBCQUEwQixDQUFDO0FBRXpDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcscUJBQXFCLENBQ2hFLDBCQUEwQixFQUMxQix1QkFBdUIsRUFDdkIsMkNBQTJDLENBQzVDLENBQUM7QUFFRjs7OztHQUlHO0FBS0gsTUFBTSxPQUFPLDJCQUEyQjt5SEFBM0IsMkJBQTJCOzBIQUEzQiwyQkFBMkIsWUFINUIsb0JBQW9COzBIQUduQiwyQkFBMkIsYUFGM0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyxZQUR2RSxvQkFBb0I7O3NHQUduQiwyQkFBMkI7a0JBSnZDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBQyxDQUFDO2lCQUNsRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtjcmVhdGVQbGF0Zm9ybUZhY3RvcnksIE5nTW9kdWxlLCBQbGF0Zm9ybVJlZiwgU3RhdGljUHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge8m1SU5URVJOQUxfQlJPV1NFUl9EWU5BTUlDX1BMQVRGT1JNX1BST1ZJREVSUyBhcyBJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHtCcm93c2VyVGVzdGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci90ZXN0aW5nJztcblxuaW1wb3J0IHtET01UZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJy4vZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyJztcbmltcG9ydCB7cGxhdGZvcm1Db3JlRHluYW1pY1Rlc3Rpbmd9IGZyb20gJy4vcGxhdGZvcm1fY29yZV9keW5hbWljX3Rlc3RpbmcnO1xuXG5leHBvcnQgKiBmcm9tICcuL3ByaXZhdGVfZXhwb3J0X3Rlc3RpbmcnO1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nID0gY3JlYXRlUGxhdGZvcm1GYWN0b3J5KFxuICBwbGF0Zm9ybUNvcmVEeW5hbWljVGVzdGluZyxcbiAgJ2Jyb3dzZXJEeW5hbWljVGVzdGluZycsXG4gIElOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlMsXG4pO1xuXG4vKipcbiAqIE5nTW9kdWxlIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Jyb3dzZXJUZXN0aW5nTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFRlc3RDb21wb25lbnRSZW5kZXJlciwgdXNlQ2xhc3M6IERPTVRlc3RDb21wb25lbnRSZW5kZXJlcn1dLFxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUge31cbiJdfQ==