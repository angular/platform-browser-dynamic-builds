"use strict";
var compiler_1 = require("@angular/compiler");
var xhr_impl_1 = require("./xhr/xhr_impl");
var xhr_impl_2 = require("./web_workers/ui/xhr_impl");
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var platform_browser_2 = require('@angular/platform-browser');
var lang_1 = require('./facade/lang');
var async_1 = require('./facade/async');
exports.WORKER_RENDER_DYNAMIC_APPLICATION_PROVIDERS = [
    platform_browser_1.WORKER_RENDER_APPLICATION_PROVIDERS,
    /* @ts2dart_Provider */ { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
    xhr_impl_2.MessageBasedXHRImpl,
    /* @ts2dart_Provider */ { provide: platform_browser_1.WORKER_RENDER_STARTABLE_MESSAGING_SERVICE, useExisting: xhr_impl_2.MessageBasedXHRImpl, multi: true },
];
function bootstrapRender(workerScriptUri, customProviders) {
    var app = core_1.ReflectiveInjector.resolveAndCreate([
        exports.WORKER_RENDER_DYNAMIC_APPLICATION_PROVIDERS,
        /* @ts2dart_Provider */ { provide: platform_browser_2.WORKER_SCRIPT, useValue: workerScriptUri },
        lang_1.isPresent(customProviders) ? customProviders : []
    ], platform_browser_2.workerRenderPlatform().injector);
    // Return a promise so that we keep the same semantics as Dart,
    // and we might want to wait for the app side to come up
    // in the future...
    return async_1.PromiseWrapper.resolve(app.get(core_1.ApplicationRef));
}
exports.bootstrapRender = bootstrapRender;
//# sourceMappingURL=worker_render.js.map