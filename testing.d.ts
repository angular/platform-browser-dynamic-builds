import { CompilerFactory, PlatformRef } from '@angular/core';
export * from './private_export_testing';
/**
 * CompilerFactory for browser dynamic test platform
 *
 * @experimental
 */
export declare const BROWSER_DYNAMIC_TEST_COMPILER_FACTORY: CompilerFactory;
/**
 * @experimental API related to bootstrapping are still under review.
 */
export declare const browserDynamicTestPlatform: () => PlatformRef;
/**
 * AppModule for testing.
 *
 * @stable
 */
export declare class BrowserDynamicTestModule {
}
/**
 * @deprecated Use initTestEnvironment with browserDynamicTestPlatform instead.
 */
export declare const TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: Array<any>;
/**
 * @deprecated Use initTestEnvironment with BrowserDynamicTestModule instead.
 */
export declare const TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS: Array<any>;
