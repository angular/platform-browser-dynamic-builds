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
import { Identifiers, getUrlScheme, syntaxError } from '@angular/compiler';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, LOCALE_ID, NgModuleFactory, NgModuleRef, QueryList, Renderer, SecurityContext, TRANSLATIONS_FORMAT, TemplateRef, ViewContainerRef, ViewEncapsulation, ɵCodegenComponentFactoryResolver, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵReflectionCapabilities as ReflectionCapabilities, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpad, ɵpid, ɵpod, ɵppd, ɵprd, ɵqud, ɵregisterModuleFactory, ɵstringify as stringify, ɵted, ɵunv, ɵvid } from '@angular/core';
export var /** @type {?} */ MODULE_SUFFIX = '';
var /** @type {?} */ builtinExternalReferences = createBuiltinExternalReferencesMap();
var JitReflector = /** @class */ (function () {
    function JitReflector() {
        this.builtinExternalReferences = new Map();
        this.reflectionCapabilities = new ReflectionCapabilities();
    }
    /**
     * @param {?} type
     * @param {?} cmpMetadata
     * @return {?}
     */
    JitReflector.prototype.componentModuleUrl = /**
     * @param {?} type
     * @param {?} cmpMetadata
     * @return {?}
     */
    function (type, cmpMetadata) {
        var /** @type {?} */ moduleId = cmpMetadata.moduleId;
        if (typeof moduleId === 'string') {
            var /** @type {?} */ scheme = getUrlScheme(moduleId);
            return scheme ? moduleId : "package:" + moduleId + MODULE_SUFFIX;
        }
        else if (moduleId !== null && moduleId !== void 0) {
            throw syntaxError("moduleId should be a string in \"" + stringify(type) + "\". See https://goo.gl/wIDDiL for more information.\n" +
                "If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.");
        }
        return "./" + stringify(type);
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    JitReflector.prototype.parameters = /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function (typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    JitReflector.prototype.tryAnnotations = /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function (typeOrFunc) { return this.annotations(typeOrFunc); };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    JitReflector.prototype.annotations = /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function (typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    JitReflector.prototype.shallowAnnotations = /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function (typeOrFunc) {
        throw new Error('Not supported in JIT mode');
    };
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    JitReflector.prototype.propMetadata = /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    function (typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    JitReflector.prototype.hasLifecycleHook = /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    function (type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    JitReflector.prototype.guards = /**
     * @param {?} type
     * @return {?}
     */
    function (type) { return this.reflectionCapabilities.guards(type); };
    /**
     * @param {?} ref
     * @return {?}
     */
    JitReflector.prototype.resolveExternalReference = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        return builtinExternalReferences.get(ref) || ref.runtime;
    };
    return JitReflector;
}());
export { JitReflector };
function JitReflector_tsickle_Closure_declarations() {
    /** @type {?} */
    JitReflector.prototype.reflectionCapabilities;
    /** @type {?} */
    JitReflector.prototype.builtinExternalReferences;
}
/**
 * @return {?}
 */
function createBuiltinExternalReferencesMap() {
    var /** @type {?} */ map = new Map();
    map.set(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS, ANALYZE_FOR_ENTRY_COMPONENTS);
    map.set(Identifiers.ElementRef, ElementRef);
    map.set(Identifiers.NgModuleRef, NgModuleRef);
    map.set(Identifiers.ViewContainerRef, ViewContainerRef);
    map.set(Identifiers.ChangeDetectorRef, ChangeDetectorRef);
    map.set(Identifiers.QueryList, QueryList);
    map.set(Identifiers.TemplateRef, TemplateRef);
    map.set(Identifiers.CodegenComponentFactoryResolver, ɵCodegenComponentFactoryResolver);
    map.set(Identifiers.ComponentFactoryResolver, ComponentFactoryResolver);
    map.set(Identifiers.ComponentFactory, ComponentFactory);
    map.set(Identifiers.ComponentRef, ComponentRef);
    map.set(Identifiers.NgModuleFactory, NgModuleFactory);
    map.set(Identifiers.createModuleFactory, ɵcmf);
    map.set(Identifiers.moduleDef, ɵmod);
    map.set(Identifiers.moduleProviderDef, ɵmpd);
    map.set(Identifiers.RegisterModuleFactoryFn, ɵregisterModuleFactory);
    map.set(Identifiers.Injector, Injector);
    map.set(Identifiers.ViewEncapsulation, ViewEncapsulation);
    map.set(Identifiers.ChangeDetectionStrategy, ChangeDetectionStrategy);
    map.set(Identifiers.SecurityContext, SecurityContext);
    map.set(Identifiers.LOCALE_ID, LOCALE_ID);
    map.set(Identifiers.TRANSLATIONS_FORMAT, TRANSLATIONS_FORMAT);
    map.set(Identifiers.inlineInterpolate, ɵinlineInterpolate);
    map.set(Identifiers.interpolate, ɵinterpolate);
    map.set(Identifiers.EMPTY_ARRAY, ɵEMPTY_ARRAY);
    map.set(Identifiers.EMPTY_MAP, ɵEMPTY_MAP);
    map.set(Identifiers.Renderer, Renderer);
    map.set(Identifiers.viewDef, ɵvid);
    map.set(Identifiers.elementDef, ɵeld);
    map.set(Identifiers.anchorDef, ɵand);
    map.set(Identifiers.textDef, ɵted);
    map.set(Identifiers.directiveDef, ɵdid);
    map.set(Identifiers.providerDef, ɵprd);
    map.set(Identifiers.queryDef, ɵqud);
    map.set(Identifiers.pureArrayDef, ɵpad);
    map.set(Identifiers.pureObjectDef, ɵpod);
    map.set(Identifiers.purePipeDef, ɵppd);
    map.set(Identifiers.pipeDef, ɵpid);
    map.set(Identifiers.nodeValue, ɵnov);
    map.set(Identifiers.ngContentDef, ɵncd);
    map.set(Identifiers.unwrapValue, ɵunv);
    map.set(Identifiers.createRendererType2, ɵcrt);
    map.set(Identifiers.createComponentFactory, ɵccf);
    return map;
}
//# sourceMappingURL=compiler_reflector.js.map