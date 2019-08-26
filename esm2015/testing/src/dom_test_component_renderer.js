/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
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
    { type: Injectable }
];
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTTVELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxxQkFBcUI7Ozs7SUFDakUsWUFBc0MsSUFBUztRQUFJLEtBQUssRUFBRSxDQUFDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQUs7SUFBYSxDQUFDOzs7OztJQUU3RCxpQkFBaUIsQ0FBQyxRQUFnQjs7Y0FDMUIsTUFBTSxHQUFHLG1CQUFhLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FDM0MsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLFFBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFBOzs7Y0FHbEUsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQ25FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFkRixVQUFVOzs7OzRDQUVJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLHdDQUFtQzs7Ozs7O0FBZWpELFNBQVMsVUFBVSxDQUFDLElBQVU7SUFDNUIsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxtQkFBSyxJQUFJLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7ybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLyoqXG4gKiBBIERPTSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVGVzdENvbXBvbmVudFJlbmRlcmVyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgVGVzdENvbXBvbmVudFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHsgc3VwZXIoKTsgfVxuXG4gIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByb290RWwgPSA8SFRNTEVsZW1lbnQ+Z2V0RE9NKCkuZmlyc3RDaGlsZChcbiAgICAgICAgZ2V0Q29udGVudChnZXRET00oKS5jcmVhdGVUZW1wbGF0ZShgPGRpdiBpZD1cIiR7cm9vdEVsSWR9XCI+PC9kaXY+YCkpKTtcblxuICAgIC8vIFRPRE8oanVsaWVtcik6IGNhbi9zaG91bGQgdGhpcyBiZSBvcHRpb25hbD9cbiAgICBjb25zdCBvbGRSb290cyA9IGdldERPTSgpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZG9jLCAnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIGdldERPTSgpLmFwcGVuZENoaWxkKHRoaXMuX2RvYy5ib2R5LCByb290RWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQobm9kZTogTm9kZSk6IE5vZGUge1xuICBpZiAoJ2NvbnRlbnQnIGluIG5vZGUpIHtcbiAgICByZXR1cm4gKDxhbnk+bm9kZSkuY29udGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl19