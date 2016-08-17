/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var compiler_1 = require('@angular/compiler');
var core_1 = require('@angular/core');
var platform_browser_private_1 = require('../platform_browser_private');
var resource_loader_impl_1 = require('./resource_loader/resource_loader_impl');
exports.INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    platform_browser_private_1.INTERNAL_BROWSER_PLATFORM_PROVIDERS,
    {
        provide: core_1.COMPILER_OPTIONS,
        useValue: { providers: [{ provide: compiler_1.ResourceLoader, useClass: resource_loader_impl_1.ResourceLoaderImpl }] },
        multi: true
    },
];
//# sourceMappingURL=platform_providers.js.map