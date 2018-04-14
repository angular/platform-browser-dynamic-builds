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
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/platform-browser';
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
var DOMTestComponentRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(DOMTestComponentRenderer, _super);
    function DOMTestComponentRenderer(_doc /** TODO #9100 */) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    /**
     * @param {?} rootElId
     * @return {?}
     */
    DOMTestComponentRenderer.prototype.insertRootElement = /**
     * @param {?} rootElId
     * @return {?}
     */
    function (rootElId) {
        var /** @type {?} */ rootEl = /** @type {?} */ (getDOM().firstChild(getDOM().content(getDOM().createTemplate("<div id=\"" + rootElId + "\"></div>"))));
        // TODO(juliemr): can/should this be optional?
        var /** @type {?} */ oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
        for (var /** @type {?} */ i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        getDOM().appendChild(this._doc.body, rootEl);
    };
    DOMTestComponentRenderer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DOMTestComponentRenderer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return DOMTestComponentRenderer;
}(TestComponentRenderer));
export { DOMTestComponentRenderer };
function DOMTestComponentRenderer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DOMTestComponentRenderer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DOMTestComponentRenderer.ctorParameters;
    /** @type {?} */
    DOMTestComponentRenderer.prototype._doc;
}
//# sourceMappingURL=dom_test_component_renderer.js.map