/**
 * @license Angular v20.1.0-next.0+sha-e7656b8
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

import { Version, CompilerFactory, CompilerOptions, Compiler, StaticProvider, PlatformRef } from '@angular/core';

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
 * @deprecated Use the `platformBrowser` function instead from `@angular/platform-browser`.
 * In case you are not in a CLI app and rely on JIT compilation, you will also need to import `@angular/compiler`
 */
declare const platformBrowserDynamic: (extraProviders?: StaticProvider[]) => PlatformRef;

export { JitCompilerFactory, VERSION, platformBrowserDynamic, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS };
