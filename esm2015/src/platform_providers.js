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
import { ɵPLATFORM_BROWSER_ID as PLATFORM_BROWSER_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS as INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { ResourceLoaderImpl } from './resource_loader/resource_loader_impl';
export const /** @type {?} */ INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    INTERNAL_BROWSER_PLATFORM_PROVIDERS,
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID },
];
//# sourceMappingURL=platform_providers.js.map