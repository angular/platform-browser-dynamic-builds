import { AppModuleRef, ApplicationRef, Compiler, ComponentRef, Type } from '@angular/core';
import { ConcreteType } from './src/facade/lang';
/**
 * @experimental
 */
export declare const BROWSER_APP_COMPILER_PROVIDERS: Array<any>;
/**
 * @experimental
 */
export declare const CACHED_TEMPLATE_PROVIDER: Array<any>;
/**
 * Creates the runtime compiler for the browser.
 *
 * @stable
 */
export declare function browserCompiler({useDebug, useJit, providers}?: {
    useDebug?: boolean;
    useJit?: boolean;
    providers?: Array<any>;
}): Compiler;
/**
 * Creates an instance of an `@AppModule` for the browser platform.
 *
 * ## Simple Example
 *
 * ```typescript
 * @AppModule({
 *   modules: [BrowserModule]
 * })
 * class MyModule {}
 *
 * let moduleRef = bootstrapModule(MyModule);
 * ```
 * @stable
 */
export declare function bootstrapModule<M>(moduleType: ConcreteType<M>, compiler?: Compiler): Promise<AppModuleRef<M>>;
/**
 * Bootstrapping for Angular applications.
 *
 * You instantiate an Angular application by explicitly specifying a component to use
 * as the root component for your application via the `bootstrap()` method.
 *
 * ## Simple Example
 *
 * Assuming this `index.html`:
 *
 * ```html
 * <html>
 *   <!-- load Angular script tags here. -->
 *   <body>
 *     <my-app>loading...</my-app>
 *   </body>
 * </html>
 * ```
 *
 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
 * mainly for security reasons, as well as architectural changes in Angular 2. This means
 * that `index.html` can safely be processed using server-side technologies such as
 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
 * Angular 2 component double-curly `{{ syntax }}`.
 *
 * We can use this script code:
 *
 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
 *
 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
 * argument, Angular performs the following tasks:
 *
 *  1. It uses the component's `selector` property to locate the DOM element which needs
 *     to be upgraded into the angular component.
 *  2. It creates a new child injector (from the platform injector). Optionally, you can
 *     also override the injector configuration for an app by invoking `bootstrap` with the
 *     `componentInjectableBindings` argument.
 *  3. It creates a new `Zone` and connects it to the angular application's change detection
 *     domain instance.
 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
 *     template into it.
 *  5. It instantiates the specified component.
 *  6. Finally, Angular performs change detection to apply the initial data providers for the
 *     application.
 *
 *
 * ## Bootstrapping Multiple Applications
 *
 * When working within a browser window, there are many singleton resources: cookies, title,
 * location, and others. Angular services that represent these resources must likewise be
 * shared across all Angular applications that occupy the same browser window. For this
 * reason, Angular creates exactly one global platform object which stores all shared
 * services, and each angular application injector has the platform injector as its parent.
 *
 * Each application has its own private injector as well. When there are multiple
 * applications on a page, Angular treats each application injector's services as private
 * to that application.
 *
 * ## API (version 1)
 *
 * - `appComponentType`: The root component which should act as the application. This is
 *   a reference to a `Type` which is annotated with `@Component(...)`.
 * - `customProviders`: An additional set of providers that can be added to the
 *   app injector to override default injection behavior.
 *
 * ## API (version 2)
 * - `appComponentType`: The root component which should act as the application. This is
 *   a reference to a `Type` which is annotated with `@Component(...)`.
 * - `providers`, `directives`, `pipes`, `modules`, `precompile`: Defines the properties
 *   of the dynamically created module that is used to bootstrap the module.
 *
 * Returns a `Promise` of {@link ComponentRef}.
 *
 * @experimental This api cannot be used with the offline compiler and thus is still subject to
 * change.
 */
export declare function bootstrap<C>(appComponentType: ConcreteType<C>, customProviders?: Array<any>): Promise<ComponentRef<C>>;
export declare function bootstrap<C>(appComponentType: ConcreteType<C>, {providers, directives, pipes, modules, precompile, compiler}?: {
    providers?: Array<any>;
    directives?: any[];
    pipes?: any[];
    modules?: any[];
    precompile?: any[];
    compiler?: Compiler;
}): Promise<ComponentRef<C>>;
/**
 * @experimental
 */
export declare function bootstrapWorkerUi(workerScriptUri: string, customProviders?: Array<any>): Promise<ApplicationRef>;
/**
 * @experimental
 */
export declare function bootstrapWorkerApp(appComponentType: Type, customProviders?: Array<any>): Promise<ComponentRef<any>>;
