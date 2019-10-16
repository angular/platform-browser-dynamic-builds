import { TestComponentRenderer } from '@angular/core/testing';
import * as i0 from "@angular/core";
/**
 * A DOM based implementation of the TestComponentRenderer.
 */
export declare class DOMTestComponentRenderer extends TestComponentRenderer {
    private _doc;
    constructor(_doc: any);
    insertRootElement(rootElId: string): void;
    static ɵfac: i0.ɵɵFactoryDef<DOMTestComponentRenderer>;
    static ɵprov: i0.ɵɵInjectableDef<DOMTestComponentRenderer>;
}
