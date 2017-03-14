var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.0.0-rc.3-914797a
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
import { platformCoreDynamicTesting } from '@angular/compiler/testing';
import { createPlatformFactory, NgModule, Injectable, Inject } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ɵgetDOM, DOCUMENT } from '@angular/platform-browser';
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
var DOMTestComponentRenderer = (function (_super) {
    __extends(DOMTestComponentRenderer, _super);
    function DOMTestComponentRenderer(_doc /** TODO #9100 */) {
        var _this = _super.call(this) || this;
        _this._doc = _doc; /** TODO #9100 */
        return _this;
    }
    DOMTestComponentRenderer.prototype.insertRootElement = function (rootElId) {
        var rootEl = ɵgetDOM().firstChild(ɵgetDOM().content(ɵgetDOM().createTemplate("<div id=\"" + rootElId + "\"></div>")));
        // TODO(juliemr): can/should this be optional?
        var oldRoots = ɵgetDOM().querySelectorAll(this._doc, '[id^=root]');
        for (var i = 0; i < oldRoots.length; i++) {
            ɵgetDOM().remove(oldRoots[i]);
        }
        ɵgetDOM().appendChild(this._doc.body, rootEl);
    };
    return DOMTestComponentRenderer;
}(TestComponentRenderer));
DOMTestComponentRenderer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DOMTestComponentRenderer.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
]; };
/**
 * @stable
 */
var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, 'browserDynamicTesting', ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
/**
 * NgModule for testing.
 *
 * @stable
 */
var BrowserDynamicTestingModule = (function () {
    function BrowserDynamicTestingModule() {
    }
    return BrowserDynamicTestingModule;
}());
BrowserDynamicTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserTestingModule],
                providers: [
                    { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer },
                ]
            },] },
];
/** @nocollapse */
BrowserDynamicTestingModule.ctorParameters = function () { return []; };
export { platformBrowserDynamicTesting, BrowserDynamicTestingModule, DOMTestComponentRenderer as ɵDOMTestComponentRenderer };
