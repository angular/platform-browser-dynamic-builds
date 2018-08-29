import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';
let ResourceLoaderImpl = class ResourceLoaderImpl extends ResourceLoader {
    get(url) {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            // responseText is the old-school way of retrieving response (supported by IE8 & 9)
            // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
            // by IE10)
            const response = xhr.response || xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
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
        };
        xhr.onerror = function () { reject(`Failed to load ${url}`); };
        xhr.send();
        return promise;
    }
};
ResourceLoaderImpl = tslib_1.__decorate([
    Injectable()
], ResourceLoaderImpl);
export { ResourceLoaderImpl };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvc3JjL3Jlc291cmNlX2xvYWRlci9yZXNvdXJjZV9sb2FkZXJfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxjQUFjO0lBQ3BELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsSUFBSSxPQUE4QixDQUFDO1FBQ25DLElBQUksTUFBNEIsQ0FBQztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2QsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFFMUIsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUNYLG1GQUFtRjtZQUNuRiw0RkFBNEY7WUFDNUYsV0FBVztZQUNYLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztZQUVsRCx5REFBeUQ7WUFDekQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUVwRCwyREFBMkQ7WUFDM0QsdUVBQXVFO1lBQ3ZFLGlEQUFpRDtZQUNqRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsT0FBTyxHQUFHLGNBQWEsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFBO0FBeENZLGtCQUFrQjtJQUQ5QixVQUFVLEVBQUU7R0FDQSxrQkFBa0IsQ0F3QzlCO1NBeENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7UmVzb3VyY2VMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc291cmNlTG9hZGVySW1wbCBleHRlbmRzIFJlc291cmNlTG9hZGVyIHtcbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBsZXQgcmVzb2x2ZTogKHJlc3VsdDogYW55KSA9PiB2b2lkO1xuICAgIGxldCByZWplY3Q6IChlcnJvcjogYW55KSA9PiB2b2lkO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXMsIHJlaikgPT4ge1xuICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gcmVzcG9uc2VUZXh0IGlzIHRoZSBvbGQtc2Nob29sIHdheSBvZiByZXRyaWV2aW5nIHJlc3BvbnNlIChzdXBwb3J0ZWQgYnkgSUU4ICYgOSlcbiAgICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBSZXNvdXJjZUxvYWRlciBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkXG4gICAgICAvLyBieSBJRTEwKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXG4gICAgICBsZXQgc3RhdHVzID0geGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXM7XG5cbiAgICAgIC8vIGZpeCBzdGF0dXMgY29kZSB3aGVuIGl0IGlzIDAgKDAgc3RhdHVzIGlzIHVuZG9jdW1lbnRlZCkuXG4gICAgICAvLyBPY2N1cnMgd2hlbiBhY2Nlc3NpbmcgZmlsZSByZXNvdXJjZXMgb3Igb24gQW5kcm9pZCA0LjEgc3RvY2sgYnJvd3NlclxuICAgICAgLy8gd2hpbGUgcmV0cmlldmluZyBmaWxlcyBmcm9tIGFwcGxpY2F0aW9uIGNhY2hlLlxuICAgICAgaWYgKHN0YXR1cyA9PT0gMCkge1xuICAgICAgICBzdGF0dXMgPSByZXNwb25zZSA/IDIwMCA6IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICgyMDAgPD0gc3RhdHVzICYmIHN0YXR1cyA8PSAzMDApIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoYEZhaWxlZCB0byBsb2FkICR7dXJsfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkgeyByZWplY3QoYEZhaWxlZCB0byBsb2FkICR7dXJsfWApOyB9O1xuXG4gICAgeGhyLnNlbmQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxufVxuIl19