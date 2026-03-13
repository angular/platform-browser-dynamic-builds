/**
 * @license Angular v21.2.4+sha-334ae10
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { StaticProvider, PlatformRef } from '@angular/core';
import * as i1 from '@angular/platform-browser/testing';

/**
 * @deprecated Use the `platformBrowserTesting` function instead from `@angular/platform-browser/testing`.
 * In case you are not in a CLI app and rely on JIT compilation, you might also need to import `@angular/compiler`
 */
declare const platformBrowserDynamicTesting: (extraProviders?: StaticProvider[]) => PlatformRef;
/**
 * NgModule for testing.
 *
 * @deprecated Use the `BrowserTestingModule` from `@angular/platform-browser/testing` instead.
 */
declare class BrowserDynamicTestingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserDynamicTestingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BrowserDynamicTestingModule, never, never, [typeof i1.BrowserTestingModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BrowserDynamicTestingModule>;
}

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting };
