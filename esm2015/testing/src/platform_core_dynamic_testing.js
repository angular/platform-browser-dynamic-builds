/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { COMPILER_OPTIONS, CompilerFactory, Injector, createPlatformFactory } from '@angular/core';
import { ɵTestingCompilerFactory as TestingCompilerFactory } from '@angular/core/testing';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { COMPILER_PROVIDERS, TestingCompilerFactoryImpl } from './compiler_factory';
/**
 * Platform for dynamic tests
 *
 * \@experimental
 */
export const /** @type {?} */ platformCoreDynamicTesting = createPlatformFactory(platformCoreDynamic, 'coreDynamicTesting', [
    { provide: COMPILER_OPTIONS, useValue: { providers: COMPILER_PROVIDERS }, multi: true }, {
        provide: TestingCompilerFactory,
        useClass: TestingCompilerFactoryImpl,
        deps: [Injector, CompilerFactory]
    }
]);
//# sourceMappingURL=platform_core_dynamic_testing.js.map