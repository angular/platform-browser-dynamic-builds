var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { platformCoreDynamicTesting } from '@angular/compiler/testing';
import { createPlatformFactory, NgModule, Injectable, Inject } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ɵgetDOM, DOCUMENT } from '@angular/platform-browser';

/**
 * A DOM based implementation of the TestComponentRenderer.
 */

var DOMTestComponentRenderer = function (_TestComponentRendere) {
    _inherits(DOMTestComponentRenderer, _TestComponentRendere);

    function DOMTestComponentRenderer(_doc /** TODO #9100 */) {
        _classCallCheck(this, DOMTestComponentRenderer);

        var _this = _possibleConstructorReturn(this, (DOMTestComponentRenderer.__proto__ || Object.getPrototypeOf(DOMTestComponentRenderer)).call(this));

        _this._doc = _doc; /** TODO #9100 */
        return _this;
    }

    _createClass(DOMTestComponentRenderer, [{
        key: 'insertRootElement',
        value: function insertRootElement(rootElId) {
            var rootEl = ɵgetDOM().firstChild(ɵgetDOM().content(ɵgetDOM().createTemplate('<div id="' + rootElId + '"></div>')));
            // TODO(juliemr): can/should this be optional?
            var oldRoots = ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
            for (var i = 0; i < oldRoots.length; i++) {
                ɵgetDOM().remove(oldRoots[i]);
            }
            ɵgetDOM().appendChild(this._doc.body, rootEl);
        }
    }]);

    return DOMTestComponentRenderer;
}(TestComponentRenderer);

DOMTestComponentRenderer.decorators = [{ type: Injectable }];
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = function () {
    return [{ type: undefined, decorators: [{ type: Inject, args: [DOCUMENT] }] }];
};

/**
 * @stable
 */
var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @stable
 */

var BrowserDynamicTestingModule = function BrowserDynamicTestingModule() {
    _classCallCheck(this, BrowserDynamicTestingModule);
};

BrowserDynamicTestingModule.decorators = [{ type: NgModule, args: [{
        exports: [BrowserTestingModule],
        providers: [{ provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }]
    }] }];
/** @nocollapse */
BrowserDynamicTestingModule.ctorParameters = function () {
    return [];
};

export { platformBrowserDynamicTesting, BrowserDynamicTestingModule, DOMTestComponentRenderer as ɵDOMTestComponentRenderer };
