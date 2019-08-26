/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
import * as i0 from "@angular/core";
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
export class DOMTestComponentRenderer extends TestComponentRenderer {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    /**
     * @param {?} rootElId
     * @return {?}
     */
    insertRootElement(rootElId) {
        /** @type {?} */
        const rootEl = (/** @type {?} */ (getDOM().firstChild(getContent(getDOM().createTemplate(`<div id="${rootElId}"></div>`)))));
        // TODO(juliemr): can/should this be optional?
        /** @type {?} */
        const oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        getDOM().appendChild(this._doc.body, rootEl);
    }
}
DOMTestComponentRenderer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ DOMTestComponentRenderer.ngInjectableDef = i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(DOCUMENT)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    DOMTestComponentRenderer.prototype._doc;
}
/**
 * @param {?} node
 * @return {?}
 */
function getContent(node) {
    if ('content' in node) {
        return ((/** @type {?} */ (node))).content;
    }
    else {
        return node;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7OztBQU01RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCOzs7O0lBQ2pFLFlBQXNDLElBQVM7UUFBSSxLQUFLLEVBQUUsQ0FBQztRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFLO0lBQWEsQ0FBQzs7Ozs7SUFFN0QsaUJBQWlCLENBQUMsUUFBZ0I7O2NBQzFCLE1BQU0sR0FBRyxtQkFBYSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQzNDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxRQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQTs7O2NBR2xFLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztRQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBZEYsVUFBVTs7Ozs0Q0FFSSxNQUFNLFNBQUMsUUFBUTs7MEVBRGpCLHdCQUF3QiwyRUFBeEIsd0JBQXdCLGNBQ2YsUUFBUTttQ0FEakIsd0JBQXdCO2NBRHBDLFVBQVU7O3NCQUVJLE1BQU07dUJBQUMsUUFBUTs7Ozs7OztJQUFoQix3Q0FBbUM7Ozs7OztBQWVqRCxTQUFTLFVBQVUsQ0FBQyxJQUFVO0lBQzVCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNyQixPQUFPLENBQUMsbUJBQUssSUFBSSxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDNUI7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge8m1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7IHN1cGVyKCk7IH1cblxuICBpbnNlcnRSb290RWxlbWVudChyb290RWxJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gPEhUTUxFbGVtZW50PmdldERPTSgpLmZpcnN0Q2hpbGQoXG4gICAgICAgIGdldENvbnRlbnQoZ2V0RE9NKCkuY3JlYXRlVGVtcGxhdGUoYDxkaXYgaWQ9XCIke3Jvb3RFbElkfVwiPjwvZGl2PmApKSk7XG5cbiAgICAvLyBUT0RPKGp1bGllbXIpOiBjYW4vc2hvdWxkIHRoaXMgYmUgb3B0aW9uYWw/XG4gICAgY29uc3Qgb2xkUm9vdHMgPSBnZXRET00oKS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2RvYywgJ1tpZF49cm9vdF0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnZXRET00oKS5yZW1vdmUob2xkUm9vdHNbaV0pO1xuICAgIH1cbiAgICBnZXRET00oKS5hcHBlbmRDaGlsZCh0aGlzLl9kb2MuYm9keSwgcm9vdEVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250ZW50KG5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgaWYgKCdjb250ZW50JyBpbiBub2RlKSB7XG4gICAgcmV0dXJuICg8YW55Pm5vZGUpLmNvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cbiJdfQ==