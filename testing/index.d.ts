/**
 * @license Angular v19.2.2+sha-2466fc9
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as _angular_core from '@angular/core';
import { PlatformRef, StaticProvider } from '@angular/core';
import * as i1 from '@angular/platform-browser/testing';
export { ɵDOMTestComponentRenderer } from '@angular/platform-browser/testing';

/**
 * Platform for dynamic tests
 *
 * @publicApi
 */
declare const platformCoreDynamicTesting: (extraProviders?: any[]) => PlatformRef;

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
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<BrowserDynamicTestingModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<BrowserDynamicTestingModule, never, never, [typeof i1.BrowserTestingModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<BrowserDynamicTestingModule>;
}

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting, platformCoreDynamicTesting as ɵplatformCoreDynamicTesting };
