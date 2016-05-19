import { XHR } from '@angular/compiler';
import { ClientMessageBrokerFactory } from '@angular/platform-browser';
/**
 * Implementation of compiler/xhr that relays XHR requests to the UI side where they are sent
 * and the result is proxied back to the worker.
 *
 * This is only strictly required for Dart where isolates do not have access to the XHRs.
 */
export declare class WebWorkerXHRImpl extends XHR {
    private _messageBroker;
    constructor(messageBrokerFactory: ClientMessageBrokerFactory);
    get(url: string): Promise<string>;
}
