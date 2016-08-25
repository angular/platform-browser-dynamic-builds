import { ClassProvider, ExistingProvider, FactoryProvider, PlatformRef, TypeProvider, ValueProvider } from '@angular/core';
export * from './private_export_testing';
/**
 * @stable
 */
export declare const platformBrowserDynamicTesting: (extraProviders?: (TypeProvider | ValueProvider | ClassProvider | ExistingProvider | FactoryProvider | any[])[]) => PlatformRef;
/**
 * NgModule for testing.
 *
 * @stable
 */
export declare class BrowserDynamicTestingModule {
}
