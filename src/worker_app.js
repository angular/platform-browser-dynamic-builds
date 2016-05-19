"use strict";
var platform_browser_1 = require('@angular/platform-browser');
var compiler_1 = require('@angular/compiler');
var xhr_impl_1 = require('./web_workers/worker/xhr_impl');
var lang_1 = require('./facade/lang');
var core_1 = require('@angular/core');
exports.WORKER_APP_DYNAMIC_APPLICATION_PROVIDERS = [
    platform_browser_1.WORKER_APP_APPLICATION_PROVIDERS,
    compiler_1.COMPILER_PROVIDERS,
    xhr_impl_1.WebWorkerXHRImpl,
    /* @ts2dart_Provider */ { provide: compiler_1.XHR, useExisting: xhr_impl_1.WebWorkerXHRImpl }
];
function bootstrapApp(appComponentType, customProviders) {
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate([exports.WORKER_APP_DYNAMIC_APPLICATION_PROVIDERS, lang_1.isPresent(customProviders) ? customProviders : []], platform_browser_1.workerAppPlatform().injector);
    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
}
exports.bootstrapApp = bootstrapApp;
//# sourceMappingURL=worker_app.js.map