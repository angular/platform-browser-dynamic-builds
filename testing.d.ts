import { PlatformRef } from '@angular/core';
export * from './private_export_testing';
/**
 * @experimental API related to bootstrapping are still under review.
 */
export declare const platformBrowserDynamicTesting: (extraProviders?: any[]) => PlatformRef;
/**
 * NgModule for testing.
 *
 * @stable
 */
export declare class BrowserDynamicTestingModule {
}
