/**
 * @license Angular v20.0.0-next.5+sha-9228a73
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { StaticProvider, PlatformRef } from '@angular/core';
import * as i1 from '@angular/platform-browser/testing';

/**
 * @publicApi
 */
declare const platformBrowserDynamicTesting: (extraProviders?: StaticProvider[]) => PlatformRef;
/**
 * NgModule for testing.
 *
 * @publicApi
 */
declare class BrowserDynamicTestingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserDynamicTestingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BrowserDynamicTestingModule, never, never, [typeof i1.BrowserTestingModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BrowserDynamicTestingModule>;
}

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting };
