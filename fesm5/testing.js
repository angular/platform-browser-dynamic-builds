/**
 * @license Angular v7.2.0+56.sha-c3aa24c
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

import { __extends } from 'tslib';
import { Inject, Injectable, NgModule, createPlatformFactory, COMPILER_OPTIONS, CompilerFactory, Injector, ɵdefineNgModule, defineInjector, ɵsetClassMetadata, defineInjectable, inject, ɵstringify, Directive, Component, Pipe } from '@angular/core';
import { TestComponentRenderer, ɵMetadataOverrider, ɵTestingCompilerFactory } from '@angular/core/testing';
import { DOCUMENT, ɵgetDOM } from '@angular/platform-browser';
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';
import { ɵplatformCoreDynamic, ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

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
        var rootEl = ɵgetDOM().firstChild(ɵgetDOM().content(ɵgetDOM().createTemplate("<div id=\"" + rootElId + "\"></div>")));
        // TODO(juliemr): can/should this be optional?
        var oldRoots = ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
        for (var i = 0; i < oldRoots.length; i++) {
            ɵgetDOM().remove(oldRoots[i]);
        }
        ɵgetDOM().appendChild(this._doc.body, rootEl);
    };
    DOMTestComponentRenderer.ngInjectableDef = defineInjectable({ token: DOMTestComponentRenderer, factory: function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(inject(DOCUMENT)); }, providedIn: null });
    return DOMTestComponentRenderer;
}(TestComponentRenderer));
/*@__PURE__*/ ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }]; }, null);

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
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
var TestingCompilerFactoryImpl = /** @class */ (function () {
    function TestingCompilerFactoryImpl(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    TestingCompilerFactoryImpl.prototype.createTestingCompiler = function (options) {
        var compiler = this._compilerFactory.createCompiler(options);
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    };
    return TestingCompilerFactoryImpl;
}());
var TestingCompilerImpl = /** @class */ (function () {
    function TestingCompilerImpl(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new ɵMetadataOverrider();
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
            throw new Error(ɵstringify(type) + " was AOT compiled, so its metadata cannot be changed.");
        }
    };
    TestingCompilerImpl.prototype.overrideModule = function (ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        var oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    };
    TestingCompilerImpl.prototype.overrideDirective = function (directive, override) {
        this.checkOverrideAllowed(directive);
        var oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, oldMetadata, override));
        this.clearCacheFor(directive);
    };
    TestingCompilerImpl.prototype.overrideComponent = function (component, override) {
        this.checkOverrideAllowed(component);
        var oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, oldMetadata, override));
        this.clearCacheFor(component);
    };
    TestingCompilerImpl.prototype.overridePipe = function (pipe, override) {
        this.checkOverrideAllowed(pipe);
        var oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    };
    TestingCompilerImpl.prototype.loadAotSummaries = function (summaries) { this._compiler.loadAotSummaries(summaries); };
    TestingCompilerImpl.prototype.clearCache = function () { this._compiler.clearCache(); };
    TestingCompilerImpl.prototype.clearCacheFor = function (type) { this._compiler.clearCacheFor(type); };
    TestingCompilerImpl.prototype.getComponentFromError = function (error) { return error[ERROR_COMPONENT_TYPE] || null; };
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
var platformCoreDynamicTesting = createPlatformFactory(ɵplatformCoreDynamic, 'coreDynamicTesting', [
    { provide: COMPILER_OPTIONS, useValue: { providers: COMPILER_PROVIDERS }, multi: true }, {
        provide: ɵTestingCompilerFactory,
        useClass: TestingCompilerFactoryImpl,
        deps: [Injector, CompilerFactory]
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
var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @publicApi
 */
var BrowserDynamicTestingModule = /** @class */ (function () {
    function BrowserDynamicTestingModule() {
    }
    BrowserDynamicTestingModule.ngModuleDef = ɵdefineNgModule({ type: BrowserDynamicTestingModule, bootstrap: [], declarations: [], imports: [], exports: [BrowserTestingModule] });
    BrowserDynamicTestingModule.ngInjectorDef = defineInjector({ factory: function BrowserDynamicTestingModule_Factory(t) { return new (t || BrowserDynamicTestingModule)(); }, providers: [
            { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
        ], imports: [[BrowserTestingModule]] });
    return BrowserDynamicTestingModule;
}());
/*@__PURE__*/ ɵsetClassMetadata(BrowserDynamicTestingModule, [{
        type: NgModule,
        args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
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

export { platformBrowserDynamicTesting, BrowserDynamicTestingModule, DOMTestComponentRenderer as ɵDOMTestComponentRenderer, platformCoreDynamicTesting as ɵplatformCoreDynamicTesting };
//# sourceMappingURL=testing.js.map
