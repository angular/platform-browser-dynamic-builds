import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/platform-browser';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const rootEl = (/** @type {?} */ (getDOM().firstChild(getDOM().content(getDOM().createTemplate(`<div id="${rootElId}"></div>`)))));
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
DOMTestComponentRenderer.ngInjectableDef = i0.defineInjectable({ token: DOMTestComponentRenderer, factory: function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.inject(DOCUMENT)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }]; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    DOMTestComponentRenderer.prototype._doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQU10RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCOzs7O0lBQ2pFLFlBQXNDLElBQVM7UUFBSSxLQUFLLEVBQUUsQ0FBQztRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFLO0lBQWEsQ0FBQzs7Ozs7SUFFN0QsaUJBQWlCLENBQUMsUUFBZ0I7O2NBQzFCLE1BQU0sR0FBRyxtQkFBYSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQzNDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxRQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQTs7O2NBR3hFLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztRQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBZEYsVUFBVTs7Ozs0Q0FFSSxNQUFNLFNBQUMsUUFBUTs7d0VBRGpCLHdCQUF3QiwyRUFBeEIsd0JBQXdCLFlBQ2YsUUFBUTttQ0FEakIsd0JBQXdCO2NBRHBDLFVBQVU7Ozs7c0JBRUksTUFBTTt1QkFBQyxRQUFROzs7Ozs7OztJQUFoQix3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLyoqXG4gKiBBIERPTSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVGVzdENvbXBvbmVudFJlbmRlcmVyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgVGVzdENvbXBvbmVudFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHsgc3VwZXIoKTsgfVxuXG4gIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByb290RWwgPSA8SFRNTEVsZW1lbnQ+Z2V0RE9NKCkuZmlyc3RDaGlsZChcbiAgICAgICAgZ2V0RE9NKCkuY29udGVudChnZXRET00oKS5jcmVhdGVUZW1wbGF0ZShgPGRpdiBpZD1cIiR7cm9vdEVsSWR9XCI+PC9kaXY+YCkpKTtcblxuICAgIC8vIFRPRE8oanVsaWVtcik6IGNhbi9zaG91bGQgdGhpcyBiZSBvcHRpb25hbD9cbiAgICBjb25zdCBvbGRSb290cyA9IGdldERPTSgpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZG9jLCAnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIGdldERPTSgpLmFwcGVuZENoaWxkKHRoaXMuX2RvYy5ib2R5LCByb290RWwpO1xuICB9XG59XG4iXX0=