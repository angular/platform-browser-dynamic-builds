import { __extends } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ResourceLoaderImpl = /** @class */ (function (_super) {
    __extends(ResourceLoaderImpl, _super);
    function ResourceLoaderImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceLoaderImpl.prototype.get = function (url) {
        var resolve;
        var reject;
        var promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
            // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
            // by IE10)
            var response = xhr.response || xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
            var status = xhr.status === 1223 ? 204 : xhr.status;
            // fix status code when it is 0 (0 status is undocumented).
            // Occurs when accessing file resources or on Android 4.1 stock browser
            // while retrieving files from application cache.
            if (status === 0) {
                status = response ? 200 : 0;
            }
            if (200 <= status && status <= 300) {
                resolve(response);
            }
            else {
                reject("Failed to load " + url);
            }
        };
        xhr.onerror = function () { reject("Failed to load " + url); };
        xhr.send();
        return promise;
    };
    ResourceLoaderImpl.ɵfac = function ResourceLoaderImpl_Factory(t) { return ɵResourceLoaderImpl_BaseFactory(t || ResourceLoaderImpl); };
    ResourceLoaderImpl.ɵprov = i0.ɵɵdefineInjectable({ token: ResourceLoaderImpl, factory: ResourceLoaderImpl.ɵfac, providedIn: null });
    return ResourceLoaderImpl;
}(ResourceLoader));
export { ResourceLoaderImpl };
var ɵResourceLoaderImpl_BaseFactory = i0.ɵɵgetInheritedFactory(ResourceLoaderImpl);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceLoaderImpl, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvc3JjL3Jlc291cmNlX2xvYWRlci9yZXNvdXJjZV9sb2FkZXJfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR3pDO0lBQ3dDLHNDQUFjO0lBRHREOztLQXlDQztJQXZDQyxnQ0FBRyxHQUFILFVBQUksR0FBVztRQUNiLElBQUksT0FBOEIsQ0FBQztRQUNuQyxJQUFJLE1BQTRCLENBQUM7UUFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQVMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUMzQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2QsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFFMUIsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUNYLG1GQUFtRjtZQUNuRiw0RkFBNEY7WUFDNUYsV0FBVztZQUNYLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztZQUVsRCx5REFBeUQ7WUFDekQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUVwRCwyREFBMkQ7WUFDM0QsdUVBQXVFO1lBQ3ZFLGlEQUFpRDtZQUNqRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsb0JBQWtCLEdBQUssQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsR0FBRyxDQUFDLE9BQU8sR0FBRyxjQUFhLE1BQU0sQ0FBQyxvQkFBa0IsR0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzttSEF2Q1Usa0JBQWtCOzhEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOzZCQVovQjtDQW9EQyxBQXpDRCxDQUN3QyxjQUFjLEdBd0NyRDtTQXhDWSxrQkFBa0I7K0RBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1Jlc291cmNlTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUxvYWRlckltcGwgZXh0ZW5kcyBSZXNvdXJjZUxvYWRlciB7XG4gIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgbGV0IHJlc29sdmU6IChyZXN1bHQ6IGFueSkgPT4gdm9pZDtcbiAgICBsZXQgcmVqZWN0OiAoZXJyb3I6IGFueSkgPT4gdm9pZDtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzLCByZWopID0+IHtcbiAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICByZWplY3QgPSByZWo7XG4gICAgfSk7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gUmVzb3VyY2VMb2FkZXIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZFxuICAgICAgLy8gYnkgSUUxMClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlIHx8IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgICAgbGV0IHN0YXR1cyA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuXG4gICAgICAvLyBmaXggc3RhdHVzIGNvZGUgd2hlbiBpdCBpcyAwICgwIHN0YXR1cyBpcyB1bmRvY3VtZW50ZWQpLlxuICAgICAgLy8gT2NjdXJzIHdoZW4gYWNjZXNzaW5nIGZpbGUgcmVzb3VyY2VzIG9yIG9uIEFuZHJvaWQgNC4xIHN0b2NrIGJyb3dzZXJcbiAgICAgIC8vIHdoaWxlIHJldHJpZXZpbmcgZmlsZXMgZnJvbSBhcHBsaWNhdGlvbiBjYWNoZS5cbiAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2UgPyAyMDAgOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPD0gMzAwKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KGBGYWlsZWQgdG8gbG9hZCAke3VybH1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHsgcmVqZWN0KGBGYWlsZWQgdG8gbG9hZCAke3VybH1gKTsgfTtcblxuICAgIHhoci5zZW5kKCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbn1cbiJdfQ==