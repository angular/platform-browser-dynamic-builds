/**
 * @license Angular v13.0.0-next.0+9.sha-04879a1.with-local-changes
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/compiler'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-browser-dynamic', ['exports', '@angular/compiler', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = {}), global.ng.compiler, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, compiler, i0, common, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
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
        JitReflector.prototype.tryAnnotations = function (typeOrFunc) {
            return this.annotations(typeOrFunc);
        };
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
        JitReflector.prototype.guards = function (type) {
            return this.reflectionCapabilities.guards(type);
        };
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
        CompilerImpl.prototype.loadAotSummaries = function (summaries) {
            this._delegate.loadAotSummaries(summaries);
        };
        CompilerImpl.prototype.hasAotSummary = function (ref) {
            return this._delegate.hasAotSummary(ref);
        };
        CompilerImpl.prototype.getComponentFactory = function (component) {
            return this._delegate.getComponentFactory(component);
        };
        CompilerImpl.prototype.clearCache = function () {
            this._delegate.clearCache();
        };
        CompilerImpl.prototype.clearCacheFor = function (type) {
            this._delegate.clearCacheFor(type);
        };
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
    var COMPILER_PROVIDERS__PRE_R3__ = [
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
            provide: compiler.TemplateParser,
            deps: [compiler.CompilerConfig, compiler.CompileReflector, compiler.Parser, compiler.ElementSchemaRegistry, compiler.I18NHtmlParser, i0.ɵConsole]
        },
        { provide: compiler.JitEvaluator, useClass: compiler.JitEvaluator, deps: [] },
        { provide: compiler.DirectiveNormalizer, deps: [compiler.ResourceLoader, compiler.UrlResolver, compiler.HtmlParser, compiler.CompilerConfig] },
        {
            provide: compiler.CompileMetadataResolver,
            deps: [
                compiler.CompilerConfig, compiler.HtmlParser, compiler.NgModuleResolver, compiler.DirectiveResolver, compiler.PipeResolver,
                compiler.SummaryResolver, compiler.ElementSchemaRegistry, compiler.DirectiveNormalizer, i0.ɵConsole,
                [i0.Optional, compiler.StaticSymbolCache], compiler.CompileReflector, [i0.Optional, ERROR_COLLECTOR_TOKEN]
            ]
        },
        DEFAULT_PACKAGE_URL_PROVIDER,
        { provide: compiler.StyleCompiler, deps: [compiler.UrlResolver] },
        { provide: compiler.ViewCompiler, deps: [compiler.CompileReflector] },
        { provide: compiler.NgModuleCompiler, deps: [compiler.CompileReflector] },
        { provide: compiler.CompilerConfig, useValue: new compiler.CompilerConfig() },
        {
            provide: i0.Compiler,
            useClass: CompilerImpl,
            deps: [
                i0.Injector, compiler.CompileMetadataResolver, compiler.TemplateParser, compiler.StyleCompiler, compiler.ViewCompiler,
                compiler.NgModuleCompiler, compiler.SummaryResolver, compiler.CompileReflector, compiler.JitEvaluator, compiler.CompilerConfig, i0.ɵConsole
            ]
        },
        { provide: compiler.DomElementSchemaRegistry, deps: [] },
        { provide: compiler.ElementSchemaRegistry, useExisting: compiler.DomElementSchemaRegistry },
        { provide: compiler.UrlResolver, deps: [i0.PACKAGE_ROOT_URL] },
        { provide: compiler.DirectiveResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.PipeResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.NgModuleResolver, deps: [compiler.CompileReflector] },
    ];
    var COMPILER_PROVIDERS__POST_R3__ = [{ provide: i0.Compiler, useFactory: function () { return new i0.Compiler(); } }];
    var COMPILER_PROVIDERS = COMPILER_PROVIDERS__POST_R3__;
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
            this._defaultOptions = __spreadArray([compilerOptions], __read(defaultOptions));
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
        parts.forEach(function (part) { return part && result.push.apply(result, __spreadArray([], __read(part))); });
        return result;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
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
                // normalize IE9 bug (https://bugs.jquery.com/ticket/1450)
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
            xhr.onerror = function () {
                reject("Failed to load " + url);
            };
            xhr.send();
            return promise;
        };
        return ResourceLoaderImpl;
    }(compiler.ResourceLoader));
    ResourceLoaderImpl.ɵfac = /*@__PURE__*/ function () { var ɵResourceLoaderImpl_BaseFactory; return function ResourceLoaderImpl_Factory(t) { return (ɵResourceLoaderImpl_BaseFactory || (ɵResourceLoaderImpl_BaseFactory = i0.ɵɵgetInheritedFactory(ResourceLoaderImpl)))(t || ResourceLoaderImpl); }; }();
    ResourceLoaderImpl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ResourceLoaderImpl, factory: ResourceLoaderImpl.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceLoaderImpl, [{
                type: i0.Injectable
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
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
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new i0.Version('13.0.0-next.0+9.sha-04879a1.with-local-changes');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
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
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.JitCompilerFactory = JitCompilerFactory;
    exports.RESOURCE_CACHE_PROVIDER = RESOURCE_CACHE_PROVIDER;
    exports.VERSION = VERSION;
    exports.platformBrowserDynamic = platformBrowserDynamic;
    exports.ɵCOMPILER_PROVIDERS__POST_R3__ = COMPILER_PROVIDERS__POST_R3__;
    exports.ɵCompilerImpl = CompilerImpl;
    exports.ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS;
    exports.ɵResourceLoaderImpl = ResourceLoaderImpl;
    exports.ɵplatformCoreDynamic = platformCoreDynamic;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-browser-dynamic.umd.js.map
