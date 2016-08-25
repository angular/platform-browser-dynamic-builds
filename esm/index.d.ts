import { ClassProvider, ExistingProvider, FactoryProvider, PlatformRef, Provider, TypeProvider, ValueProvider } from '@angular/core';
/**
 * @experimental
 */
export declare const RESOURCE_CACHE_PROVIDER: Provider[];
/**
 * @stable
 */
export declare const platformBrowserDynamic: (extraProviders?: (TypeProvider | ValueProvider | ClassProvider | ExistingProvider | FactoryProvider | any[])[]) => PlatformRef;
/**
 * Bootstraps the worker ui.
 *
 * @experimental WebWorker support is currently experimental
 */
export declare function bootstrapWorkerUi(workerScriptUri: string, customProviders?: Provider[]): Promise<PlatformRef>;
/**
 * @experimental WebWorker support is currently experimental
 */
export declare const platformWorkerAppDynamic: (extraProviders?: (TypeProvider | ValueProvider | ClassProvider | ExistingProvider | FactoryProvider | any[])[]) => PlatformRef;
