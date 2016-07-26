/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { analyzeAppProvidersForDeprecatedConfiguration } from '@angular/compiler';
import { OverridingTestComponentBuilder, platformCoreDynamicTesting } from '@angular/compiler/testing';
import { CompilerOptions, NgModule, createPlatformFactory } from '@angular/core';
import { TestComponentBuilder, TestComponentRenderer, initTestEnvironment } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { Console } from './core_private';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './src/platform_providers';
import { DOMTestComponentRenderer } from './testing/dom_test_component_renderer';
export * from './private_export_testing';
/**
 * @experimental API related to bootstrapping are still under review.
 */
export const platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * @deprecated Use {@link platformBrowserDynamicTesting} instead
 */
export const browserDynamicTestingPlatform = platformBrowserDynamicTesting;
export class BrowserDynamicTestingModule {
}
/** @nocollapse */
BrowserDynamicTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentBuilder, useClass: OverridingTestComponentBuilder },
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                ]
            },] },
];
/**
 * @deprecated Use initTestEnvironment with browserDynamicTestingPlatform instead.
 */
export const TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = 
// Note: This is not a real provider but a hack to still support the deprecated
// `setBaseTestProviders` method!
[(appProviders) => {
        const deprecatedConfiguration = analyzeAppProvidersForDeprecatedConfiguration(appProviders);
        const platformRef = createPlatformFactory(platformBrowserDynamicTesting, 'browserDynamicTestingDeprecated', [{
                provide: CompilerOptions,
                useValue: deprecatedConfiguration.compilerOptions,
                multi: true
            }])();
        class DynamicTestModule {
        }
        /** @nocollapse */
        DynamicTestModule.decorators = [
            { type: NgModule, args: [{
                        exports: [BrowserDynamicTestingModule],
                        declarations: [deprecatedConfiguration.moduleDeclarations]
                    },] },
        ];
        const testInjector = initTestEnvironment(DynamicTestModule, platformRef);
        const console = testInjector.get(Console);
        deprecatedConfiguration.deprecationMessages.forEach((msg) => console.warn(msg));
    }];
/**
 * @deprecated Use initTestEnvironment with BrowserDynamicTestingModule instead.
 */
export const TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS = [];
//# sourceMappingURL=testing.js.map