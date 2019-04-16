/**
 * @license Angular v8.0.0-beta.12+25.sha-86a3f90.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/core/testing'), require('@angular/platform-browser-dynamic'), require('@angular/platform-browser/testing'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/compiler'), require('@angular/compiler/testing')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-browser-dynamic/testing', ['exports', '@angular/core', '@angular/core/testing', '@angular/platform-browser-dynamic', '@angular/platform-browser/testing', '@angular/common', '@angular/platform-browser', '@angular/compiler', '@angular/compiler/testing'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformBrowserDynamic = global.ng.platformBrowserDynamic || {}, global.ng.platformBrowserDynamic.testing = {}), global.ng.core, global.ng.core.testing, global.ng.platformBrowserDynamic, global.ng.platformBrowser.testing, global.ng.common, global.ng.platformBrowser, global.ng.compiler, global.ng.compiler.testing));
}(this, function (exports, i0, testing, platformBrowserDynamic, testing$1, common, platformBrowser, compiler, testing$2) { 'use strict';

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
            var rootEl = platformBrowser.ɵgetDOM().firstChild(platformBrowser.ɵgetDOM().content(platformBrowser.ɵgetDOM().createTemplate("<div id=\"" + rootElId + "\"></div>")));
            // TODO(juliemr): can/should this be optional?
            var oldRoots = platformBrowser.ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
            for (var i = 0; i < oldRoots.length; i++) {
                platformBrowser.ɵgetDOM().remove(oldRoots[i]);
            }
            platformBrowser.ɵgetDOM().appendChild(this._doc.body, rootEl);
        };
        DOMTestComponentRenderer.ngInjectableDef = i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(common.DOCUMENT)); }, providedIn: null });
        return DOMTestComponentRenderer;
    }(testing.TestComponentRenderer));
    /*@__PURE__*/ i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
            type: i0.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, null);

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
            get: function () { return this._compiler.injector; },
            enumerable: true,
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
        TestingCompilerImpl.prototype.loadAotSummaries = function (summaries) { this._compiler.loadAotSummaries(summaries); };
        TestingCompilerImpl.prototype.clearCache = function () { this._compiler.clearCache(); };
        TestingCompilerImpl.prototype.clearCacheFor = function (type) { this._compiler.clearCacheFor(type); };
        TestingCompilerImpl.prototype.getComponentFromError = function (error) { return error[compiler.ERROR_COMPONENT_TYPE] || null; };
        TestingCompilerImpl.prototype.getModuleId = function (moduleType) {
            return this._moduleResolver.resolve(moduleType, true).id;
        };
        return TestingCompilerImpl;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
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
    var platformBrowserDynamicTesting = i0.createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', platformBrowserDynamic.ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
    /**
     * NgModule for testing.
     *
     * @publicApi
     */
    var BrowserDynamicTestingModule = /** @class */ (function () {
        function BrowserDynamicTestingModule() {
        }
        BrowserDynamicTestingModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: BrowserDynamicTestingModule });
        BrowserDynamicTestingModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); }, providers: [
                { provide: testing.TestComponentRenderer, useClass: DOMTestComponentRenderer },
            ], imports: [testing$1.BrowserTestingModule] });
        return BrowserDynamicTestingModule;
    }());
    /*@__PURE__*/ i0.ɵɵsetNgModuleScope(BrowserDynamicTestingModule, { exports: [testing$1.BrowserTestingModule] });
    /*@__PURE__*/ i0.ɵsetClassMetadata(BrowserDynamicTestingModule, [{
            type: i0.NgModule,
            args: [{
                    exports: [testing$1.BrowserTestingModule],
                    providers: [
                        { provide: testing.TestComponentRenderer, useClass: DOMTestComponentRenderer },
                    ]
                }]
        }], null, null);

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

    exports.platformBrowserDynamicTesting = platformBrowserDynamicTesting;
    exports.BrowserDynamicTestingModule = BrowserDynamicTestingModule;
    exports.ɵDOMTestComponentRenderer = DOMTestComponentRenderer;
    exports.ɵplatformCoreDynamicTesting = platformCoreDynamicTesting;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=platform-browser-dynamic-testing.umd.js.map
