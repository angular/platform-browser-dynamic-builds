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
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
let DOMTestComponentRenderer = /** @class */ (() => {
    class DOMTestComponentRenderer extends TestComponentRenderer {
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
    DOMTestComponentRenderer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DOMTestComponentRenderer.ctorParameters = () => [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ];
    return DOMTestComponentRenderer;
})();
export { DOMTestComponentRenderer };
function getContent(node) {
    if ('content' in node) {
        return node.content;
    }
    else {
        return node;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3Rlc3RfY29tcG9uZW50X3JlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL2RvbV90ZXN0X2NvbXBvbmVudF9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RDs7R0FFRztBQUNIO0lBQUEsTUFDYSx3QkFBeUIsU0FBUSxxQkFBcUI7UUFDakUsWUFBc0MsSUFBUztZQUM3QyxLQUFLLEVBQUUsQ0FBQztZQUQ0QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRS9DLENBQUM7UUFFRCxpQkFBaUIsQ0FBQyxRQUFnQjtZQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RSxRQUFRLENBQUMsU0FBUyxHQUFHLFlBQVksUUFBUSxVQUFVLENBQUM7WUFDcEQsTUFBTSxNQUFNLEdBQWdCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFFNUQsOENBQThDO1lBQzlDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7Z0JBakJGLFVBQVU7Ozs7Z0RBRUksTUFBTSxTQUFDLFFBQVE7O0lBZ0I5QiwrQkFBQztLQUFBO1NBakJZLHdCQUF3QjtBQW1CckMsU0FBUyxVQUFVLENBQUMsSUFBVTtJQUM1QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBYSxJQUFLLENBQUMsT0FBTyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5ULCDJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnRSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBBIERPTSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVGVzdENvbXBvbmVudFJlbmRlcmVyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRE9NVGVzdENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgVGVzdENvbXBvbmVudFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgaW5zZXJ0Um9vdEVsZW1lbnQocm9vdEVsSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZ2V0RE9NKCkuZ2V0RGVmYXVsdERvY3VtZW50KCkuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7cm9vdEVsSWR9XCI+PC9kaXY+YDtcbiAgICBjb25zdCByb290RWwgPSA8SFRNTEVsZW1lbnQ+Z2V0Q29udGVudCh0ZW1wbGF0ZSkuZmlyc3RDaGlsZDtcblxuICAgIC8vIFRPRE8oanVsaWVtcik6IGNhbi9zaG91bGQgdGhpcyBiZSBvcHRpb25hbD9cbiAgICBjb25zdCBvbGRSb290cyA9IHRoaXMuX2RvYy5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePXJvb3RdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRSb290cy5sZW5ndGg7IGkrKykge1xuICAgICAgZ2V0RE9NKCkucmVtb3ZlKG9sZFJvb3RzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5fZG9jLmJvZHkuYXBwZW5kQ2hpbGQocm9vdEVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb250ZW50KG5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgaWYgKCdjb250ZW50JyBpbiBub2RlKSB7XG4gICAgcmV0dXJuICg8YW55Pm5vZGUpLmNvbnRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cbiJdfQ==