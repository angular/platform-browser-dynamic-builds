/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler, Inject, InjectionToken, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, isDevMode, ɵConsole as Console, ViewEncapsulation, Injector, TRANSLATIONS_FORMAT, MissingTranslationStrategy, } from '@angular/core';
import { StaticSymbolCache, JitCompiler, ProviderMeta, I18NHtmlParser, ViewCompiler, CompileMetadataResolver, UrlResolver, TemplateParser, NgModuleCompiler, JitSummaryResolver, SummaryResolver, StyleCompiler, PipeResolver, ElementSchemaRegistry, DomElementSchemaRegistry, ResourceLoader, NgModuleResolver, HtmlParser, CompileReflector, CompilerConfig, DirectiveNormalizer, DirectiveResolver, Lexer, Parser } from '@angular/compiler';
import { JitReflector } from './compiler_reflector';
export var /** @type {?} */ ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {\@link PACKAGE_ROOT_URL} that maps to '/'.
 */
export var /** @type {?} */ DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
var /** @type {?} */ _NO_RESOURCE_LOADER = {
    get: /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        throw new Error("No ResourceLoader implementation has been provided. Can't read the url \"" + url + "\"");
    }
};
var /** @type {?} */ baseHtmlParser = new InjectionToken('HtmlParser');
var CompilerImpl = /** @class */ (function () {
    function CompilerImpl(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    CompilerImpl.prototype.getExtraNgModuleProviders = /**
     * @return {?}
     */
    function () {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    CompilerImpl.prototype.compileModuleSync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return /** @type {?} */ (this._delegate.compileModuleSync(moduleType));
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    CompilerImpl.prototype.compileModuleAsync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return /** @type {?} */ (this._delegate.compileModuleAsync(moduleType));
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    CompilerImpl.prototype.compileModuleAndAllComponentsSync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        var /** @type {?} */ result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: /** @type {?} */ (result.ngModuleFactory),
            componentFactories: /** @type {?} */ (result.componentFactories),
        };
    };
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    CompilerImpl.prototype.compileModuleAndAllComponentsAsync = /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    function (moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then(function (result) {
            return ({
                ngModuleFactory: /** @type {?} */ (result.ngModuleFactory),
                componentFactories: /** @type {?} */ (result.componentFactories),
            });
        });
    };
    /**
     * @param {?} summaries
     * @return {?}
     */
    CompilerImpl.prototype.loadAotSummaries = /**
     * @param {?} summaries
     * @return {?}
     */
    function (summaries) { this._delegate.loadAotSummaries(summaries); };
    /**
     * @param {?} ref
     * @return {?}
     */
    CompilerImpl.prototype.hasAotSummary = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) { return this._delegate.hasAotSummary(ref); };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    CompilerImpl.prototype.getComponentFactory = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return /** @type {?} */ (this._delegate.getComponentFactory(component));
    };
    /**
     * @return {?}
     */
    CompilerImpl.prototype.clearCache = /**
     * @return {?}
     */
    function () { this._delegate.clearCache(); };
    /**
     * @param {?} type
     * @return {?}
     */
    CompilerImpl.prototype.clearCacheFor = /**
     * @param {?} type
     * @return {?}
     */
    function (type) { this._delegate.clearCacheFor(type); };
    return CompilerImpl;
}());
export { CompilerImpl };
function CompilerImpl_tsickle_Closure_declarations() {
    /** @type {?} */
    CompilerImpl.prototype._delegate;
    /** @type {?} */
    CompilerImpl.prototype.injector;
    /** @type {?} */
    CompilerImpl.prototype._metadataResolver;
}
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 */
export var /** @type {?} */ COMPILER_PROVIDERS = /** @type {?} */ ([
    { provide: CompileReflector, useValue: new JitReflector() },
    { provide: ResourceLoader, useValue: _NO_RESOURCE_LOADER },
    { provide: JitSummaryResolver, deps: [] },
    { provide: SummaryResolver, useExisting: JitSummaryResolver },
    { provide: Console, deps: [] },
    { provide: Lexer, deps: [] },
    { provide: Parser, deps: [Lexer] },
    {
        provide: baseHtmlParser,
        useClass: HtmlParser,
        deps: [],
    },
    {
        provide: I18NHtmlParser,
        useFactory: function (parser, translations, format, config, console) {
            translations = translations || '';
            var /** @type {?} */ missingTranslation = translations ? /** @type {?} */ ((config.missingTranslation)) : MissingTranslationStrategy.Ignore;
            return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
        },
        deps: [
            baseHtmlParser,
            [new Optional(), new Inject(TRANSLATIONS)],
            [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
            [CompilerConfig],
            [Console],
        ]
    },
    {
        provide: HtmlParser,
        useExisting: I18NHtmlParser,
    },
    {
        provide: TemplateParser, deps: [CompilerConfig, CompileReflector,
            Parser, ElementSchemaRegistry,
            I18NHtmlParser, Console]
    },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    { provide: CompileMetadataResolver, deps: [CompilerConfig, HtmlParser, NgModuleResolver,
            DirectiveResolver, PipeResolver,
            SummaryResolver,
            ElementSchemaRegistry,
            DirectiveNormalizer, Console,
            [Optional, StaticSymbolCache],
            CompileReflector,
            [Optional, ERROR_COLLECTOR_TOKEN]] },
    DEFAULT_PACKAGE_URL_PROVIDER,
    { provide: StyleCompiler, deps: [UrlResolver] },
    { provide: ViewCompiler, deps: [CompileReflector] },
    { provide: NgModuleCompiler, deps: [CompileReflector] },
    { provide: CompilerConfig, useValue: new CompilerConfig() },
    { provide: Compiler, useClass: CompilerImpl, deps: [Injector, CompileMetadataResolver,
            TemplateParser, StyleCompiler,
            ViewCompiler, NgModuleCompiler,
            SummaryResolver, CompileReflector, CompilerConfig,
            Console] },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]);
/**
 * \@experimental
 */
var /**
 * \@experimental
 */
JitCompilerFactory = /** @class */ (function () {
    /* @internal */
    function JitCompilerFactory(defaultOptions) {
        var /** @type {?} */ compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = [compilerOptions].concat(defaultOptions);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    JitCompilerFactory.prototype.createCompiler = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = []; }
        var /** @type {?} */ opts = _mergeOptions(this._defaultOptions.concat(options));
        var /** @type {?} */ injector = Injector.create([
            COMPILER_PROVIDERS, {
                provide: CompilerConfig,
                useFactory: function () {
                    return new CompilerConfig({
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        useJit: opts.useJit,
                        jitDevMode: isDevMode(),
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        defaultEncapsulation: opts.defaultEncapsulation,
                        missingTranslation: opts.missingTranslation,
                        preserveWhitespaces: opts.preserveWhitespaces,
                    });
                },
                deps: []
            },
            /** @type {?} */ ((opts.providers))
        ]);
        return injector.get(Compiler);
    };
    return JitCompilerFactory;
}());
/**
 * \@experimental
 */
export { JitCompilerFactory };
function JitCompilerFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    JitCompilerFactory.prototype._defaultOptions;
}
/**
 * @param {?} optionsArr
 * @return {?}
 */
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map(function (options) { return options.useJit; })),
        defaultEncapsulation: _lastDefined(optionsArr.map(function (options) { return options.defaultEncapsulation; })),
        providers: _mergeArrays(optionsArr.map(function (options) { return ((options.providers)); })),
        missingTranslation: _lastDefined(optionsArr.map(function (options) { return options.missingTranslation; })),
        preserveWhitespaces: _lastDefined(optionsArr.map(function (options) { return options.preserveWhitespaces; })),
    };
}
/**
 * @template T
 * @param {?} args
 * @return {?}
 */
function _lastDefined(args) {
    for (var /** @type {?} */ i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
/**
 * @param {?} parts
 * @return {?}
 */
function _mergeArrays(parts) {
    var /** @type {?} */ result = [];
    parts.forEach(function (part) { return part && result.push.apply(result, part); });
    return result;
}
//# sourceMappingURL=compiler_factory.js.map