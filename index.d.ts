/**
 * @license Angular v20.1.0-next.0+sha-d8532bc
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { Version, CompilerFactory, CompilerOptions, Compiler, StaticProvider } from '@angular/core';

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

declare const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[];
/**
 * @publicApi
 */
declare const platformBrowserDynamic: (extraProviders?: StaticProvider[]) => i0.PlatformRef;

export { JitCompilerFactory, VERSION, platformBrowserDynamic, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS };
