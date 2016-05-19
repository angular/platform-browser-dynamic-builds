"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var compiler_1 = require('@angular/compiler');
var platform_browser_1 = require('@angular/platform-browser');
var messaging_api_1 = require('../shared/messaging_api');
var WebWorkerXHRImpl = (function (_super) {
    __extends(WebWorkerXHRImpl, _super);
    function WebWorkerXHRImpl(messageBrokerFactory) {
        _super.call(this);
        this._messageBroker = messageBrokerFactory.createMessageBroker(messaging_api_1.XHR_CHANNEL);
    }
    WebWorkerXHRImpl.prototype.get = function (url) {
        var fnArgs = [new platform_browser_1.FnArg(url, null)];
        var args = new platform_browser_1.UiArguments("get", fnArgs);
        return this._messageBroker.runOnService(args, String);
    };
    WebWorkerXHRImpl.decorators = [
        { type: core_1.Injectable },
    ];
    WebWorkerXHRImpl.ctorParameters = [
        { type: platform_browser_1.ClientMessageBrokerFactory, },
    ];
    return WebWorkerXHRImpl;
}(compiler_1.XHR));
exports.WebWorkerXHRImpl = WebWorkerXHRImpl;
//# sourceMappingURL=xhr_impl.js.map