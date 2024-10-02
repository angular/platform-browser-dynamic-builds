/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.6+sha-46a2ad3", ngImport: i0, type: DOMTestComponentRenderer, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.6+sha-46a2ad3", ngImport: i0, type: DOMTestComponentRenderer }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.6+sha-46a2ad3", ngImport: i0, type: DOMTestComponentRenderer, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFNUQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCO0lBQ2pFLFlBQXNDLElBQVM7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFENEIsU0FBSSxHQUFKLElBQUksQ0FBSztJQUUvQyxDQUFDO0lBRVEsaUJBQWlCLENBQUMsUUFBZ0I7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFUSxxQkFBcUI7UUFDNUIsbUVBQW1FO1FBQ25FLHNFQUFzRTtRQUN0RSx1RUFBdUU7UUFDdkUsb0VBQW9FO1FBQ3BFLG9EQUFvRDtRQUNwRCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO3lIQTVCVSx3QkFBd0Isa0JBQ2YsUUFBUTs2SEFEakIsd0JBQXdCOztzR0FBeEIsd0JBQXdCO2tCQURwQyxVQUFVOzswQkFFSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlQsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEEgRE9NIGJhc2VkIGltcGxlbWVudGF0aW9uIG9mIHRoZSBUZXN0Q29tcG9uZW50UmVuZGVyZXIuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBET01UZXN0Q29tcG9uZW50UmVuZGVyZXIgZXh0ZW5kcyBUZXN0Q29tcG9uZW50UmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvdmVycmlkZSBpbnNlcnRSb290RWxlbWVudChyb290RWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW1vdmVBbGxSb290RWxlbWVudHNJbXBsKCk7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBnZXRET00oKS5nZXREZWZhdWx0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcm9vdEVsSWQpO1xuICAgIHRoaXMuX2RvYy5ib2R5LmFwcGVuZENoaWxkKHJvb3RFbGVtZW50KTtcbiAgfVxuXG4gIG92ZXJyaWRlIHJlbW92ZUFsbFJvb3RFbGVtZW50cygpIHtcbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBgRE9DVU1FTlRgIGluc3RhbmNlIHJldHJpZXZlZCBmcm9tIERJIGNvbnRhaW5zXG4gICAgLy8gdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbiB0byBjb21wbGV0ZSB0aGUgY2xlYW51cC4gSW4gdGVzdHMgdGhhdCBkb24ndFxuICAgIC8vIGludGVyYWN0IHdpdGggRE9NLCB0aGUgYERPQ1VNRU5UYCBtaWdodCBiZSBtb2NrZWQgYW5kIHNvbWUgZnVuY3Rpb25zXG4gICAgLy8gbWlnaHQgYmUgbWlzc2luZy4gRm9yIHN1Y2ggdGVzdHMsIERPTSBjbGVhbnVwIGlzIG5vdCByZXF1aXJlZCBhbmRcbiAgICAvLyB3ZSBza2lwIHRoZSBsb2dpYyBpZiB0aGVyZSBhcmUgbWlzc2luZyBmdW5jdGlvbnMuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9kb2MucXVlcnlTZWxlY3RvckFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5yZW1vdmVBbGxSb290RWxlbWVudHNJbXBsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVBbGxSb290RWxlbWVudHNJbXBsKCkge1xuICAgIGNvbnN0IG9sZFJvb3RzID0gdGhpcy5fZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49cm9vdF0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnZXRET00oKS5yZW1vdmUob2xkUm9vdHNbaV0pO1xuICAgIH1cbiAgfVxufVxuIl19