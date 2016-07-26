/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { XHR, analyzeAppProvidersForDeprecatedConfiguration, coreDynamicPlatform } from '@angular/compiler';
import { ApplicationRef, CompilerOptions, NgModule, bootstrapModule, createPlatformFactory } from '@angular/core';
import { BrowserModule, WORKER_SCRIPT, WorkerAppModule, workerUiPlatform } from '@angular/platform-browser';
import { Console } from './core_private';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from './src/platform_providers';
import { CachedXHR } from './src/xhr/xhr_cache';
import { XHRImpl } from './src/xhr/xhr_impl';
/**
 * @deprecated The compiler providers are already included in the {@link CompilerFactory} that is
 * contained the {@link browserDynamicPlatform}()`.
 */
export const BROWSER_APP_COMPILER_PROVIDERS = [];
/**
 * @experimental
 */
export const CACHED_TEMPLATE_PROVIDER = [{ provide: XHR, useClass: CachedXHR }];
/**
 * @experimental API related to bootstrapping are still under review.
 */
export const browserDynamicPlatform = createPlatformFactory(coreDynamicPlatform, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
export function bootstrap(appComponentType, customProvidersOrDynamicModule) {
    let compilerOptions;
    let providers = [];
    let declarations = [];
    let imports = [];
    let precompile = [];
    let deprecationMessages = [];
    if (customProvidersOrDynamicModule instanceof Array) {
        providers = customProvidersOrDynamicModule;
        const deprecatedConfiguration = analyzeAppProvidersForDeprecatedConfiguration(providers);
        declarations = deprecatedConfiguration.moduleDeclarations.concat(declarations);
        compilerOptions = deprecatedConfiguration.compilerOptions;
        deprecationMessages = deprecatedConfiguration.deprecationMessages;
    }
    else if (customProvidersOrDynamicModule) {
        providers = normalizeArray(customProvidersOrDynamicModule.providers);
        declarations = normalizeArray(customProvidersOrDynamicModule.declarations);
        imports = normalizeArray(customProvidersOrDynamicModule.imports);
        precompile = normalizeArray(customProvidersOrDynamicModule.precompile);
        compilerOptions = customProvidersOrDynamicModule.compilerOptions;
    }
    class DynamicModule {
    }
    /** @nocollapse */
    DynamicModule.decorators = [
        { type: NgModule, args: [{
                    providers: providers,
                    declarations: declarations.concat([appComponentType]),
                    imports: [BrowserModule, imports],
                    precompile: precompile.concat([appComponentType])
                },] },
    ];
    return bootstrapModule(DynamicModule, browserDynamicPlatform(), compilerOptions)
        .then((moduleRef) => {
        const console = moduleRef.injector.get(Console);
        deprecationMessages.forEach((msg) => console.warn(msg));
        const appRef = moduleRef.injector.get(ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
}
/**
 * Bootstraps the worker ui.
 *
 * @experimental
 */
export function bootstrapWorkerUi(workerScriptUri, customProviders = []) {
    // For now, just creates the worker ui platform...
    return Promise.resolve(workerUiPlatform([{
            provide: WORKER_SCRIPT,
            useValue: workerScriptUri,
        }].concat(customProviders)));
}
/**
 * @experimental API related to bootstrapping are still under review.
 */
export const workerAppDynamicPlatform = createPlatformFactory(coreDynamicPlatform, 'workerAppDynamic', [{
        provide: CompilerOptions,
        useValue: { providers: [{ provide: XHR, useClass: XHRImpl }] },
        multi: true
    }]);
/**
 * @deprecated Create an {@link NgModule} that includes the {@link WorkerAppModule} and use {@link
 * bootstrapModule}
 * with the {@link workerAppDynamicPlatform}() instead.
 */
export function bootstrapWorkerApp(appComponentType, customProviders) {
    console.warn('bootstrapWorkerApp is deprecated. Create an @NgModule that includes the `WorkerAppModule` and use `bootstrapModule` with the `workerAppDynamicPlatform()` instead.');
    const deprecatedConfiguration = analyzeAppProvidersForDeprecatedConfiguration(customProviders);
    const declarations = [deprecatedConfiguration.moduleDeclarations.concat([appComponentType])];
    class DynamicModule {
    }
    /** @nocollapse */
    DynamicModule.decorators = [
        { type: NgModule, args: [{
                    providers: customProviders,
                    declarations: declarations,
                    imports: [WorkerAppModule],
                    precompile: [appComponentType]
                },] },
    ];
    return bootstrapModule(DynamicModule, workerAppDynamicPlatform(), deprecatedConfiguration.compilerOptions)
        .then((moduleRef) => {
        const console = moduleRef.injector.get(Console);
        deprecatedConfiguration.deprecationMessages.forEach((msg) => console.warn(msg));
        const appRef = moduleRef.injector.get(ApplicationRef);
        return appRef.bootstrap(appComponentType);
    });
}
function normalizeArray(arr) {
    return arr ? arr : [];
}
//# sourceMappingURL=index.js.map