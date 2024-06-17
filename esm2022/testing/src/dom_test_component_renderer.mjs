/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import * as i0 from "@angular/core";
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
export class DOMTestComponentRenderer extends TestComponentRenderer {
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    insertRootElement(rootElId) {
        this.removeAllRootElementsImpl();
        const rootElement = getDOM().getDefaultDocument().createElement('div');
        rootElement.setAttribute('id', rootElId);
        this._doc.body.appendChild(rootElement);
    }
    removeAllRootElements() {
        // Check whether the `DOCUMENT` instance retrieved from DI contains
        // the necessary function to complete the cleanup. In tests that don't
        // interact with DOM, the `DOCUMENT` might be mocked and some functions
        // might be missing. For such tests, DOM cleanup is not required and
        // we skip the logic if there are missing functions.
        if (typeof this._doc.querySelectorAll === 'function') {
            this.removeAllRootElementsImpl();
        }
    }
    removeAllRootElementsImpl() {
        const oldRoots = this._doc.querySelectorAll('[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3+sha-841476d", ngImport: i0, type: DOMTestComponentRenderer, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3+sha-841476d", ngImport: i0, type: DOMTestComponentRenderer }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3+sha-841476d", ngImport: i0, type: DOMTestComponentRenderer, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFNUQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCO0lBQ2pFLFlBQXNDLElBQVM7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFENEIsU0FBSSxHQUFKLElBQUksQ0FBSztJQUUvQyxDQUFDO0lBRVEsaUJBQWlCLENBQUMsUUFBZ0I7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFUSxxQkFBcUI7UUFDNUIsbUVBQW1FO1FBQ25FLHNFQUFzRTtRQUN0RSx1RUFBdUU7UUFDdkUsb0VBQW9FO1FBQ3BFLG9EQUFvRDtRQUNwRCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO3lIQTVCVSx3QkFBd0Isa0JBQ2YsUUFBUTs2SEFEakIsd0JBQXdCOztzR0FBeEIsd0JBQXdCO2tCQURwQyxVQUFVOzswQkFFSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbW92ZUFsbFJvb3RFbGVtZW50c0ltcGwoKTtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByb290RWxJZCk7XG4gICAgdGhpcy5fZG9jLmJvZHkuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQpO1xuICB9XG5cbiAgb3ZlcnJpZGUgcmVtb3ZlQWxsUm9vdEVsZW1lbnRzKCkge1xuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGBET0NVTUVOVGAgaW5zdGFuY2UgcmV0cmlldmVkIGZyb20gREkgY29udGFpbnNcbiAgICAvLyB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9uIHRvIGNvbXBsZXRlIHRoZSBjbGVhbnVwLiBJbiB0ZXN0cyB0aGF0IGRvbid0XG4gICAgLy8gaW50ZXJhY3Qgd2l0aCBET00sIHRoZSBgRE9DVU1FTlRgIG1pZ2h0IGJlIG1vY2tlZCBhbmQgc29tZSBmdW5jdGlvbnNcbiAgICAvLyBtaWdodCBiZSBtaXNzaW5nLiBGb3Igc3VjaCB0ZXN0cywgRE9NIGNsZWFudXAgaXMgbm90IHJlcXVpcmVkIGFuZFxuICAgIC8vIHdlIHNraXAgdGhlIGxvZ2ljIGlmIHRoZXJlIGFyZSBtaXNzaW5nIGZ1bmN0aW9ucy5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2RvYy5xdWVyeVNlbGVjdG9yQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnJlbW92ZUFsbFJvb3RFbGVtZW50c0ltcGwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUFsbFJvb3RFbGVtZW50c0ltcGwoKSB7XG4gICAgY29uc3Qgb2xkUm9vdHMgPSB0aGlzLl9kb2MucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICB9XG59XG4iXX0=