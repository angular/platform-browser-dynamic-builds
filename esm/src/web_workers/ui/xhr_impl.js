import { Injectable } from '@angular/core';
import { PRIMITIVE, ServiceMessageBrokerFactory } from '@angular/platform-browser';
import { XHR_CHANNEL } from '../shared/messaging_api';
import { XHR } from '@angular/compiler';
import { FunctionWrapper } from '../../facade/lang';
export class MessageBasedXHRImpl {
    constructor(_brokerFactory, _xhr) {
        this._brokerFactory = _brokerFactory;
        this._xhr = _xhr;
    }
    start() {
        var broker = this._brokerFactory.createMessageBroker(XHR_CHANNEL);
        broker.registerMethod("get", [PRIMITIVE], FunctionWrapper.bind(this._xhr.get, this._xhr), PRIMITIVE);
    }
}
MessageBasedXHRImpl.decorators = [
    { type: Injectable },
];
MessageBasedXHRImpl.ctorParameters = [
    { type: ServiceMessageBrokerFactory, },
    { type: XHR, },
];
//# sourceMappingURL=xhr_impl.js.map