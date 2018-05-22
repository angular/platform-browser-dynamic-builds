/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵstringify as stringify } from '@angular/core';
var _nextReferenceId = 0;
var MetadataOverrider = /** @class */ (function () {
    function MetadataOverrider() {
        this._references = new Map();
    }
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     */
    /**
       * Creates a new instance for the given metadata class
       * based on an old instance and overrides.
       */
    MetadataOverrider.prototype.overrideMetadata = /**
       * Creates a new instance for the given metadata class
       * based on an old instance and overrides.
       */
    function (metadataClass, oldMetadata, override) {
        var props = {};
        if (oldMetadata) {
            _valueProps(oldMetadata).forEach(function (prop) { return props[prop] = oldMetadata[prop]; });
        }
        if (override.set) {
            if (override.remove || override.add) {
                throw new Error("Cannot set and add/remove " + stringify(metadataClass) + " at the same time!");
            }
            setMetadata(props, override.set);
        }
        if (override.remove) {
            removeMetadata(props, override.remove, this._references);
        }
        if (override.add) {
            addMetadata(props, override.add);
        }
        return new metadataClass(props);
    };
    return MetadataOverrider;
}());
export { MetadataOverrider };
function removeMetadata(metadata, remove, references) {
    var removeObjects = new Set();
    var _loop_1 = function (prop) {
        var removeValue = remove[prop];
        if (removeValue instanceof Array) {
            removeValue.forEach(function (value) { removeObjects.add(_propHashKey(prop, value, references)); });
        }
        else {
            removeObjects.add(_propHashKey(prop, removeValue, references));
        }
    };
    for (var prop in remove) {
        _loop_1(prop);
    }
    var _loop_2 = function (prop) {
        var propValue = metadata[prop];
        if (propValue instanceof Array) {
            metadata[prop] = propValue.filter(function (value) { return !removeObjects.has(_propHashKey(prop, value, references)); });
        }
        else {
            if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                metadata[prop] = undefined;
            }
        }
    };
    for (var prop in metadata) {
        _loop_2(prop);
    }
}
function addMetadata(metadata, add) {
    for (var prop in add) {
        var addValue = add[prop];
        var propValue = metadata[prop];
        if (propValue != null && propValue instanceof Array) {
            metadata[prop] = propValue.concat(addValue);
        }
        else {
            metadata[prop] = addValue;
        }
    }
}
function setMetadata(metadata, set) {
    for (var prop in set) {
        metadata[prop] = set[prop];
    }
}
function _propHashKey(propName, propValue, references) {
    var replacer = function (key, value) {
        if (typeof value === 'function') {
            value = _serializeReference(value, references);
        }
        return value;
    };
    return propName + ":" + JSON.stringify(propValue, replacer);
}
function _serializeReference(ref, references) {
    var id = references.get(ref);
    if (!id) {
        id = "" + stringify(ref) + _nextReferenceId++;
        references.set(ref, id);
    }
    return id;
}
function _valueProps(obj) {
    var props = [];
    // regular public props
    Object.keys(obj).forEach(function (prop) {
        if (!prop.startsWith('_')) {
            props.push(prop);
        }
    });
    // getters
    var proto = obj;
    while (proto = Object.getPrototypeOf(proto)) {
        Object.keys(proto).forEach(function (protoProp) {
            var desc = Object.getOwnPropertyDescriptor(proto, protoProp);
            if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                props.push(protoProp);
            }
        });
    }
    return props;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfb3ZlcnJpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3Rpbmcvc3JjL21ldGFkYXRhX292ZXJyaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPdEQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFekIsSUFBQTs7MkJBQ3dCLElBQUksR0FBRyxFQUFlOztJQUM1Qzs7O09BR0c7Ozs7O0lBQ0gsNENBQWdCOzs7O0lBQWhCLFVBQ0ksYUFBcUMsRUFBRSxXQUFjLEVBQUUsUUFBNkI7UUFDdEYsSUFBTSxLQUFLLEdBQWMsRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBUyxXQUFZLENBQUMsSUFBSSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztTQUNwRjtRQUVELElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNoQixJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBNkIsU0FBUyxDQUFDLGFBQWEsQ0FBQyx1QkFBb0IsQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRDtR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cHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtXN0cmluZ2lmeSBhcyBzdHJpbmdpZnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG50eXBlIFN0cmluZ01hcCA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgX25leHRSZWZlcmVuY2VJZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YU92ZXJyaWRlciB7XG4gIHByaXZhdGUgX3JlZmVyZW5jZXMgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIG1ldGFkYXRhIGNsYXNzXG4gICAqIGJhc2VkIG9uIGFuIG9sZCBpbnN0YW5jZSBhbmQgb3ZlcnJpZGVzLlxuICAgKi9cbiAgb3ZlcnJpZGVNZXRhZGF0YTxDIGV4dGVuZHMgVCwgVD4oXG4gICAgICBtZXRhZGF0YUNsYXNzOiB7bmV3IChvcHRpb25zOiBUKTogQzt9LCBvbGRNZXRhZGF0YTogQywgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8VD4pOiBDIHtcbiAgICBjb25zdCBwcm9wczogU3RyaW5nTWFwID0ge307XG4gICAgaWYgKG9sZE1ldGFkYXRhKSB7XG4gICAgICBfdmFsdWVQcm9wcyhvbGRNZXRhZGF0YSkuZm9yRWFjaCgocHJvcCkgPT4gcHJvcHNbcHJvcF0gPSAoPGFueT5vbGRNZXRhZGF0YSlbcHJvcF0pO1xuICAgIH1cblxuICAgIGlmIChvdmVycmlkZS5zZXQpIHtcbiAgICAgIGlmIChvdmVycmlkZS5yZW1vdmUgfHwgb3ZlcnJpZGUuYWRkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNldCBhbmQgYWRkL3JlbW92ZSAke3N0cmluZ2lmeShtZXRhZGF0YUNsYXNzKX0gYXQgdGhlIHNhbWUgdGltZSFgKTtcbiAgICAgIH1cbiAgICAgIHNldE1ldGFkYXRhKHByb3BzLCBvdmVycmlkZS5zZXQpO1xuICAgIH1cbiAgICBpZiAob3ZlcnJpZGUucmVtb3ZlKSB7XG4gICAgICByZW1vdmVNZXRhZGF0YShwcm9wcywgb3ZlcnJpZGUucmVtb3ZlLCB0aGlzLl9yZWZlcmVuY2VzKTtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLmFkZCkge1xuICAgICAgYWRkTWV0YWRhdGEocHJvcHMsIG92ZXJyaWRlLmFkZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbWV0YWRhdGFDbGFzcyg8YW55PnByb3BzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCByZW1vdmU6IGFueSwgcmVmZXJlbmNlczogTWFwPGFueSwgc3RyaW5nPikge1xuICBjb25zdCByZW1vdmVPYmplY3RzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgcHJvcCBpbiByZW1vdmUpIHtcbiAgICBjb25zdCByZW1vdmVWYWx1ZSA9IHJlbW92ZVtwcm9wXTtcbiAgICBpZiAocmVtb3ZlVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmVtb3ZlVmFsdWUuZm9yRWFjaChcbiAgICAgICAgICAodmFsdWU6IGFueSkgPT4geyByZW1vdmVPYmplY3RzLmFkZChfcHJvcEhhc2hLZXkocHJvcCwgdmFsdWUsIHJlZmVyZW5jZXMpKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU9iamVjdHMuYWRkKF9wcm9wSGFzaEtleShwcm9wLCByZW1vdmVWYWx1ZSwgcmVmZXJlbmNlcykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBtZXRhZGF0YSkge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IG1ldGFkYXRhW3Byb3BdO1xuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbWV0YWRhdGFbcHJvcF0gPSBwcm9wVmFsdWUuZmlsdGVyKFxuICAgICAgICAgICh2YWx1ZTogYW55KSA9PiAhcmVtb3ZlT2JqZWN0cy5oYXMoX3Byb3BIYXNoS2V5KHByb3AsIHZhbHVlLCByZWZlcmVuY2VzKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVtb3ZlT2JqZWN0cy5oYXMoX3Byb3BIYXNoS2V5KHByb3AsIHByb3BWYWx1ZSwgcmVmZXJlbmNlcykpKSB7XG4gICAgICAgIG1ldGFkYXRhW3Byb3BdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCBhZGQ6IGFueSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gYWRkKSB7XG4gICAgY29uc3QgYWRkVmFsdWUgPSBhZGRbcHJvcF07XG4gICAgY29uc3QgcHJvcFZhbHVlID0gbWV0YWRhdGFbcHJvcF07XG4gICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IHByb3BWYWx1ZS5jb25jYXQoYWRkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhZGF0YVtwcm9wXSA9IGFkZFZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRNZXRhZGF0YShtZXRhZGF0YTogU3RyaW5nTWFwLCBzZXQ6IGFueSkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gc2V0KSB7XG4gICAgbWV0YWRhdGFbcHJvcF0gPSBzZXRbcHJvcF07XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Byb3BIYXNoS2V5KHByb3BOYW1lOiBhbnksIHByb3BWYWx1ZTogYW55LCByZWZlcmVuY2VzOiBNYXA8YW55LCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgY29uc3QgcmVwbGFjZXIgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IF9zZXJpYWxpemVSZWZlcmVuY2UodmFsdWUsIHJlZmVyZW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIGAke3Byb3BOYW1lfToke0pTT04uc3RyaW5naWZ5KHByb3BWYWx1ZSwgcmVwbGFjZXIpfWA7XG59XG5cbmZ1bmN0aW9uIF9zZXJpYWxpemVSZWZlcmVuY2UocmVmOiBhbnksIHJlZmVyZW5jZXM6IE1hcDxhbnksIHN0cmluZz4pOiBzdHJpbmcge1xuICBsZXQgaWQgPSByZWZlcmVuY2VzLmdldChyZWYpO1xuICBpZiAoIWlkKSB7XG4gICAgaWQgPSBgJHtzdHJpbmdpZnkocmVmKX0ke19uZXh0UmVmZXJlbmNlSWQrK31gO1xuICAgIHJlZmVyZW5jZXMuc2V0KHJlZiwgaWQpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuXG5mdW5jdGlvbiBfdmFsdWVQcm9wcyhvYmo6IGFueSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gIC8vIHJlZ3VsYXIgcHVibGljIHByb3BzXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGlmICghcHJvcC5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBnZXR0ZXJzXG4gIGxldCBwcm90byA9IG9iajtcbiAgd2hpbGUgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSkge1xuICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKChwcm90b1Byb3ApID0+IHtcbiAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm90b1Byb3ApO1xuICAgICAgaWYgKCFwcm90b1Byb3Auc3RhcnRzV2l0aCgnXycpICYmIGRlc2MgJiYgJ2dldCcgaW4gZGVzYykge1xuICAgICAgICBwcm9wcy5wdXNoKHByb3RvUHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19