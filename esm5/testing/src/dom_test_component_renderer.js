import * as tslib_1 from "tslib";
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
import * as i0 from "@angular/core";
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
var DOMTestComponentRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DOMTestComponentRenderer, _super);
    function DOMTestComponentRenderer(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    DOMTestComponentRenderer.prototype.insertRootElement = function (rootElId) {
        var rootEl = getDOM().firstChild(getContent(getDOM().createTemplate("<div id=\"" + rootElId + "\"></div>")));
        // TODO(juliemr): can/should this be optional?
        var oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
        for (var i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        getDOM().appendChild(this._doc.body, rootEl);
    };
    DOMTestComponentRenderer.ngInjectableDef = i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(DOCUMENT)); }, providedIn: null });
    return DOMTestComponentRenderer;
}(TestComponentRenderer));
export { DOMTestComponentRenderer };
/*@__PURE__*/ i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null);
function getContent(node) {
    if ('content' in node) {
        return node.content;
    }
    else {
        return node;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBRTVEOztHQUVHO0FBQ0g7SUFDOEMsb0RBQXFCO0lBQ2pFLGtDQUFzQyxJQUFTO1FBQS9DLFlBQW1ELGlCQUFPLFNBQUc7UUFBdkIsVUFBSSxHQUFKLElBQUksQ0FBSzs7SUFBYSxDQUFDO0lBRTdELG9EQUFpQixHQUFqQixVQUFrQixRQUFnQjtRQUNoQyxJQUFNLE1BQU0sR0FBZ0IsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUMzQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQVksUUFBUSxjQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekUsOENBQThDO1FBQzlDLElBQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7OEVBYlUsd0JBQXdCLDJFQUF4Qix3QkFBd0IsY0FDZixRQUFRO21DQWxCOUI7Q0ErQkMsQUFmRCxDQUM4QyxxQkFBcUIsR0FjbEU7U0FkWSx3QkFBd0I7bUNBQXhCLHdCQUF3QjtjQURwQyxVQUFVOztzQkFFSSxNQUFNO3VCQUFDLFFBQVE7O0FBZTlCLFNBQVMsVUFBVSxDQUFDLElBQVU7SUFDNUIsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ3JCLE9BQWEsSUFBSyxDQUFDLE9BQU8sQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7ybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLyoqXG4gKiBBIERPTSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVGVzdENvbXBvbmVudFJlbmRlcmVyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgVGVzdENvbXBvbmVudFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHsgc3VwZXIoKTsgfVxuXG4gIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByb290RWwgPSA8SFRNTEVsZW1lbnQ+Z2V0RE9NKCkuZmlyc3RDaGlsZChcbiAgICAgICAgZ2V0Q29udGVudChnZXRET00oKS5jcmVhdGVUZW1wbGF0ZShgPGRpdiBpZD1cIiR7cm9vdEVsSWR9XCI+PC9kaXY+YCkpKTtcblxuICAgIC8vIFRPRE8oanVsaWVtcik6IGNhbi9zaG91bGQgdGhpcyBiZSBvcHRpb25hbD9cbiAgICBjb25zdCBvbGRSb290cyA9IGdldERPTSgpLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZG9jLCAnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIGdldERPTSgpLmFwcGVuZENoaWxkKHRoaXMuX2RvYy5ib2R5LCByb290RWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQobm9kZTogTm9kZSk6IE5vZGUge1xuICBpZiAoJ2NvbnRlbnQnIGluIG5vZGUpIHtcbiAgICByZXR1cm4gKDxhbnk+bm9kZSkuY29udGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl19