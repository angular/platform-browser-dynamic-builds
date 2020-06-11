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
        const template = getDOM().getDefaultDocument().createElement('template');
        template.innerHTML = `<div id="${rootElId}"></div>`;
        const rootEl = getContent(template).firstChild;
        // TODO(juliemr): can/should this be optional?
        const oldRoots = this._doc.querySelectorAll('[id^=root]');
        for (let i = 0; i < oldRoots.length; i++) {
            getDOM().remove(oldRoots[i]);
        }
        this._doc.body.appendChild(rootEl);
    }
}
DOMTestComponentRenderer.ɵfac = function DOMTestComponentRenderer_Factory(t) { return new (t || DOMTestComponentRenderer)(i0.ɵɵinject(DOCUMENT)); };
DOMTestComponentRenderer.ɵprov = i0.ɵɵdefineInjectable({ token: DOMTestComponentRenderer, factory: DOMTestComponentRenderer.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DOMTestComponentRenderer, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
function getContent(node) {
    if ('content' in node) {
        return node.content;
    }
    else {
        return node;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFNUQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEscUJBQXFCO0lBQ2pFLFlBQXNDLElBQVM7UUFDN0MsS0FBSyxFQUFFLENBQUM7UUFENEIsU0FBSSxHQUFKLElBQUksQ0FBSztJQUUvQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBZ0I7UUFDaEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLFFBQVEsVUFBVSxDQUFDO1FBQ3BELE1BQU0sTUFBTSxHQUFnQixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBRTVELDhDQUE4QztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnR0FoQlUsd0JBQXdCLGNBQ2YsUUFBUTtnRUFEakIsd0JBQXdCLFdBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFVBQVU7O3NCQUVJLE1BQU07dUJBQUMsUUFBUTs7QUFrQjlCLFNBQVMsVUFBVSxDQUFDLElBQVU7SUFDNUIsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ3JCLE9BQWEsSUFBSyxDQUFDLE9BQU8sQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVCwgybVnZXRET00gYXMgZ2V0RE9NfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50UmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERPTVRlc3RDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIFRlc3RDb21wb25lbnRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGluc2VydFJvb3RFbGVtZW50KHJvb3RFbElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGdldERPTSgpLmdldERlZmF1bHREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCIke3Jvb3RFbElkfVwiPjwvZGl2PmA7XG4gICAgY29uc3Qgcm9vdEVsID0gPEhUTUxFbGVtZW50PmdldENvbnRlbnQodGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG5cbiAgICAvLyBUT0RPKGp1bGllbXIpOiBjYW4vc2hvdWxkIHRoaXMgYmUgb3B0aW9uYWw/XG4gICAgY29uc3Qgb2xkUm9vdHMgPSB0aGlzLl9kb2MucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1yb290XScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldERPTSgpLnJlbW92ZShvbGRSb290c1tpXSk7XG4gICAgfVxuICAgIHRoaXMuX2RvYy5ib2R5LmFwcGVuZENoaWxkKHJvb3RFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudChub2RlOiBOb2RlKTogTm9kZSB7XG4gIGlmICgnY29udGVudCcgaW4gbm9kZSkge1xuICAgIHJldHVybiAoPGFueT5ub2RlKS5jb250ZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXX0=