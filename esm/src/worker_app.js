import { WORKER_APP_APPLICATION_PROVIDERS, workerAppPlatform } from '@angular/platform-browser';
import { COMPILER_PROVIDERS, XHR } from '@angular/compiler';
import { WebWorkerXHRImpl } from './web_workers/worker/xhr_impl';
import { isPresent } from './facade/lang';
import { ReflectiveInjector, coreLoadAndBootstrap } from '@angular/core';
export const WORKER_APP_DYNAMIC_APPLICATION_PROVIDERS = [
    WORKER_APP_APPLICATION_PROVIDERS,
    COMPILER_PROVIDERS,
    WebWorkerXHRImpl,
    /* @ts2dart_Provider */ { provide: XHR, useExisting: WebWorkerXHRImpl }
];
export function bootstrapApp(appComponentType, customProviders) {
    var appInjector = ReflectiveInjector.resolveAndCreate([WORKER_APP_DYNAMIC_APPLICATION_PROVIDERS, isPresent(customProviders) ? customProviders : []], workerAppPlatform().injector);
    return coreLoadAndBootstrap(appInjector, appComponentType);
}
//# sourceMappingURL=worker_app.js.map