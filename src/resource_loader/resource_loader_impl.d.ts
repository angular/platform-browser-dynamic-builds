/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import * as i0 from "@angular/core";
export declare class ResourceLoaderImpl extends ResourceLoader {
    get(url: string): Promise<string>;
    static ɵfac: i0.ɵɵFactoryDef<ResourceLoaderImpl, never>;
    static ɵprov: i0.ɵɵInjectableDef<ResourceLoaderImpl>;
}
