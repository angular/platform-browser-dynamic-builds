/**
 * @license Angular v13.0.0-next.4+24.sha-d647491.with-local-changes
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/core/testing'), require('@angular/platform-browser-dynamic'), require('@angular/platform-browser/testing'), require('@angular/common'), require('@angular/compiler'), require('@angular/compiler/testing')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-browser-dynamic/testing', ['exports', '@angular/core', '@angular/core/testing', '@angular/platform-browser-dynamic', '@angular/platform-browser/testing', '@angular/common', '@angular/compiler', '@angular/compiler/testing'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}, global.ng.platformBrowserDynamic.testing = {}), global.ng.core, global.ng.core.testing, global.ng.platformBrowserDynamic, global.ng.platformBrowser.testing, global.ng.common, global.ng.compiler, global.ng.compiler.testing));
}(this, (function (exports, i0, testing, platformBrowserDynamic, testing$1, common, compiler, testing$2) { 'use strict';

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
        return to.concat(ar || Array.prototype.slice.call(from));
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
     * A DOM based implementation of the TestComponentRenderer.
     */
    var DOMTestComponentRenderer = /** @class */ (function (_super) {
        __extends(DOMTestComponentRenderer, _super);
        function DOMTestComponentRenderer(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            return _this;
        }
        DOMTestComponentRenderer.prototype.insertRootElement = function (rootElId) {
            this.removeAllRootElements();
            var rootElement = common.ɵgetDOM().getDefaultDocument().createElement('div');
            rootElement.setAttribute('id', rootElId);
            this._doc.body.appendChild(rootElement);
        };
        DOMTestComponentRenderer.prototype.removeAllRootElements = function () {
            // TODO(juliemr): can/should this be optional?
            var oldRoots = this._doc.querySelectorAll('[id^=root]');
            for (var i = 0; i < oldRoots.length; i++) {
                common.ɵgetDOM().remove(oldRoots[i]);
            }
        };
        return DOMTestComponentRenderer;
    }(testing.TestComponentRenderer));
    DOMTestComponentRenderer.ɵfac = function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(common.DOCUMENT)); };
    DOMTestComponentRenderer.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: DOMTestComponentRenderer.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }];
        }, null);
    })();

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
    var COMPILER_PROVIDERS = [
        { provide: testing$2.MockPipeResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.PipeResolver, useExisting: testing$2.MockPipeResolver },
        { provide: testing$2.MockDirectiveResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.DirectiveResolver, useExisting: testing$2.MockDirectiveResolver },
        { provide: testing$2.MockNgModuleResolver, deps: [compiler.CompileReflector] },
        { provide: compiler.NgModuleResolver, useExisting: testing$2.MockNgModuleResolver },
    ];
    var TestingCompilerFactoryImpl = /** @class */ (function () {
        function TestingCompilerFactoryImpl(_injector, _compilerFactory) {
            this._injector = _injector;
            this._compilerFactory = _compilerFactory;
        }
        TestingCompilerFactoryImpl.prototype.createTestingCompiler = function (options) {
            var compiler = this._compilerFactory.createCompiler(options);
            return new TestingCompilerImpl(compiler, compiler.injector.get(testing$2.MockDirectiveResolver), compiler.injector.get(testing$2.MockPipeResolver), compiler.injector.get(testing$2.MockNgModuleResolver));
        };
        return TestingCompilerFactoryImpl;
    }());
    var TestingCompilerImpl = /** @class */ (function () {
        function TestingCompilerImpl(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
            this._compiler = _compiler;
            this._directiveResolver = _directiveResolver;
            this._pipeResolver = _pipeResolver;
            this._moduleResolver = _moduleResolver;
            this._overrider = new testing.ɵMetadataOverrider();
        }
        Object.defineProperty(TestingCompilerImpl.prototype, "injector", {
            get: function () {
                return this._compiler.injector;
            },
            enumerable: false,
            configurable: true
        });
        TestingCompilerImpl.prototype.compileModuleSync = function (moduleType) {
            return this._compiler.compileModuleSync(moduleType);
        };
        TestingCompilerImpl.prototype.compileModuleAsync = function (moduleType) {
            return this._compiler.compileModuleAsync(moduleType);
        };
        TestingCompilerImpl.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
            return this._compiler.compileModuleAndAllComponentsSync(moduleType);
        };
        TestingCompilerImpl.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
            return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
        };
        TestingCompilerImpl.prototype.getComponentFactory = function (component) {
            return this._compiler.getComponentFactory(component);
        };
        TestingCompilerImpl.prototype.checkOverrideAllowed = function (type) {
            if (this._compiler.hasAotSummary(type)) {
                throw new Error(i0.ɵstringify(type) + " was AOT compiled, so its metadata cannot be changed.");
            }
        };
        TestingCompilerImpl.prototype.overrideModule = function (ngModule, override) {
            this.checkOverrideAllowed(ngModule);
            var oldMetadata = this._moduleResolver.resolve(ngModule, false);
            this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(i0.NgModule, oldMetadata, override));
            this.clearCacheFor(ngModule);
        };
        TestingCompilerImpl.prototype.overrideDirective = function (directive, override) {
            this.checkOverrideAllowed(directive);
            var oldMetadata = this._directiveResolver.resolve(directive, false);
            this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(i0.Directive, oldMetadata, override));
            this.clearCacheFor(directive);
        };
        TestingCompilerImpl.prototype.overrideComponent = function (component, override) {
            this.checkOverrideAllowed(component);
            var oldMetadata = this._directiveResolver.resolve(component, false);
            this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(i0.Component, oldMetadata, override));
            this.clearCacheFor(component);
        };
        TestingCompilerImpl.prototype.overridePipe = function (pipe, override) {
            this.checkOverrideAllowed(pipe);
            var oldMetadata = this._pipeResolver.resolve(pipe, false);
            this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(i0.Pipe, oldMetadata, override));
            this.clearCacheFor(pipe);
        };
        TestingCompilerImpl.prototype.loadAotSummaries = function (summaries) {
            this._compiler.loadAotSummaries(summaries);
        };
        TestingCompilerImpl.prototype.clearCache = function () {
            this._compiler.clearCache();
        };
        TestingCompilerImpl.prototype.clearCacheFor = function (type) {
            this._compiler.clearCacheFor(type);
        };
        TestingCompilerImpl.prototype.getComponentFromError = function (error) {
            return error[compiler.ERROR_COMPONENT_TYPE] || null;
        };
        TestingCompilerImpl.prototype.getModuleId = function (moduleType) {
            return this._moduleResolver.resolve(moduleType, true).id;
        };
        return TestingCompilerImpl;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Platform for dynamic tests
     *
     * @publicApi
     */
    var platformCoreDynamicTesting = i0.createPlatformFactory(platformBrowserDynamic.ɵplatformCoreDynamic, 'coreDynamicTesting', [
        { provide: i0.COMPILER_OPTIONS, useValue: { providers: COMPILER_PROVIDERS }, multi: true }, {
            provide: testing.ɵTestingCompilerFactory,
            useClass: TestingCompilerFactoryImpl,
            deps: [i0.Injector, i0.CompilerFactory]
        }
    ]);

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
    var platformBrowserDynamicTesting = i0.createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', platformBrowserDynamic.ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
    /**
     * NgModule for testing.
     *
     * @publicApi
     */
    var BrowserDynamicTestingModule = /** @class */ (function () {
        function BrowserDynamicTestingModule() {
        }
        return BrowserDynamicTestingModule;
    }());
    BrowserDynamicTestingModule.ɵfac = function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); };
    BrowserDynamicTestingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BrowserDynamicTestingModule });
    BrowserDynamicTestingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            { provide: testing.TestComponentRenderer, useClass: DOMTestComponentRenderer },
        ], imports: [testing$1.BrowserTestingModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserDynamicTestingModule, [{
                type: i0.NgModule,
                args: [{
                        exports: [testing$1.BrowserTestingModule],
                        providers: [
                            { provide: testing.TestComponentRenderer, useClass: DOMTestComponentRenderer },
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BrowserDynamicTestingModule, { exports: [testing$1.BrowserTestingModule] }); })();

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
     * Generated bundle index. Do not edit.
     */

    exports.BrowserDynamicTestingModule = BrowserDynamicTestingModule;
    exports.platformBrowserDynamicTesting = platformBrowserDynamicTesting;
    exports.ɵDOMTestComponentRenderer = DOMTestComponentRenderer;
    exports.ɵplatformCoreDynamicTesting = platformCoreDynamicTesting;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-browser-dynamic-testing.umd.js.map
