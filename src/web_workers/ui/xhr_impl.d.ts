import { ServiceMessageBrokerFactory } from '@angular/platform-browser';
import { XHR } from '@angular/compiler';
/**
 * XHR requests triggered on the worker side are executed on the UI side.
 *
 * This is only strictly required for Dart where the isolates do not have access to XHRs.
 *
 * @internal
 */
export declare class MessageBasedXHRImpl {
    private _brokerFactory;
    private _xhr;
    constructor(_brokerFactory: ServiceMessageBrokerFactory, _xhr: XHR);
    start(): void;
}
