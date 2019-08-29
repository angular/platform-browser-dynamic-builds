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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTTVELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxxQkFBcUI7Ozs7SUFDakUsWUFBc0MsSUFBUztRQUFJLEtBQUssRUFBRSxDQUFDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQUs7SUFBYSxDQUFDOzs7OztJQUU3RCxpQkFBaUIsQ0FBQyxRQUFnQjs7Y0FDMUIsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN4RSxRQUFRLENBQUMsU0FBUyxHQUFHLFlBQVksUUFBUSxVQUFVLENBQUM7O2NBQzlDLE1BQU0sR0FBRyxtQkFBYSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFBOzs7Y0FHckQsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQ25FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFmRixVQUFVOzs7OzRDQUVJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLHdDQUFtQzs7Ozs7O0FBZ0JqRCxTQUFTLFVBQVUsQ0FBQyxJQUFVO0lBQzVCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNyQixPQUFPLENBQUMsbUJBQUssSUFBSSxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDNUI7U0FBTTtRQUNMLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge8m1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7IHN1cGVyKCk7IH1cblxuICBpbnNlcnRSb290RWxlbWVudChyb290RWxJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBnZXRET00oKS5nZXREZWZhdWx0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiJHtyb290RWxJZH1cIj48L2Rpdj5gO1xuICAgIGNvbnN0IHJvb3RFbCA9IDxIVE1MRWxlbWVudD5nZXRDb250ZW50KHRlbXBsYXRlKS5maXJzdENoaWxkO1xuXG4gICAgLy8gVE9ETyhqdWxpZW1yKTogY2FuL3Nob3VsZCB0aGlzIGJlIG9wdGlvbmFsP1xuICAgIGNvbnN0IG9sZFJvb3RzID0gZ2V0RE9NKCkucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9kb2MsICdbaWRePXJvb3RdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRSb290cy5sZW5ndGg7IGkrKykge1xuICAgICAgZ2V0RE9NKCkucmVtb3ZlKG9sZFJvb3RzW2ldKTtcbiAgICB9XG4gICAgZ2V0RE9NKCkuYXBwZW5kQ2hpbGQodGhpcy5fZG9jLmJvZHksIHJvb3RFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudChub2RlOiBOb2RlKTogTm9kZSB7XG4gIGlmICgnY29udGVudCcgaW4gbm9kZSkge1xuICAgIHJldHVybiAoPGFueT5ub2RlKS5jb250ZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXX0=