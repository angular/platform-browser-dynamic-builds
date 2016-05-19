import { DirectiveResolver, ViewResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockViewResolver, TestComponentRenderer, TestComponentBuilder } from '@angular/compiler/testing';
import { DOMTestComponentRenderer } from './dom_test_component_renderer';
/**
 * Default platform providers for testing.
 */
export declare const TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: Array<any>;
export declare const ADDITIONAL_DYNAMIC_TEST_BROWSER_PROVIDERS: ({
    provide: typeof DirectiveResolver;
    useClass: typeof MockDirectiveResolver;
} | {
    provide: typeof ViewResolver;
    useClass: typeof MockViewResolver;
} | typeof TestComponentBuilder | {
    provide: typeof TestComponentRenderer;
    useClass: typeof DOMTestComponentRenderer;
})[];
/**
 * Default application providers for testing.
 */
export declare const TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS: Array<any>;
