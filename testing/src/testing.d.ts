/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformRef, StaticProvider } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser/testing";
export * from './private_export_testing';
/**
 * @publicApi
 */
export declare const platformBrowserDynamicTesting: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;
/**
 * NgModule for testing.
 *
 * @publicApi
 */
export declare class BrowserDynamicTestingModule {
    static ngModuleDef: i0.ɵɵNgModuleDefWithMeta<BrowserDynamicTestingModule, never, never, [typeof i1.BrowserTestingModule]>;
    static ngInjectorDef: i0.ɵɵInjectorDef<BrowserDynamicTestingModule>;
}
