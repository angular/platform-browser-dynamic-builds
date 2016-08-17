import { PlatformRef, Provider } from '@angular/core';
/**
 * @experimental
 */
export declare const RESOURCE_CACHE_PROVIDER: Provider[];
/**
 * @experimental API related to bootstrapping are still under review.
 */
export declare const platformBrowserDynamic: (extraProviders?: any[]) => PlatformRef;
/**
 * Bootstraps the worker ui.
 *
 * @experimental
 */
export declare function bootstrapWorkerUi(workerScriptUri: string, customProviders?: Provider[]): Promise<PlatformRef>;
/**
 * @experimental API related to bootstrapping are still under review.
 */
export declare const platformWorkerAppDynamic: (extraProviders?: any[]) => PlatformRef;
