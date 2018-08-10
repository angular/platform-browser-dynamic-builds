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
let DOMTestComponentRenderer = class DOMTestComponentRenderer extends TestComponentRenderer {
    constructor(_doc /** TODO #9100 */) {
        super();
        this._doc = _doc;
    }
    insertRootElement(rootElId) {
        const rootEl = getDOM().firstChild(getDOM().content(getDOM().createTemplate(`<div id="${rootElId}"></div>`)));
        // TODO(juliemr): can/should this be optional?
        const oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        getDOM().appendChild(this._doc.body, rootEl);
    }
};
DOMTestComponentRenderer = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object])
], DOMTestComponentRenderer);
export { DOMTestComponentRenderer };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdEU7O0dBRUc7QUFFSCxJQUFhLHdCQUF3QixHQUFyQyw4QkFBc0MsU0FBUSxxQkFBcUI7SUFDakUsWUFBc0MsSUFBUyxDQUFDLGlCQUFpQjtRQUFJLEtBQUssRUFBRSxDQUFDO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBK0IsQ0FBQztJQUUvRSxpQkFBaUIsQ0FBQyxRQUFnQjtRQUNoQyxNQUFNLE1BQU0sR0FBZ0IsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUMzQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksUUFBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0UsOENBQThDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBO0FBZFksd0JBQXdCO0lBRHBDLFVBQVUsRUFBRTtJQUVFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7R0FEbEIsd0JBQXdCLENBY3BDO1NBZFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7RE9DVU1FTlQsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55IC8qKiBUT0RPICM5MTAwICovKSB7IHN1cGVyKCk7IH1cblxuICBpbnNlcnRSb290RWxlbWVudChyb290RWxJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gPEhUTUxFbGVtZW50PmdldERPTSgpLmZpcnN0Q2hpbGQoXG4gICAgICAgIGdldERPTSgpLmNvbnRlbnQoZ2V0RE9NKCkuY3JlYXRlVGVtcGxhdGUoYDxkaXYgaWQ9XCIke3Jvb3RFbElkfVwiPjwvZGl2PmApKSk7XG5cbiAgICAvLyBUT0RPKGp1bGllbXIpOiBjYW4vc2hvdWxkIHRoaXMgYmUgb3B0aW9uYWw/XG4gICAgY29uc3Qgb2xkUm9vdHMgPSBnZXRET00oKS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2RvYywgJ1tpZF49cm9vdF0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnZXRET00oKS5yZW1vdmUob2xkUm9vdHNbaV0pO1xuICAgIH1cbiAgICBnZXRET00oKS5hcHBlbmRDaGlsZCh0aGlzLl9kb2MuYm9keSwgcm9vdEVsKTtcbiAgfVxufVxuIl19