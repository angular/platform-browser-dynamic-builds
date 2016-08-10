/**
 * @license AngularJS v0.0.0-PLACEHOLDER
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/compiler', '@angular/core', '@angular/platform-browser'], factory) :
            (factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}), global.ng.compiler, global.ng.core, global.ng.platformBrowser));
}(this, function (exports, _angular_compiler, _angular_core, _angular_platformBrowser) {
    'use strict';
    var Console = _angular_core.__core_private__.Console;
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = _angular_platformBrowser.__platform_browser_private__.INTERNAL_BROWSER_PLATFORM_PROVIDERS;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalScope;
    if (typeof window === 'undefined') {
        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
            globalScope = self;
        }
        else {
            globalScope = global;
        }
    }
    else {
        globalScope = window;
    }
    // Need to declare a new variable for global here since TypeScript
    // exports the original value of the symbol.
    var global$1 = globalScope;
    // TODO: remove calls to assert in production environment
    // Note: Can't just export this and import in in other files
    // as `assert` is a reserved keyword in Dart
    global$1.assert = function assert(condition) {
        // TODO: to be fixed properly via #2830, noop for now
    };
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    var XHRImpl = (function (_super) {
        __extends(XHRImpl, _super);
        function XHRImpl() {
            _super.apply(this, arguments);
        }
        XHRImpl.prototype.get = function (url) {
            var resolve;
            var reject;
            var promise = new Promise(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'text';
            xhr.onload = function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
                var response = isPresent(xhr.response) ? xhr.response : xhr.responseText;
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = xhr.status === 1223 ? 204 : xhr.status;
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = response ? 200 : 0;
                }
                if (200 <= status && status <= 300) {
                    resolve(response);
                }
                else {
                    reject("Failed to load " + url);
                }
            };
            xhr.onerror = function () { reject("Failed to load " + url); };
            xhr.send();
            return promise;
        };
        return XHRImpl;
    }(_angular_compiler.XHR));
    /** @nocollapse */
    XHRImpl.decorators = [
        { type: _angular_core.Injectable },
    ];
    var INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
        INTERNAL_BROWSER_PLATFORM_PROVIDERS,
        {
            provide: _angular_core.COMPILER_OPTIONS,
            useValue: { providers: [{ provide: _angular_compiler.XHR, useClass: XHRImpl }] },
            multi: true
        },
    ];
    /**
     * An implementation of XHR that uses a template cache to avoid doing an actual
     * XHR.
     *
     * The template cache needs to be built and loaded into window.$templateCache
     * via a separate mechanism.
     */
    var CachedXHR = (function (_super) {
        __extends(CachedXHR, _super);
        function CachedXHR() {
            _super.call(this);
            this._cache = global$1.$templateCache;
            if (this._cache == null) {
                throw new _angular_core.BaseException('CachedXHR: Template cache was not found in $templateCache.');
            }
        }
        CachedXHR.prototype.get = function (url) {
            if (this._cache.hasOwnProperty(url)) {
                return Promise.resolve(this._cache[url]);
            }
            else {
                return Promise.reject('CachedXHR: Did not find cached template for ' + url);
            }
        };
        return CachedXHR;
    }(_angular_compiler.XHR));
    /**
     * @deprecated The compiler providers are already included in the {@link CompilerFactory} that is
     * contained the {@link browserDynamicPlatform}()`.
     */
    var BROWSER_APP_COMPILER_PROVIDERS = [];
    /**
     * @experimental
     */
    var CACHED_TEMPLATE_PROVIDER = [{ provide: _angular_compiler.XHR, useClass: CachedXHR }];
    /**
     * @experimental API related to bootstrapping are still under review.
     */
    var platformBrowserDynamic = _angular_core.createPlatformFactory(_angular_compiler.platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
    /**
     * @deprecated Use {@link platformBrowserDynamic} instead
     */
    var browserDynamicPlatform = platformBrowserDynamic;
    /**
     * Bootstrapping for Angular applications.
     *
     * You instantiate an Angular application by explicitly specifying a component to use
     * as the root component for your application via the `bootstrap()` method.
     *
     * ## Simple Example
     *
     * Assuming this `index.html`:
     *
     * ```html
     * <html>
     *   <!-- load Angular script tags here. -->
     *   <body>
     *     <my-app>loading...</my-app>
     *   </body>
     * </html>
     * ```
     *
     * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
     * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
     * mainly for security reasons, as well as architectural changes in Angular 2. This means
     * that `index.html` can safely be processed using server-side technologies such as
     * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
     * Angular 2 component double-curly `{{ syntax }}`.
     *
     * We can use this script code:
     *
     * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
     *
     * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
     * argument, Angular performs the following tasks:
     *
     *  1. It uses the component's `selector` property to locate the DOM element which needs
     *     to be upgraded into the angular component.
     *  2. It creates a new child injector (from the platform injector). Optionally, you can
     *     also override the injector configuration for an app by invoking `bootstrap` with the
     *     `componentInjectableBindings` argument.
     *  3. It creates a new `Zone` and connects it to the angular application's change detection
     *     domain instance.
     *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
     *     template into it.
     *  5. It instantiates the specified component.
     *  6. Finally, Angular performs change detection to apply the initial data providers for the
     *     application.
     *
     *
     * ## Bootstrapping Multiple Applications
     *
     * When working within a browser window, there are many singleton resources: cookies, title,
     * location, and others. Angular services that represent these resources must likewise be
     * shared across all Angular applications that occupy the same browser window. For this
     * reason, Angular creates exactly one global platform object which stores all shared
     * services, and each angular application injector has the platform injector as its parent.
     *
     * Each application has its own private injector as well. When there are multiple
     * applications on a page, Angular treats each application injector's services as private
     * to that application.
     *
     * ## API (version 1)
     *
     * - `appComponentType`: The root component which should act as the application. This is
     *   a reference to a `Type` which is annotated with `@Component(...)`.
     * - `customProviders`: An additional set of providers that can be added to the
     *   app injector to override default injection behavior.
     *
     * ## API (version 2)
     * - `appComponentType`: The root component which should act as the application. This is
     *   a reference to a `Type` which is annotated with `@Component(...)`.
     * - `providers`, `declarations`, `imports`, `entryComponents`: Defines the properties
     *   of the dynamically created module that is used to bootstrap the module.
     * - to configure the compiler, use the `compilerOptions` parameter.
     *
     * Returns a `Promise` of {@link ComponentRef}.
     *
     * @deprecated This api cannot be used with the offline compiler. Use
     * `PlatformRef.boostrapModule()` instead.
     */
    // Note: We are using typescript overloads here to have 2 function signatures!
    function bootstrap(appComponentType, customProviders) {
        var compilerOptions;
        var declarations = [];
        var entryComponents = [];
        var deprecationMessages = [];
        var deprecatedConfiguration = _angular_compiler.analyzeAppProvidersForDeprecatedConfiguration(customProviders);
        declarations = deprecatedConfiguration.moduleDeclarations.concat(declarations);
        compilerOptions = deprecatedConfiguration.compilerOptions;
        deprecationMessages = deprecatedConfiguration.deprecationMessages;
        var DynamicModule = (function () {
            function DynamicModule() {
            }
            return DynamicModule;
        }());
        /** @nocollapse */
        DynamicModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        providers: customProviders,
                        declarations: declarations.concat([appComponentType]),
                        imports: [_angular_platformBrowser.BrowserModule],
                        entryComponents: entryComponents,
                        bootstrap: [appComponentType],
                        schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA]
                    },] },
        ];
        return platformBrowserDynamic()
            .bootstrapModule(DynamicModule, compilerOptions)
            .then(function (moduleRef) {
            var console = moduleRef.injector.get(Console);
            deprecationMessages.forEach(function (msg) { return console.warn(msg); });
            var appRef = moduleRef.injector.get(_angular_core.ApplicationRef);
            return appRef.components[0];
        });
    }
    /**
     * Bootstraps the worker ui.
     *
     * @experimental
     */
    function bootstrapWorkerUi(workerScriptUri, customProviders) {
        if (customProviders === void 0) { customProviders = []; }
        // For now, just creates the worker ui platform...
        return Promise.resolve(_angular_platformBrowser.platformWorkerUi([{
                provide: _angular_platformBrowser.WORKER_SCRIPT,
                useValue: workerScriptUri,
            }].concat(customProviders)));
    }
    /**
     * @experimental API related to bootstrapping are still under review.
     */
    var platformWorkerAppDynamic = _angular_core.createPlatformFactory(_angular_compiler.platformCoreDynamic, 'workerAppDynamic', [{
            provide: _angular_core.COMPILER_OPTIONS,
            useValue: { providers: [{ provide: _angular_compiler.XHR, useClass: XHRImpl }] },
            multi: true
        }]);
    /**
     * @deprecated Use {@link platformWorkerAppDynamic} instead
     */
    var workerAppDynamicPlatform = platformWorkerAppDynamic;
    /**
     * @deprecated Create an {@link NgModule} that includes the {@link WorkerAppModule} and use {@link
     * bootstrapModule}
     * with the {@link workerAppDynamicPlatform}() instead.
     */
    function bootstrapWorkerApp(appComponentType, customProviders) {
        console.warn('bootstrapWorkerApp is deprecated. Create an @NgModule that includes the `WorkerAppModule` and use `bootstrapModule` with the `workerAppDynamicPlatform()` instead.');
        var deprecatedConfiguration = _angular_compiler.analyzeAppProvidersForDeprecatedConfiguration(customProviders);
        var declarations = [deprecatedConfiguration.moduleDeclarations.concat([appComponentType])];
        var DynamicModule = (function () {
            function DynamicModule() {
            }
            return DynamicModule;
        }());
        /** @nocollapse */
        DynamicModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        providers: customProviders,
                        declarations: declarations,
                        imports: [_angular_platformBrowser.WorkerAppModule],
                        bootstrap: [appComponentType]
                    },] },
        ];
        return platformWorkerAppDynamic()
            .bootstrapModule(DynamicModule, deprecatedConfiguration.compilerOptions)
            .then(function (moduleRef) {
            var console = moduleRef.injector.get(Console);
            deprecatedConfiguration.deprecationMessages.forEach(function (msg) { return console.warn(msg); });
            var appRef = moduleRef.injector.get(_angular_core.ApplicationRef);
            return appRef.components[0];
        });
    }
    exports.BROWSER_APP_COMPILER_PROVIDERS = BROWSER_APP_COMPILER_PROVIDERS;
    exports.CACHED_TEMPLATE_PROVIDER = CACHED_TEMPLATE_PROVIDER;
    exports.platformBrowserDynamic = platformBrowserDynamic;
    exports.browserDynamicPlatform = browserDynamicPlatform;
    exports.bootstrap = bootstrap;
    exports.bootstrapWorkerUi = bootstrapWorkerUi;
    exports.platformWorkerAppDynamic = platformWorkerAppDynamic;
    exports.workerAppDynamicPlatform = workerAppDynamicPlatform;
    exports.bootstrapWorkerApp = bootstrapWorkerApp;
}));
