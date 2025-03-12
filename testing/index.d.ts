/**
 * @license Angular v20.0.0-next.2+sha-f5f2549
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { PlatformRef, StaticProvider } from '@angular/core';
import * as i1 from '@angular/platform-browser/testing';
import { TestComponentRenderer } from '@angular/core/testing';

/**
 * A DOM based implementation of the TestComponentRenderer.
 */
declare class DOMTestComponentRenderer extends TestComponentRenderer {
    private _doc;
    constructor(_doc: any);
    insertRootElement(rootElId: string): void;
    removeAllRootElements(): void;
    private removeAllRootElementsImpl;
    static ɵfac: i0.ɵɵFactoryDeclaration<DOMTestComponentRenderer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DOMTestComponentRenderer>;
}

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
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserDynamicTestingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BrowserDynamicTestingModule, never, never, [typeof i1.BrowserTestingModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BrowserDynamicTestingModule>;
}

export { BrowserDynamicTestingModule, platformBrowserDynamicTesting, DOMTestComponentRenderer as ɵDOMTestComponentRenderer, platformCoreDynamicTesting as ɵplatformCoreDynamicTesting };
