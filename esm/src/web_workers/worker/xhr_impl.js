import { Injectable } from '@angular/core';
import { XHR } from '@angular/compiler';
import { FnArg, UiArguments, ClientMessageBrokerFactory } from '@angular/platform-browser';
import { XHR_CHANNEL } from '../shared/messaging_api';
export class WebWorkerXHRImpl extends XHR {
    constructor(messageBrokerFactory) {
        super();
        this._messageBroker = messageBrokerFactory.createMessageBroker(XHR_CHANNEL);
    }
    get(url) {
        var fnArgs = [new FnArg(url, null)];
        var args = new UiArguments("get", fnArgs);
        return this._messageBroker.runOnService(args, String);
    }
}
WebWorkerXHRImpl.decorators = [
    { type: Injectable },
];
WebWorkerXHRImpl.ctorParameters = [
    { type: ClientMessageBrokerFactory, },
];
//# sourceMappingURL=xhr_impl.js.map