/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
import { Component, Directive, NgModule, Pipe, ɵstringify as stringify } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
/** @type {?} */
export const COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
export class TestingCompilerFactoryImpl {
    /**
     * @param {?} _injector
     * @param {?} _compilerFactory
     */
    constructor(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    createTestingCompiler(options) {
        /** @type {?} */
        const compiler = /** @type {?} */ (this._compilerFactory.createCompiler(options));
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    }
}
if (false) {
    /** @type {?} */
    TestingCompilerFactoryImpl.prototype._injector;
    /** @type {?} */
    TestingCompilerFactoryImpl.prototype._compilerFactory;
}
export class TestingCompilerImpl {
    /**
     * @param {?} _compiler
     * @param {?} _directiveResolver
     * @param {?} _pipeResolver
     * @param {?} _moduleResolver
     */
    constructor(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new MetadataOverrider();
    }
    /**
     * @return {?}
     */
    get injector() { return this._compiler.injector; }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return this._compiler.getComponentFactory(component);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    checkOverrideAllowed(type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(`${stringify(type)} was AOT compiled, so its metadata cannot be changed.`);
        }
    }
    /**
     * @param {?} ngModule
     * @param {?} override
     * @return {?}
     */
    overrideModule(ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        /** @type {?} */
        const oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    }
    /**
     * @param {?} directive
     * @param {?} override
     * @return {?}
     */
    overrideDirective(directive, override) {
        this.checkOverrideAllowed(directive);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, /** @type {?} */ ((oldMetadata)), override));
        this.clearCacheFor(directive);
    }
    /**
     * @param {?} component
     * @param {?} override
     * @return {?}
     */
    overrideComponent(component, override) {
        this.checkOverrideAllowed(component);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, /** @type {?} */ ((oldMetadata)), override));
        this.clearCacheFor(component);
    }
    /**
     * @param {?} pipe
     * @param {?} override
     * @return {?}
     */
    overridePipe(pipe, override) {
        this.checkOverrideAllowed(pipe);
        /** @type {?} */
        const oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) { this._compiler.loadAotSummaries(summaries); }
    /**
     * @return {?}
     */
    clearCache() { this._compiler.clearCache(); }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) { this._compiler.clearCacheFor(type); }
    /**
     * @param {?} error
     * @return {?}
     */
    getComponentFromError(error) { return (/** @type {?} */ (error))[ERROR_COMPONENT_TYPE] || null; }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        return this._moduleResolver.resolve(moduleType, true).id;
    }
}
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy9jb21waWxlcl9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hHLE9BQU8sRUFBbUMsU0FBUyxFQUFvQixTQUFTLEVBQTBDLFFBQVEsRUFBbUIsSUFBSSxFQUF3QixVQUFVLElBQUksU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSS9OLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUV2RCxhQUFhLGtCQUFrQixHQUFxQjtJQUNsRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUM7SUFDdEQsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUMxRCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUM7SUFDaEUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN6RCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUM7Q0FDL0QsQ0FBQztBQUVGLE1BQU07Ozs7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VSxFQUFFLENBQUMsRUFBRTs7Ozs7SUFDbkQsYUFBYSxDQUFDLElBQWUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzs7OztJQUV0RSxxQkFBcUIsQ0FBQyxLQUFZLElBQUksT0FBTyxtQkFBQyxLQUFZLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzs7OztJQUU1RixXQUFXLENBQUMsVUFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQzFEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVJlZmxlY3RvciwgRGlyZWN0aXZlUmVzb2x2ZXIsIEVSUk9SX0NPTVBPTkVOVF9UWVBFLCBOZ01vZHVsZVJlc29sdmVyLCBQaXBlUmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7TW9ja0RpcmVjdGl2ZVJlc29sdmVyLCBNb2NrTmdNb2R1bGVSZXNvbHZlciwgTW9ja1BpcGVSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvdGVzdGluZyc7XG5pbXBvcnQge0NvbXBpbGVyRmFjdG9yeSwgQ29tcGlsZXJPcHRpb25zLCBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIERpcmVjdGl2ZSwgSW5qZWN0b3IsIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXMsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnksIFBpcGUsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlLCDJtXN0cmluZ2lmeSBhcyBzdHJpbmdpZnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlLCDJtVRlc3RpbmdDb21waWxlciBhcyBUZXN0aW5nQ29tcGlsZXIsIMm1VGVzdGluZ0NvbXBpbGVyRmFjdG9yeSBhcyBUZXN0aW5nQ29tcGlsZXJGYWN0b3J5fSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHvJtUNvbXBpbGVySW1wbCBhcyBDb21waWxlckltcGx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7TWV0YWRhdGFPdmVycmlkZXJ9IGZyb20gJy4vbWV0YWRhdGFfb3ZlcnJpZGVyJztcblxuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IE1vY2tQaXBlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBQaXBlUmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBNb2NrUGlwZVJlc29sdmVyfSxcbiAge3Byb3ZpZGU6IE1vY2tEaXJlY3RpdmVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IERpcmVjdGl2ZVJlc29sdmVyLCB1c2VFeGlzdGluZzogTW9ja0RpcmVjdGl2ZVJlc29sdmVyfSxcbiAge3Byb3ZpZGU6IE1vY2tOZ01vZHVsZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogTmdNb2R1bGVSZXNvbHZlciwgdXNlRXhpc3Rpbmc6IE1vY2tOZ01vZHVsZVJlc29sdmVyfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBUZXN0aW5nQ29tcGlsZXJGYWN0b3J5SW1wbCBpbXBsZW1lbnRzIFRlc3RpbmdDb21waWxlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX2NvbXBpbGVyRmFjdG9yeTogQ29tcGlsZXJGYWN0b3J5KSB7fVxuXG4gIGNyZWF0ZVRlc3RpbmdDb21waWxlcihvcHRpb25zOiBDb21waWxlck9wdGlvbnNbXSk6IFRlc3RpbmdDb21waWxlciB7XG4gICAgY29uc3QgY29tcGlsZXIgPSA8Q29tcGlsZXJJbXBsPnRoaXMuX2NvbXBpbGVyRmFjdG9yeS5jcmVhdGVDb21waWxlcihvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IFRlc3RpbmdDb21waWxlckltcGwoXG4gICAgICAgIGNvbXBpbGVyLCBjb21waWxlci5pbmplY3Rvci5nZXQoTW9ja0RpcmVjdGl2ZVJlc29sdmVyKSxcbiAgICAgICAgY29tcGlsZXIuaW5qZWN0b3IuZ2V0KE1vY2tQaXBlUmVzb2x2ZXIpLCBjb21waWxlci5pbmplY3Rvci5nZXQoTW9ja05nTW9kdWxlUmVzb2x2ZXIpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVzdGluZ0NvbXBpbGVySW1wbCBpbXBsZW1lbnRzIFRlc3RpbmdDb21waWxlciB7XG4gIHByaXZhdGUgX292ZXJyaWRlciA9IG5ldyBNZXRhZGF0YU92ZXJyaWRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NvbXBpbGVyOiBDb21waWxlckltcGwsIHByaXZhdGUgX2RpcmVjdGl2ZVJlc29sdmVyOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIF9waXBlUmVzb2x2ZXI6IE1vY2tQaXBlUmVzb2x2ZXIsIHByaXZhdGUgX21vZHVsZVJlc29sdmVyOiBNb2NrTmdNb2R1bGVSZXNvbHZlcikge31cbiAgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yIHsgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmluamVjdG9yOyB9XG5cbiAgY29tcGlsZU1vZHVsZVN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE5nTW9kdWxlRmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVTeW5jKG1vZHVsZVR5cGUpO1xuICB9XG5cbiAgY29tcGlsZU1vZHVsZUFzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVHlwZSk7XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jKG1vZHVsZVR5cGUpO1xuICB9XG5cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTpcbiAgICAgIFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jKG1vZHVsZVR5cGUpO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IFR5cGU8VD4pOiBDb21wb25lbnRGYWN0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuZ2V0Q29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICB9XG5cbiAgY2hlY2tPdmVycmlkZUFsbG93ZWQodHlwZTogVHlwZTxhbnk+KSB7XG4gICAgaWYgKHRoaXMuX2NvbXBpbGVyLmhhc0FvdFN1bW1hcnkodHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzdHJpbmdpZnkodHlwZSl9IHdhcyBBT1QgY29tcGlsZWQsIHNvIGl0cyBtZXRhZGF0YSBjYW5ub3QgYmUgY2hhbmdlZC5gKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZU1vZHVsZShuZ01vZHVsZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxOZ01vZHVsZT4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrT3ZlcnJpZGVBbGxvd2VkKG5nTW9kdWxlKTtcbiAgICBjb25zdCBvbGRNZXRhZGF0YSA9IHRoaXMuX21vZHVsZVJlc29sdmVyLnJlc29sdmUobmdNb2R1bGUsIGZhbHNlKTtcbiAgICB0aGlzLl9tb2R1bGVSZXNvbHZlci5zZXROZ01vZHVsZShcbiAgICAgICAgbmdNb2R1bGUsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKE5nTW9kdWxlLCBvbGRNZXRhZGF0YSwgb3ZlcnJpZGUpKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGVGb3IobmdNb2R1bGUpO1xuICB9XG4gIG92ZXJyaWRlRGlyZWN0aXZlKGRpcmVjdGl2ZTogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxEaXJlY3RpdmU+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChkaXJlY3RpdmUpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZShkaXJlY3RpdmUsIGZhbHNlKTtcbiAgICB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5zZXREaXJlY3RpdmUoXG4gICAgICAgIGRpcmVjdGl2ZSwgdGhpcy5fb3ZlcnJpZGVyLm92ZXJyaWRlTWV0YWRhdGEoRGlyZWN0aXZlLCBvbGRNZXRhZGF0YSAhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihkaXJlY3RpdmUpO1xuICB9XG4gIG92ZXJyaWRlQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+LCBvdmVycmlkZTogTWV0YWRhdGFPdmVycmlkZTxDb21wb25lbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChjb21wb25lbnQpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZShjb21wb25lbnQsIGZhbHNlKTtcbiAgICB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5zZXREaXJlY3RpdmUoXG4gICAgICAgIGNvbXBvbmVudCwgdGhpcy5fb3ZlcnJpZGVyLm92ZXJyaWRlTWV0YWRhdGEoQ29tcG9uZW50LCBvbGRNZXRhZGF0YSAhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihjb21wb25lbnQpO1xuICB9XG4gIG92ZXJyaWRlUGlwZShwaXBlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPFBpcGU+KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja092ZXJyaWRlQWxsb3dlZChwaXBlKTtcbiAgICBjb25zdCBvbGRNZXRhZGF0YSA9IHRoaXMuX3BpcGVSZXNvbHZlci5yZXNvbHZlKHBpcGUsIGZhbHNlKTtcbiAgICB0aGlzLl9waXBlUmVzb2x2ZXIuc2V0UGlwZShwaXBlLCB0aGlzLl9vdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YShQaXBlLCBvbGRNZXRhZGF0YSwgb3ZlcnJpZGUpKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGVGb3IocGlwZSk7XG4gIH1cbiAgbG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXM6ICgpID0+IGFueVtdKSB7IHRoaXMuX2NvbXBpbGVyLmxvYWRBb3RTdW1tYXJpZXMoc3VtbWFyaWVzKTsgfVxuICBjbGVhckNhY2hlKCk6IHZvaWQgeyB0aGlzLl9jb21waWxlci5jbGVhckNhY2hlKCk7IH1cbiAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pIHsgdGhpcy5fY29tcGlsZXIuY2xlYXJDYWNoZUZvcih0eXBlKTsgfVxuXG4gIGdldENvbXBvbmVudEZyb21FcnJvcihlcnJvcjogRXJyb3IpIHsgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX0NPTVBPTkVOVF9UWVBFXSB8fCBudWxsOyB9XG5cbiAgZ2V0TW9kdWxlSWQobW9kdWxlVHlwZTogVHlwZTxhbnk+KTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21vZHVsZVJlc29sdmVyLnJlc29sdmUobW9kdWxlVHlwZSwgdHJ1ZSkuaWQ7XG4gIH1cbn1cbiJdfQ==