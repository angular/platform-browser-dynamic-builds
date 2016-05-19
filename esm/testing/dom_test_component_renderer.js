import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { getDOM } from '../platform_browser_private';
import { TestComponentRenderer } from '@angular/compiler/testing';
import { el } from '@angular/platform-browser/testing';
export class DOMTestComponentRenderer extends TestComponentRenderer {
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    insertRootElement(rootElId) {
        let rootEl = el(`<div id="${rootElId}"></div>`);
        // TODO(juliemr): can/should this be optional?
        let oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        getDOM().appendChild(this._doc.body, rootEl);
    }
}
DOMTestComponentRenderer.decorators = [
    { type: Injectable },
];
DOMTestComponentRenderer.ctorParameters = [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
//# sourceMappingURL=dom_test_component_renderer.js.map