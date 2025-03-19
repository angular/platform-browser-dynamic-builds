/**
 * @license Angular v19.2.2+sha-13a8709
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { StaticProvider, Version, CompilerFactory, CompilerOptions, Compiler } from '@angular/core';

/**
 * A platform that included corePlatform and the compiler.
 *
 * @publicApi
 */
declare const platformCoreDynamic: (extraProviders?: i0.StaticProvider[]) => i0.PlatformRef;

/**
 * @publicApi
 */
declare const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[];

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser-dynamic package.
 */

/**
 * @publicApi
 */
declare const VERSION: Version;

/**
 * @publicApi
 *
 * @deprecated
 * Ivy JIT mode doesn't require accessing this symbol.
 */
declare class JitCompilerFactory implements CompilerFactory {
    private _defaultOptions;
    createCompiler(options?: CompilerOptions[]): Compiler;
}

/**
 * @publicApi
 */
declare const platformBrowserDynamic: (extraProviders?: i0.StaticProvider[]) => i0.PlatformRef;

export { JitCompilerFactory, VERSION, platformBrowserDynamic, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, platformCoreDynamic as ɵplatformCoreDynamic };
