/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/dom_test_component_renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
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
let DOMTestComponentRenderer = /** @class */ (() => {
    /**
     * A DOM based implementation of the TestComponentRenderer.
     */
    class DOMTestComponentRenderer extends TestComponentRenderer {
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
            const oldRoots = this._doc.querySelectorAll('[id^=root]');
            for (let i = 0; i < oldRoots.length; i++) {
                getDOM().remove(oldRoots[i]);
            }
            this._doc.body.appendChild(rootEl);
        }
    }
    DOMTestComponentRenderer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DOMTestComponentRenderer.ctorParameters = () => [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ];
    /** @nocollapse */ DOMTestComponentRenderer.ɵfac = function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ DOMTestComponentRenderer.ɵprov = i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: DOMTestComponentRenderer.ɵfac });
    return DOMTestComponentRenderer;
})();
export { DOMTestComponentRenderer };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7QUFLNUQ7Ozs7SUFBQSxNQUNhLHdCQUF5QixTQUFRLHFCQUFxQjs7OztRQUNqRSxZQUFzQyxJQUFTO1lBQzdDLEtBQUssRUFBRSxDQUFDO1lBRDRCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFL0MsQ0FBQzs7Ozs7UUFFRCxpQkFBaUIsQ0FBQyxRQUFnQjs7a0JBQzFCLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDeEUsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLFFBQVEsVUFBVSxDQUFDOztrQkFDOUMsTUFBTSxHQUFHLG1CQUFhLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUE7OztrQkFHckQsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1lBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O2dCQWpCRixVQUFVOzs7O2dEQUVJLE1BQU0sU0FBQyxRQUFROzt1SEFEakIsd0JBQXdCLGNBQ2YsUUFBUTt1RkFEakIsd0JBQXdCLFdBQXhCLHdCQUF3QjttQ0FoQnJDO0tBaUNDO1NBakJZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFVBQVU7O3NCQUVJLE1BQU07dUJBQUMsUUFBUTs7Ozs7OztJQUFoQix3Q0FBbUM7Ozs7OztBQWtCakQsU0FBUyxVQUFVLENBQUMsSUFBVTtJQUM1QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBTyxDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCIke3Jvb3RFbElkfVwiPjwvZGl2PmA7XG4gICAgY29uc3Qgcm9vdEVsID0gPEhUTUxFbGVtZW50PmdldENvbnRlbnQodGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG5cbiAgICAvLyBUT0RPKGp1bGllbXIpOiBjYW4vc2hvdWxkIHRoaXMgYmUgb3B0aW9uYWw/XG4gICAgY29uc3Qgb2xkUm9vdHMgPSB0aGlzLl9kb2MucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIHRoaXMuX2RvYy5ib2R5LmFwcGVuZENoaWxkKHJvb3RFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudChub2RlOiBOb2RlKTogTm9kZSB7XG4gIGlmICgnY29udGVudCcgaW4gbm9kZSkge1xuICAgIHJldHVybiAoPGFueT5ub2RlKS5jb250ZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXX0=