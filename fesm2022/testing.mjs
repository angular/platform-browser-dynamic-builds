/**
 * @license Angular v19.2.14+sha-6f6db99
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { createPlatformFactory, NgModule } from '@angular/core';
import { platformBrowserDynamic } from './platform-browser-dynamic.mjs';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import '@angular/compiler';
import '@angular/platform-browser';

/**
 * @publicApi
 */
const platformBrowserDynamicTesting = createPlatformFactory(platformBrowserDynamic, 'browserDynamicTesting');
/**
 * NgModule for testing.
 *
 * @publicApi
 */
class BrowserDynamicTestingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14+sha-6f6db99", ngImport: i0, type: BrowserDynamicTestingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.14+sha-6f6db99", ngImport: i0, type: BrowserDynamicTestingModule, exports: [BrowserTestingModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.14+sha-6f6db99", ngImport: i0, type: BrowserDynamicTestingModule, imports: [BrowserTestingModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14+sha-6f6db99", ngImport: i0, type: BrowserDynamicTestingModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [BrowserTestingModule],
                }]
        }] });

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting };
//# sourceMappingURL=testing.mjs.map
