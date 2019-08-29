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
        const template = getDOM().getDefaultDocument().createElement('template');
        template.innerHTML = `<div id="${rootElId}"></div>`;
        /** @type {?} */
        const rootEl = (/** @type {?} */ (getContent(template).firstChild));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7OztBQU01RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCOzs7O0lBQ2pFLFlBQXNDLElBQVM7UUFBSSxLQUFLLEVBQUUsQ0FBQztRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFLO0lBQWEsQ0FBQzs7Ozs7SUFFN0QsaUJBQWlCLENBQUMsUUFBZ0I7O2NBQzFCLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDeEUsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLFFBQVEsVUFBVSxDQUFDOztjQUM5QyxNQUFNLEdBQUcsbUJBQWEsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQTs7O2NBR3JELFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztRQUNuRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBZkYsVUFBVTs7Ozs0Q0FFSSxNQUFNLFNBQUMsUUFBUTs7MEVBRGpCLHdCQUF3QiwyRUFBeEIsd0JBQXdCLGNBQ2YsUUFBUTttQ0FEakIsd0JBQXdCO2NBRHBDLFVBQVU7O3NCQUVJLE1BQU07dUJBQUMsUUFBUTs7Ozs7OztJQUFoQix3Q0FBbUM7Ozs7OztBQWdCakQsU0FBUyxVQUFVLENBQUMsSUFBVTtJQUM1QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBTyxDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHvJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKipcbiAqIEEgRE9NIGJhc2VkIGltcGxlbWVudGF0aW9uIG9mIHRoZSBUZXN0Q29tcG9uZW50UmVuZGVyZXIuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBET01UZXN0Q29tcG9uZW50UmVuZGVyZXIgZXh0ZW5kcyBUZXN0Q29tcG9uZW50UmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSkgeyBzdXBlcigpOyB9XG5cbiAgaW5zZXJ0Um9vdEVsZW1lbnQocm9vdEVsSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZ2V0RE9NKCkuZ2V0RGVmYXVsdERvY3VtZW50KCkuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7cm9vdEVsSWR9XCI+PC9kaXY+YDtcbiAgICBjb25zdCByb290RWwgPSA8SFRNTEVsZW1lbnQ+Z2V0Q29udGVudCh0ZW1wbGF0ZSkuZmlyc3RDaGlsZDtcblxuICAgIC8vIFRPRE8oanVsaWVtcik6IGNhbi9zaG91bGQgdGhpcyBiZSBvcHRpb25hbD9cbiAgICBjb25zdCBvbGRSb290cyA9IGdldERPTSgpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZG9jLCAnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIGdldERPTSgpLmFwcGVuZENoaWxkKHRoaXMuX2RvYy5ib2R5LCByb290RWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQobm9kZTogTm9kZSk6IE5vZGUge1xuICBpZiAoJ2NvbnRlbnQnIGluIG5vZGUpIHtcbiAgICByZXR1cm4gKDxhbnk+bm9kZSkuY29udGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl19