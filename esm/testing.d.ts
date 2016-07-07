import { Compiler, Provider, Type } from '@angular/core';
import { browserTestPlatform } from '@angular/platform-browser/testing';
export * from './private_export_testing';
/**
 * Creates a compiler for testing
 *
 * @stable
 */
export declare function browserTestCompiler({providers, useJit}?: {
    providers?: Array<Type | Provider | any[]>;
    useJit?: boolean;
}): Compiler;
/**
 * Platform for testing.
 *
 * @experimental API related to bootstrapping are still under review.
 */
export declare const browserDynamicTestPlatform: typeof browserTestPlatform;
/**
 * AppModule for testing.
 *
 * @stable
 */
export declare class BrowserDynamicTestModule {
}
