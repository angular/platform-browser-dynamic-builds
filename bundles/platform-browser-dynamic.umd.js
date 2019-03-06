/**
 * @license Angular v8.0.0-beta.7+5.sha-dc6192c.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/compiler'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-browser-dynamic', ['exports', '@angular/compiler', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = {}), global.ng.compiler, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, function (exports, compiler, i0, common, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MODULE_SUFFIX = '';
    var builtinExternalReferences = createBuiltinExternalReferencesMap();
    var JitReflector = /** @class */ (function () {
        function JitReflector() {
            this.reflectionCapabilities = new i0.ɵReflectionCapabilities();
        }
        JitReflector.prototype.componentModuleUrl = function (type, cmpMetadata) {
            var moduleId = cmpMetadata.moduleId;
            if (typeof moduleId === 'string') {
                var scheme = compiler.getUrlScheme(moduleId);
                return scheme ? moduleId : "package:" + moduleId + MODULE_SUFFIX;
            }
            else if (moduleId !== null && moduleId !== void 0) {
                throw compiler.syntaxError("moduleId should be a string in \"" + i0.ɵstringify(type) + "\". See https://goo.gl/wIDDiL for more information.\n" +
                    "If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.");
            }
            return "./" + i0.ɵstringify(type);
        };
        JitReflector.prototype.parameters = function (typeOrFunc) {
            return this.reflectionCapabilities.parameters(typeOrFunc);
        };
        JitReflector.prototype.tryAnnotations = function (typeOrFunc) { return this.annotations(typeOrFunc); };
        JitReflector.prototype.annotations = function (typeOrFunc) {
            return this.reflectionCapabilities.annotations(typeOrFunc);
        };
        JitReflector.prototype.shallowAnnotations = function (typeOrFunc) {
            throw new Error('Not supported in JIT mode');
        };
        JitReflector.prototype.propMetadata = function (typeOrFunc) {
            return this.reflectionCapabilities.propMetadata(typeOrFunc);
        };
        JitReflector.prototype.hasLifecycleHook = function (type, lcProperty) {
            return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
        };
        JitReflector.prototype.guards = function (type) { return this.reflectionCapabilities.guards(type); };
        JitReflector.prototype.resolveExternalReference = function (ref) {
            return builtinExternalReferences.get(ref) || ref.runtime;
        };
        return JitReflector;
    }());
    function createBuiltinExternalReferencesMap() {
        var map = new Map();
        map.set(compiler.Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS, i0.ANALYZE_FOR_ENTRY_COMPONENTS);
        map.set(compiler.Identifiers.ElementRef, i0.ElementRef);
        map.set(compiler.Identifiers.NgModuleRef, i0.NgModuleRef);
        map.set(compiler.Identifiers.ViewContainerRef, i0.ViewContainerRef);
        map.set(compiler.Identifiers.ChangeDetectorRef, i0.ChangeDetectorRef);
        map.set(compiler.Identifiers.Renderer2, i0.Renderer2);
        map.set(compiler.Identifiers.QueryList, i0.QueryList);
        map.set(compiler.Identifiers.TemplateRef, i0.TemplateRef);
        map.set(compiler.Identifiers.CodegenComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver);
        map.set(compiler.Identifiers.ComponentFactoryResolver, i0.ComponentFactoryResolver);
        map.set(compiler.Identifiers.ComponentFactory, i0.ComponentFactory);
        map.set(compiler.Identifiers.ComponentRef, i0.ComponentRef);
        map.set(compiler.Identifiers.NgModuleFactory, i0.NgModuleFactory);
        map.set(compiler.Identifiers.createModuleFactory, i0.ɵcmf);
        map.set(compiler.Identifiers.moduleDef, i0.ɵmod);
        map.set(compiler.Identifiers.moduleProviderDef, i0.ɵmpd);
        map.set(compiler.Identifiers.RegisterModuleFactoryFn, i0.ɵregisterModuleFactory);
        map.set(compiler.Identifiers.Injector, i0.Injector);
        map.set(compiler.Identifiers.ViewEncapsulation, i0.ViewEncapsulation);
        map.set(compiler.Identifiers.ChangeDetectionStrategy, i0.ChangeDetectionStrategy);
        map.set(compiler.Identifiers.SecurityContext, i0.SecurityContext);
        map.set(compiler.Identifiers.LOCALE_ID, i0.LOCALE_ID);
        map.set(compiler.Identifiers.TRANSLATIONS_FORMAT, i0.TRANSLATIONS_FORMAT);
        map.set(compiler.Identifiers.inlineInterpolate, i0.ɵinlineInterpolate);
        map.set(compiler.Identifiers.interpolate, i0.ɵinterpolate);
        map.set(compiler.Identifiers.EMPTY_ARRAY, i0.ɵEMPTY_ARRAY);
        map.set(compiler.Identifiers.EMPTY_MAP, i0.ɵEMPTY_MAP);
        map.set(compiler.Identifiers.Renderer, i0.Renderer);
        map.set(compiler.Identifiers.viewDef, i0.ɵvid);
        map.set(compiler.Identifiers.elementDef, i0.ɵeld);
        map.set(compiler.Identifiers.anchorDef, i0.ɵand);
        map.set(compiler.Identifiers.textDef, i0.ɵted);
        map.set(compiler.Identifiers.directiveDef, i0.ɵdid);
        map.set(compiler.Identifiers.providerDef, i0.ɵprd);
        map.set(compiler.Identifiers.queryDef, i0.ɵqud);
        map.set(compiler.Identifiers.pureArrayDef, i0.ɵpad);
        map.set(compiler.Identifiers.pureObjectDef, i0.ɵpod);
        map.set(compiler.Identifiers.purePipeDef, i0.ɵppd);
        map.set(compiler.Identifiers.pipeDef, i0.ɵpid);
        map.set(compiler.Identifiers.nodeValue, i0.ɵnov);
        map.set(compiler.Identifiers.ngContentDef, i0.ɵncd);
        map.set(compiler.Identifiers.unwrapValue, i0.ɵunv);
        map.set(compiler.Identifiers.createRendererType2, i0.ɵcrt);
        map.set(compiler.Identifiers.createComponentFactory, i0.ɵccf);
        return map;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ERROR_COLLECTOR_TOKEN = new i0.InjectionToken('ErrorCollector');
    /**
     * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
     */
    var DEFAULT_PACKAGE_URL_PROVIDER = {
        provide: i0.PACKAGE_ROOT_URL,
        useValue: '/'
    };
    var _NO_RESOURCE_LOADER = {
        get: function (url) {
            throw new Error("No ResourceLoader implementation has been provided. Can't read the url \"" + url + "\"");
        }
    };
    var baseHtmlParser = new i0.InjectionToken('HtmlParser');
    var CompilerImpl = /** @class */ (function () {
        function CompilerImpl(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console) {
            this._metadataResolver = _metadataResolver;
            this._delegate = new compiler.JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
            this.injector = injector;
        }
        CompilerImpl.prototype.getExtraNgModuleProviders = function () {
            return [this._metadataResolver.getProviderMetadata(new compiler.ProviderMeta(i0.Compiler, { useValue: this }))];
        };
        CompilerImpl.prototype.compileModuleSync = function (moduleType) {
            return this._delegate.compileModuleSync(moduleType);
        };
        CompilerImpl.prototype.compileModuleAsync = function (moduleType) {
            return this._delegate.compileModuleAsync(moduleType);
        };
        CompilerImpl.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
            var result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
            return {
                ngModuleFactory: result.ngModuleFactory,
                componentFactories: result.componentFactories,
            };
        };
        CompilerImpl.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
            return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
                .then(function (result) { return ({
                ngModuleFactory: result.ngModuleFactory,
                componentFactories: result.componentFactories,
            }); });
        };
        CompilerImpl.prototype.loadAotSummaries = function (summaries) { this._delegate.loadAotSummaries(summaries); };
        CompilerImpl.prototype.hasAotSummary = function (ref) { return this._delegate.hasAotSummary(ref); };
        CompilerImpl.prototype.getComponentFactory = function (component) {
            return this._delegate.getComponentFactory(component);
        };
        CompilerImpl.prototype.clearCache = function () { this._delegate.clearCache(); };
        CompilerImpl.prototype.clearCacheFor = function (type) { this._delegate.clearCacheFor(type); };
        CompilerImpl.prototype.getModuleId = function (moduleType) {
            var meta = this._metadataResolver.getNgModuleMetadata(moduleType);
            return meta && meta.id || undefined;
        };
        return CompilerImpl;
    }());
    /**
     * A set of providers that provide `JitCompiler` and its dependencies to use for
     * template compilation.
     */
    var COMPILER_PROVIDERS = [
        { provide: compiler.CompileReflector, useValue: new JitReflector() },
        { provide: compiler.ResourceLoader, useValue: _NO_RESOURCE_LOADER },
        { provide: compiler.JitSummaryResolver, deps: [] },
        { provide: compiler.SummaryResolver, useExisting: compiler.JitSummaryResolver },
        { provide: i0.ɵConsole, deps: [] },
        { provide: compiler.Lexer, deps: [] },
        { provide: compiler.Parser, deps: [compiler.Lexer] },
        {
            provide: baseHtmlParser,
            useClass: compiler.HtmlParser,
            deps: [],
        },
        {
            provide: compiler.I18NHtmlParser,
            useFactory: function (parser, translations, format, config, console) {
                translations = translations || '';
                var missingTranslation = translations ? config.missingTranslation : i0.MissingTranslationStrategy.Ignore;
                return new compiler.I18NHtmlParser(parser, translations, format, missingTranslation, console);
            },
            deps: [
                baseHtmlParser,
                [new i0.Optional(), new i0.Inject(i0.TRANSLATIONS)],
                [new i0.Optional(), new i0.Inject(i0.TRANSLATIONS_FORMAT)],
                [compiler.CompilerConfig],
                [i0.ɵConsole],
            ]
        },
        {
            provide: compiler.HtmlParser,
            useExisting: compiler.I18NHtmlParser,
        },
        {
            provide: compiler.TemplateParser, deps: [compiler.CompilerConfig, compiler.CompileReflector,
                compiler.Parser, compiler.ElementSchemaRegistry,
                compiler.I18NHtmlParser, i0.ɵConsole]
        },
        { provide: compiler.JitEvaluator, useClass: compiler.JitEvaluator, deps: [] },
        { provide: compiler.DirectiveNormalizer, deps: [compiler.ResourceLoader, compiler.UrlResolver, compiler.HtmlParser, compiler.CompilerConfig] },
        { provide: compiler.CompileMetadataResolver, deps: [compiler.CompilerConfig, compiler.HtmlParser, compiler.NgModuleResolver,
                compiler.DirectiveResolver, compiler.PipeResolver,
                compiler.SummaryResolver,
                compiler.ElementSchemaRegistry,
                compiler.DirectiveNormalizer, i0.ɵConsole,
                [i0.Optional, compiler.StaticSymbolCache],
                compiler.CompileReflector,
                [i0.Optional, ERROR_COLLECTOR_TOKEN]] },
        DEFAULT_PACKAGE_URL_PROVIDER,
        { provide: compiler.StyleCompiler, deps: [compiler.UrlResolver] },
        { provide: compiler.ViewCompiler, deps: [compiler.CompileReflector] },
        { provide: compiler.NgModuleCompiler, deps: [compiler.CompileReflector] },
        { provide: compiler.CompilerConfig, useValue: new compiler.CompilerConfig() },
        { provide: i0.Compiler, useClass: CompilerImpl, deps: [i0.Injector, compiler.CompileMetadataResolver,
                compiler.TemplateParser, compiler.StyleCompiler,
                compiler.ViewCompiler, compiler.NgModuleCompiler,
                compiler.SummaryResolver, compiler.CompileReflector, compiler.JitEvaluator, compiler.CompilerConfig,
                i0.ɵConsole] },
        { provide: compiler.DomElementSchemaRegistry, deps: [] },
        { provide: compiler.ElementSchemaRegistry, useExisting: compiler.DomElementSchemaRegistry },
        { provide: compiler.UrlResolver, deps: [i0.PACKAGE_ROOT_URL] },
        { provide: compiler.DirectiveResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.PipeResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.NgModuleResolver, deps: [compiler.CompileReflector] },
    ];
    /**
     * @publicApi
     */
    var JitCompilerFactory = /** @class */ (function () {
        /* @internal */
        function JitCompilerFactory(defaultOptions) {
            var compilerOptions = {
                useJit: true,
                defaultEncapsulation: i0.ViewEncapsulation.Emulated,
                missingTranslation: i0.MissingTranslationStrategy.Warning,
            };
            this._defaultOptions = __spread([compilerOptions], defaultOptions);
        }
        JitCompilerFactory.prototype.createCompiler = function (options) {
            if (options === void 0) { options = []; }
            var opts = _mergeOptions(this._defaultOptions.concat(options));
            var injector = i0.Injector.create([
                COMPILER_PROVIDERS, {
                    provide: compiler.CompilerConfig,
                    useFactory: function () {
                        return new compiler.CompilerConfig({
                            // let explicit values from the compiler options overwrite options
                            // from the app providers
                            useJit: opts.useJit,
                            jitDevMode: i0.isDevMode(),
                            // let explicit values from the compiler options overwrite options
                            // from the app providers
                            defaultEncapsulation: opts.defaultEncapsulation,
                            missingTranslation: opts.missingTranslation,
                            preserveWhitespaces: opts.preserveWhitespaces,
                        });
                    },
                    deps: []
                },
                opts.providers
            ]);
            return injector.get(i0.Compiler);
        };
        return JitCompilerFactory;
    }());
    function _mergeOptions(optionsArr) {
        return {
            useJit: _lastDefined(optionsArr.map(function (options) { return options.useJit; })),
            defaultEncapsulation: _lastDefined(optionsArr.map(function (options) { return options.defaultEncapsulation; })),
            providers: _mergeArrays(optionsArr.map(function (options) { return options.providers; })),
            missingTranslation: _lastDefined(optionsArr.map(function (options) { return options.missingTranslation; })),
            preserveWhitespaces: _lastDefined(optionsArr.map(function (options) { return options.preserveWhitespaces; })),
        };
    }
    function _lastDefined(args) {
        for (var i = args.length - 1; i >= 0; i--) {
            if (args[i] !== undefined) {
                return args[i];
            }
        }
        return undefined;
    }
    function _mergeArrays(parts) {
        var result = [];
        parts.forEach(function (part) { return part && result.push.apply(result, __spread(part)); });
        return result;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A platform that included corePlatform and the compiler.
     *
     * @publicApi
     */
    var platformCoreDynamic = i0.createPlatformFactory(i0.platformCore, 'coreDynamic', [
        { provide: i0.COMPILER_OPTIONS, useValue: {}, multi: true },
        { provide: i0.CompilerFactory, useClass: JitCompilerFactory, deps: [i0.COMPILER_OPTIONS] },
    ]);

    var ResourceLoaderImpl = /** @class */ (function (_super) {
        __extends(ResourceLoaderImpl, _super);
        function ResourceLoaderImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResourceLoaderImpl.prototype.get = function (url) {
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
                // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
                // by IE10)
                var response = xhr.response || xhr.responseText;
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
        ResourceLoaderImpl.ngInjectableDef = i0.defineInjectable({ token: ResourceLoaderImpl, factory: function ResourceLoaderImpl_Factory(t) { return ɵResourceLoaderImpl_BaseFactory((t || ResourceLoaderImpl)); }, providedIn: null });
        return ResourceLoaderImpl;
    }(compiler.ResourceLoader));
    var ɵResourceLoaderImpl_BaseFactory = i0.ɵgetInheritedFactory(ResourceLoaderImpl);
    /*@__PURE__*/ i0.ɵsetClassMetadata(ResourceLoaderImpl, [{
            type: i0.Injectable
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
        platformBrowser.ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,
        {
            provide: i0.COMPILER_OPTIONS,
            useValue: { providers: [{ provide: compiler.ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
            multi: true
        },
        { provide: i0.PLATFORM_ID, useValue: common.ɵPLATFORM_BROWSER_ID },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
     * ResourceLoader.
     *
     * The template cache needs to be built and loaded into window.$templateCache
     * via a separate mechanism.
     *
     * @publicApi
     */
    var CachedResourceLoader = /** @class */ (function (_super) {
        __extends(CachedResourceLoader, _super);
        function CachedResourceLoader() {
            var _this = _super.call(this) || this;
            _this._cache = i0.ɵglobal.$templateCache;
            if (_this._cache == null) {
                throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
            }
            return _this;
        }
        CachedResourceLoader.prototype.get = function (url) {
            if (this._cache.hasOwnProperty(url)) {
                return Promise.resolve(this._cache[url]);
            }
            else {
                return Promise.reject('CachedResourceLoader: Did not find cached template for ' + url);
            }
        };
        return CachedResourceLoader;
    }(compiler.ResourceLoader));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new i0.Version('8.0.0-beta.7+5.sha-dc6192c.with-local-changes');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var RESOURCE_CACHE_PROVIDER = [{ provide: compiler.ResourceLoader, useClass: CachedResourceLoader, deps: [] }];
    /**
     * @publicApi
     */
    var platformBrowserDynamic = i0.createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.RESOURCE_CACHE_PROVIDER = RESOURCE_CACHE_PROVIDER;
    exports.platformBrowserDynamic = platformBrowserDynamic;
    exports.VERSION = VERSION;
    exports.JitCompilerFactory = JitCompilerFactory;
    exports.ɵCompilerImpl = CompilerImpl;
    exports.ɵplatformCoreDynamic = platformCoreDynamic;
    exports.ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS;
    exports.ɵResourceLoaderImpl = ResourceLoaderImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=platform-browser-dynamic.umd.js.map
