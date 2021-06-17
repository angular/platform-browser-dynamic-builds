import { TestComponentRenderer } from '@angular/core/testing';
import * as i0 from "@angular/core";
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
export declare class DOMTestComponentRenderer extends TestComponentRenderer {
    private _doc;
    constructor(_doc: any);
    insertRootElement(rootElId: string): void;
    removeAllRootElements(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DOMTestComponentRenderer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DOMTestComponentRenderer>;
}
