/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/src/resource_loader/resource_loader_impl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
let ResourceLoaderImpl = /** @class */ (() => {
    class ResourceLoaderImpl extends ResourceLoader {
        /**
         * @param {?} url
         * @return {?}
         */
        get(url) {
            /** @type {?} */
            let resolve;
            /** @type {?} */
            let reject;
            /** @type {?} */
            const promise = new Promise((/**
             * @param {?} res
             * @param {?} rej
             * @return {?}
             */
            (res, rej) => {
                resolve = res;
                reject = rej;
            }));
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'text';
            xhr.onload = (/**
             * @return {?}
             */
            function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
                // by IE10)
                /** @type {?} */
                const response = xhr.response || xhr.responseText;
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                /** @type {?} */
                let status = xhr.status === 1223 ? 204 : xhr.status;
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
                    reject(`Failed to load ${url}`);
                }
            });
            xhr.onerror = (/**
             * @return {?}
             */
            function () {
                reject(`Failed to load ${url}`);
            });
            xhr.send();
            return promise;
        }
    }
    ResourceLoaderImpl.decorators = [
        { type: Injectable }
    ];
    return ResourceLoaderImpl;
})();
export { ResourceLoaderImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvc3JjL3Jlc291cmNlX2xvYWRlci9yZXNvdXJjZV9sb2FkZXJfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QztJQUFBLE1BQ2Esa0JBQW1CLFNBQVEsY0FBYzs7Ozs7UUFDcEQsR0FBRyxDQUFDLEdBQVc7O2dCQUNULE9BQThCOztnQkFDOUIsTUFBNEI7O2tCQUMxQixPQUFPLEdBQUcsSUFBSSxPQUFPOzs7OztZQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUMvQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDZixDQUFDLEVBQUM7O2tCQUNJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRTtZQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7WUFFMUIsR0FBRyxDQUFDLE1BQU07OztZQUFHOzs7OztzQkFJTCxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsWUFBWTs7O29CQUc3QyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBRW5ELDJEQUEyRDtnQkFDM0QsdUVBQXVFO2dCQUN2RSxpREFBaUQ7Z0JBQ2pELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDaEIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2dCQUVELElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO29CQUNsQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25CO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUEsQ0FBQztZQUVGLEdBQUcsQ0FBQyxPQUFPOzs7WUFBRztnQkFDWixNQUFNLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFBLENBQUM7WUFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDOzs7Z0JBMUNGLFVBQVU7O0lBMkNYLHlCQUFDO0tBQUE7U0ExQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtSZXNvdXJjZUxvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VMb2FkZXJJbXBsIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGxldCByZXNvbHZlOiAocmVzdWx0OiBhbnkpID0+IHZvaWQ7XG4gICAgbGV0IHJlamVjdDogKGVycm9yOiBhbnkpID0+IHZvaWQ7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlcywgcmVqKSA9PiB7XG4gICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgcmVqZWN0ID0gcmVqO1xuICAgIH0pO1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFJlc291cmNlTG9hZGVyIExldmVsMiBzcGVjIChzdXBwb3J0ZWRcbiAgICAgIC8vIGJ5IElFMTApXG4gICAgICBjb25zdCByZXNwb25zZSA9IHhoci5yZXNwb25zZSB8fCB4aHIucmVzcG9uc2VUZXh0O1xuXG4gICAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICAgIGxldCBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcblxuICAgICAgLy8gZml4IHN0YXR1cyBjb2RlIHdoZW4gaXQgaXMgMCAoMCBzdGF0dXMgaXMgdW5kb2N1bWVudGVkKS5cbiAgICAgIC8vIE9jY3VycyB3aGVuIGFjY2Vzc2luZyBmaWxlIHJlc291cmNlcyBvciBvbiBBbmRyb2lkIDQuMSBzdG9jayBicm93c2VyXG4gICAgICAvLyB3aGlsZSByZXRyaWV2aW5nIGZpbGVzIGZyb20gYXBwbGljYXRpb24gY2FjaGUuXG4gICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHN0YXR1cyA9IHJlc3BvbnNlID8gMjAwIDogMDtcbiAgICAgIH1cblxuICAgICAgaWYgKDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDw9IDMwMCkge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChgRmFpbGVkIHRvIGxvYWQgJHt1cmx9YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QoYEZhaWxlZCB0byBsb2FkICR7dXJsfWApO1xuICAgIH07XG5cbiAgICB4aHIuc2VuZCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG59XG4iXX0=