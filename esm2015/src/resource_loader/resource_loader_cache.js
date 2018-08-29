/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResourceLoader } from '@angular/compiler';
import { ɵglobal as global } from '@angular/core';
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 */
export class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = global.$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return Promise.reject('CachedResourceLoader: Did not find cached template for ' + url);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGVyX2NhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9yZXNvdXJjZV9sb2FkZXIvcmVzb3VyY2VfbG9hZGVyX2NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQUd0RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBUyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFxQixPQUFPLENBQUMsTUFBTSxDQUMvQix5REFBeUQsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSZXNvdXJjZUxvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHvJtWdsb2JhbCBhcyBnbG9iYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIFJlc291cmNlTG9hZGVyIHRoYXQgdXNlcyBhIHRlbXBsYXRlIGNhY2hlIHRvIGF2b2lkIGRvaW5nIGFuIGFjdHVhbFxuICogUmVzb3VyY2VMb2FkZXIuXG4gKlxuICogVGhlIHRlbXBsYXRlIGNhY2hlIG5lZWRzIHRvIGJlIGJ1aWx0IGFuZCBsb2FkZWQgaW50byB3aW5kb3cuJHRlbXBsYXRlQ2FjaGVcbiAqIHZpYSBhIHNlcGFyYXRlIG1lY2hhbmlzbS5cbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlZFJlc291cmNlTG9hZGVyIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xuICBwcml2YXRlIF9jYWNoZToge1t1cmw6IHN0cmluZ106IHN0cmluZ307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jYWNoZSA9ICg8YW55Pmdsb2JhbCkuJHRlbXBsYXRlQ2FjaGU7XG4gICAgaWYgKHRoaXMuX2NhY2hlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FjaGVkUmVzb3VyY2VMb2FkZXI6IFRlbXBsYXRlIGNhY2hlIHdhcyBub3QgZm91bmQgaW4gJHRlbXBsYXRlQ2FjaGUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5fY2FjaGUuaGFzT3duUHJvcGVydHkodXJsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9jYWNoZVt1cmxdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxQcm9taXNlPGFueT4+UHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgJ0NhY2hlZFJlc291cmNlTG9hZGVyOiBEaWQgbm90IGZpbmQgY2FjaGVkIHRlbXBsYXRlIGZvciAnICsgdXJsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==