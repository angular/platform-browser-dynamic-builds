/**
 * @license Angular v6.1.0-beta.1+41.sha-5b76f04
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

import { __decorate, __metadata, __param } from 'tslib';
import { COMPILER_OPTIONS, CompilerFactory, Component, Directive, Inject, Injectable, Injector, NgModule, Pipe, createPlatformFactory, ɵstringify } from '@angular/core';
import { TestComponentRenderer, ɵTestingCompilerFactory } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ɵplatformCoreDynamic } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { DOCUMENT, ɵgetDOM } from '@angular/platform-browser';
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
let DOMTestComponentRenderer = class DOMTestComponentRenderer extends TestComponentRenderer {
    constructor(_doc /** TODO #9100 */) {
        super();
        this._doc = _doc;
    }
    insertRootElement(rootElId) {
        const rootEl = ɵgetDOM().firstChild(ɵgetDOM().content(ɵgetDOM().createTemplate(`<div id="${rootElId}"></div>`)));
        // TODO(juliemr): can/should this be optional?
        const oldRoots = ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            ɵgetDOM().remove(oldRoots[i]);
        }
        ɵgetDOM().appendChild(this._doc.body, rootEl);
    }
};
DOMTestComponentRenderer = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], DOMTestComponentRenderer);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let _nextReferenceId = 0;
class MetadataOverrider {
    constructor() {
        this._references = new Map();
    }
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     */
    overrideMetadata(metadataClass, oldMetadata, override) {
        const props = {};
        if (oldMetadata) {
            _valueProps(oldMetadata).forEach((prop) => props[prop] = oldMetadata[prop]);
        }
        if (override.set) {
            if (override.remove || override.add) {
                throw new Error(`Cannot set and add/remove ${ɵstringify(metadataClass)} at the same time!`);
            }
            setMetadata(props, override.set);
        }
        if (override.remove) {
            removeMetadata(props, override.remove, this._references);
        }
        if (override.add) {
            addMetadata(props, override.add);
        }
        return new metadataClass(props);
    }
}
function removeMetadata(metadata, remove, references) {
    const removeObjects = new Set();
    for (const prop in remove) {
        const removeValue = remove[prop];
        if (removeValue instanceof Array) {
            removeValue.forEach((value) => { removeObjects.add(_propHashKey(prop, value, references)); });
        }
        else {
            removeObjects.add(_propHashKey(prop, removeValue, references));
        }
    }
    for (const prop in metadata) {
        const propValue = metadata[prop];
        if (propValue instanceof Array) {
            metadata[prop] = propValue.filter((value) => !removeObjects.has(_propHashKey(prop, value, references)));
        }
        else {
            if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                metadata[prop] = undefined;
            }
        }
    }
}
function addMetadata(metadata, add) {
    for (const prop in add) {
        const addValue = add[prop];
        const propValue = metadata[prop];
        if (propValue != null && propValue instanceof Array) {
            metadata[prop] = propValue.concat(addValue);
        }
        else {
            metadata[prop] = addValue;
        }
    }
}
function setMetadata(metadata, set) {
    for (const prop in set) {
        metadata[prop] = set[prop];
    }
}
function _propHashKey(propName, propValue, references) {
    const replacer = (key, value) => {
        if (typeof value === 'function') {
            value = _serializeReference(value, references);
        }
        return value;
    };
    return `${propName}:${JSON.stringify(propValue, replacer)}`;
}
function _serializeReference(ref, references) {
    let id = references.get(ref);
    if (!id) {
        id = `${ɵstringify(ref)}${_nextReferenceId++}`;
        references.set(ref, id);
    }
    return id;
}
function _valueProps(obj) {
    const props = [];
    // regular public props
    Object.keys(obj).forEach((prop) => {
        if (!prop.startsWith('_')) {
            props.push(prop);
        }
    });
    // getters
    let proto = obj;
    while (proto = Object.getPrototypeOf(proto)) {
        Object.keys(proto).forEach((protoProp) => {
            const desc = Object.getOwnPropertyDescriptor(proto, protoProp);
            if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                props.push(protoProp);
            }
        });
    }
    return props;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
class TestingCompilerFactoryImpl {
    constructor(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    createTestingCompiler(options) {
        const compiler$$1 = this._compilerFactory.createCompiler(options);
        return new TestingCompilerImpl(compiler$$1, compiler$$1.injector.get(MockDirectiveResolver), compiler$$1.injector.get(MockPipeResolver), compiler$$1.injector.get(MockNgModuleResolver));
    }
}
class TestingCompilerImpl {
    constructor(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new MetadataOverrider();
    }
    get injector() { return this._compiler.injector; }
    compileModuleSync(moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    }
    compileModuleAsync(moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    }
    compileModuleAndAllComponentsSync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    }
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    }
    getComponentFactory(component) {
        return this._compiler.getComponentFactory(component);
    }
    checkOverrideAllowed(type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(`${ɵstringify(type)} was AOT compiled, so its metadata cannot be changed.`);
        }
    }
    overrideModule(ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        const oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    }
    overrideDirective(directive, override) {
        this.checkOverrideAllowed(directive);
        const oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, oldMetadata, override));
        this.clearCacheFor(directive);
    }
    overrideComponent(component, override) {
        this.checkOverrideAllowed(component);
        const oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, oldMetadata, override));
        this.clearCacheFor(component);
    }
    overridePipe(pipe, override) {
        this.checkOverrideAllowed(pipe);
        const oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    }
    loadAotSummaries(summaries) { this._compiler.loadAotSummaries(summaries); }
    clearCache() { this._compiler.clearCache(); }
    clearCacheFor(type) { this._compiler.clearCacheFor(type); }
    getComponentFromError(error) { return error[ERROR_COMPONENT_TYPE] || null; }
    getModuleId(moduleType) {
        return this._moduleResolver.resolve(moduleType, true).id;
    }
}

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
 * @experimental
 */
const platformCoreDynamicTesting = createPlatformFactory(ɵplatformCoreDynamic, 'coreDynamicTesting', [
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
const platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 *
 */
let BrowserDynamicTestingModule = class BrowserDynamicTestingModule {
};
BrowserDynamicTestingModule = __decorate([
    NgModule({
        exports: [BrowserTestingModule],
        providers: [
            { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
        ]
    })
], BrowserDynamicTestingModule);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file is not used to build this module. It is only used during editing
// by the TypeScript language service and during build for verification. `ngc`
// replaces this file with production index.ts when it rewrites private symbol
// names.

export { platformBrowserDynamicTesting, BrowserDynamicTestingModule, DOMTestComponentRenderer as ɵDOMTestComponentRenderer, platformCoreDynamicTesting as ɵplatformCoreDynamicTesting };
//# sourceMappingURL=testing.js.map
