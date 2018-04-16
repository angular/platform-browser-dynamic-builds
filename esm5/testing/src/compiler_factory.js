/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';
import { Component, Directive, NgModule, Pipe, ɵstringify } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
export var /** @type {?} */ COMPILER_PROVIDERS = [
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
    /**
     * @param {?} options
     * @return {?}
     */
    TestingCompilerFactoryImpl.prototype.createTestingCompiler = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var /** @type {?} */ compiler = /** @type {?} */ (this._compilerFactory.createCompiler(options));
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    };
    return TestingCompilerFactoryImpl;
}());
export { TestingCompilerFactoryImpl };
function TestingCompilerFactoryImpl_tsickle_Closure_declarations() {
    /** @type {?} */
    TestingCompilerFactoryImpl.prototype._injector;
    /** @type {?} */
    TestingCompilerFactoryImpl.prototype._compilerFactory;
}
var TestingCompilerImpl = /** @class */ (function () {
    function TestingCompilerImpl(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new MetadataOverrider();
    }
    Object.defineProperty(TestingCompilerImpl.prototype, "injector", {
        get: /**
         * @return {?}
         */
        function () { return this._compiler.injector; },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    TestingCompilerImpl.prototype.compileModuleSync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    TestingCompilerImpl.prototype.compileModuleAsync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    TestingCompilerImpl.prototype.compileModuleAndAllComponentsSync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    TestingCompilerImpl.prototype.compileModuleAndAllComponentsAsync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    TestingCompilerImpl.prototype.getComponentFactory = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this._compiler.getComponentFactory(component);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TestingCompilerImpl.prototype.checkOverrideAllowed = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(ɵstringify(type) + " was AOT compiled, so its metadata cannot be changed.");
        }
    };
    /**
     * @param {?} ngModule
     * @param {?} override
     * @return {?}
     */
    TestingCompilerImpl.prototype.overrideModule = /**
     * @param {?} ngModule
     * @param {?} override
     * @return {?}
     */
    function (ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        var /** @type {?} */ oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    };
    /**
     * @param {?} directive
     * @param {?} override
     * @return {?}
     */
    TestingCompilerImpl.prototype.overrideDirective = /**
     * @param {?} directive
     * @param {?} override
     * @return {?}
     */
    function (directive, override) {
        this.checkOverrideAllowed(directive);
        var /** @type {?} */ oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, /** @type {?} */ ((oldMetadata)), override));
        this.clearCacheFor(directive);
    };
    /**
     * @param {?} component
     * @param {?} override
     * @return {?}
     */
    TestingCompilerImpl.prototype.overrideComponent = /**
     * @param {?} component
     * @param {?} override
     * @return {?}
     */
    function (component, override) {
        this.checkOverrideAllowed(component);
        var /** @type {?} */ oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, /** @type {?} */ ((oldMetadata)), override));
        this.clearCacheFor(component);
    };
    /**
     * @param {?} pipe
     * @param {?} override
     * @return {?}
     */
    TestingCompilerImpl.prototype.overridePipe = /**
     * @param {?} pipe
     * @param {?} override
     * @return {?}
     */
    function (pipe, override) {
        this.checkOverrideAllowed(pipe);
        var /** @type {?} */ oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    };
    /**
     * @param {?} summaries
     * @return {?}
     */
    TestingCompilerImpl.prototype.loadAotSummaries = /**
     * @param {?} summaries
     * @return {?}
     */
    function (summaries) { this._compiler.loadAotSummaries(summaries); };
    /**
     * @return {?}
     */
    TestingCompilerImpl.prototype.clearCache = /**
     * @return {?}
     */
    function () { this._compiler.clearCache(); };
    /**
     * @param {?} type
     * @return {?}
     */
    TestingCompilerImpl.prototype.clearCacheFor = /**
     * @param {?} type
     * @return {?}
     */
    function (type) { this._compiler.clearCacheFor(type); };
    /**
     * @param {?} error
     * @return {?}
     */
    TestingCompilerImpl.prototype.getComponentFromError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) { return (/** @type {?} */ (error))[ERROR_COMPONENT_TYPE] || null; };
    return TestingCompilerImpl;
}());
export { TestingCompilerImpl };
function TestingCompilerImpl_tsickle_Closure_declarations() {
    /** @type {?} */
    TestingCompilerImpl.prototype._overrider;
    /** @type {?} */
    TestingCompilerImpl.prototype._compiler;
    /** @type {?} */
    TestingCompilerImpl.prototype._directiveResolver;
    /** @type {?} */
    TestingCompilerImpl.prototype._pipeResolver;
    /** @type {?} */
    TestingCompilerImpl.prototype._moduleResolver;
}
//# sourceMappingURL=compiler_factory.js.map