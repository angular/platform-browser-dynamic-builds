"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var messaging_api_1 = require('../shared/messaging_api');
var compiler_1 = require('@angular/compiler');
var lang_1 = require('../../facade/lang');
var MessageBasedXHRImpl = (function () {
    function MessageBasedXHRImpl(_brokerFactory, _xhr) {
        this._brokerFactory = _brokerFactory;
        this._xhr = _xhr;
    }
    MessageBasedXHRImpl.prototype.start = function () {
        var broker = this._brokerFactory.createMessageBroker(messaging_api_1.XHR_CHANNEL);
        broker.registerMethod("get", [platform_browser_1.PRIMITIVE], lang_1.FunctionWrapper.bind(this._xhr.get, this._xhr), platform_browser_1.PRIMITIVE);
    };
    MessageBasedXHRImpl.decorators = [
        { type: core_1.Injectable },
    ];
    MessageBasedXHRImpl.ctorParameters = [
        { type: platform_browser_1.ServiceMessageBrokerFactory, },
        { type: compiler_1.XHR, },
    ];
    return MessageBasedXHRImpl;
}());
exports.MessageBasedXHRImpl = MessageBasedXHRImpl;
//# sourceMappingURL=xhr_impl.js.map