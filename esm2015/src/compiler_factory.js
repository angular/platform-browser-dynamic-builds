/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/src/compiler_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileMetadataResolver, CompilerConfig, CompileReflector, DirectiveNormalizer, DirectiveResolver, DomElementSchemaRegistry, ElementSchemaRegistry, HtmlParser, I18NHtmlParser, JitCompiler, JitEvaluator, JitSummaryResolver, Lexer, NgModuleCompiler, NgModuleResolver, Parser, PipeResolver, ProviderMeta, ResourceLoader, StaticSymbolCache, StyleCompiler, SummaryResolver, TemplateParser, UrlResolver, ViewCompiler } from '@angular/compiler';
import { Compiler, Inject, InjectionToken, Injector, isDevMode, MissingTranslationStrategy, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, TRANSLATIONS_FORMAT, ViewEncapsulation, ɵConsole as Console } from '@angular/core';
import { JitReflector } from './compiler_reflector';
/** @type {?} */
export const ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {\@link PACKAGE_ROOT_URL} that maps to '/'.
 * @type {?}
 */
export const DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
/** @type {?} */
const _NO_RESOURCE_LOADER = {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        throw new Error(`No ResourceLoader implementation has been provided. Can't read the url "${url}"`);
    }
};
/** @type {?} */
const baseHtmlParser = new InjectionToken('HtmlParser');
export class CompilerImpl {
    /**
     * @param {?} injector
     * @param {?} _metadataResolver
     * @param {?} templateParser
     * @param {?} styleCompiler
     * @param {?} viewCompiler
     * @param {?} ngModuleCompiler
     * @param {?} summaryResolver
     * @param {?} compileReflector
     * @param {?} jitEvaluator
     * @param {?} compilerConfig
     * @param {?} console
     */
    constructor(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    getExtraNgModuleProviders() {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return (/** @type {?} */ (this._delegate.compileModuleSync(moduleType)));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return (/** @type {?} */ (this._delegate.compileModuleAsync(moduleType)));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        /** @type {?} */
        const result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: (/** @type {?} */ (result.ngModuleFactory)),
            componentFactories: (/** @type {?} */ (result.componentFactories)),
        };
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then((/**
         * @param {?} result
         * @return {?}
         */
        (result) => ({
            ngModuleFactory: (/** @type {?} */ (result.ngModuleFactory)),
            componentFactories: (/** @type {?} */ (result.componentFactories)),
        })));
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) {
        this._delegate.loadAotSummaries(summaries);
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    hasAotSummary(ref) {
        return this._delegate.hasAotSummary(ref);
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return (/** @type {?} */ (this._delegate.getComponentFactory(component)));
    }
    /**
     * @return {?}
     */
    clearCache() {
        this._delegate.clearCache();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) {
        this._delegate.clearCacheFor(type);
    }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        /** @type {?} */
        const meta = this._metadataResolver.getNgModuleMetadata(moduleType);
        return meta && meta.id || undefined;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompilerImpl.prototype._delegate;
    /** @type {?} */
    CompilerImpl.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CompilerImpl.prototype._metadataResolver;
}
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 * @type {?}
 */
const COMPILER_PROVIDERS__PRE_R3__ = (/** @type {?} */ ([
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
        useFactory: (/**
         * @param {?} parser
         * @param {?} translations
         * @param {?} format
         * @param {?} config
         * @param {?} console
         * @return {?}
         */
        (parser, translations, format, config, console) => {
            translations = translations || '';
            /** @type {?} */
            const missingTranslation = translations ? (/** @type {?} */ (config.missingTranslation)) : MissingTranslationStrategy.Ignore;
            return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
        }),
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
        provide: TemplateParser,
        deps: [CompilerConfig, CompileReflector, Parser, ElementSchemaRegistry, I18NHtmlParser, Console]
    },
    { provide: JitEvaluator, useClass: JitEvaluator, deps: [] },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    {
        provide: CompileMetadataResolver,
        deps: [
            CompilerConfig, HtmlParser, NgModuleResolver, DirectiveResolver, PipeResolver,
            SummaryResolver, ElementSchemaRegistry, DirectiveNormalizer, Console,
            [Optional, StaticSymbolCache], CompileReflector, [Optional, ERROR_COLLECTOR_TOKEN]
        ]
    },
    DEFAULT_PACKAGE_URL_PROVIDER,
    { provide: StyleCompiler, deps: [UrlResolver] },
    { provide: ViewCompiler, deps: [CompileReflector] },
    { provide: NgModuleCompiler, deps: [CompileReflector] },
    { provide: CompilerConfig, useValue: new CompilerConfig() },
    {
        provide: Compiler,
        useClass: CompilerImpl,
        deps: [
            Injector, CompileMetadataResolver, TemplateParser, StyleCompiler, ViewCompiler,
            NgModuleCompiler, SummaryResolver, CompileReflector, JitEvaluator, CompilerConfig, Console
        ]
    },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]));
/** @type {?} */
export const COMPILER_PROVIDERS__POST_R3__ = (/** @type {?} */ ([{ provide: Compiler, useFactory: (/**
         * @return {?}
         */
        () => new Compiler()) }]));
/** @type {?} */
export const COMPILER_PROVIDERS = COMPILER_PROVIDERS__POST_R3__;
/**
 * \@publicApi
 */
export class JitCompilerFactory {
    /* @internal */
    /**
     * @param {?} defaultOptions
     */
    constructor(defaultOptions) {
        /** @type {?} */
        const compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = [compilerOptions, ...defaultOptions];
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createCompiler(options = []) {
        /** @type {?} */
        const opts = _mergeOptions(this._defaultOptions.concat(options));
        /** @type {?} */
        const injector = Injector.create([
            COMPILER_PROVIDERS,
            {
                provide: CompilerConfig,
                useFactory: (/**
                 * @return {?}
                 */
                () => {
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
                }),
                deps: []
            },
            (/** @type {?} */ (opts.providers))
        ]);
        return injector.get(Compiler);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    JitCompilerFactory.prototype._defaultOptions;
}
/**
 * @param {?} optionsArr
 * @return {?}
 */
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.useJit))),
        defaultEncapsulation: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.defaultEncapsulation))),
        providers: _mergeArrays(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => (/** @type {?} */ (options.providers))))),
        missingTranslation: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.missingTranslation))),
        preserveWhitespaces: _lastDefined(optionsArr.map((/**
         * @param {?} options
         * @return {?}
         */
        options => options.preserveWhitespaces))),
    };
}
/**
 * @template T
 * @param {?} args
 * @return {?}
 */
function _lastDefined(args) {
    for (let i = args.length - 1; i >= 0; i--) {
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
    /** @type {?} */
    const result = [];
    parts.forEach((/**
     * @param {?} part
     * @return {?}
     */
    (part) => part && result.push(...part)));
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9zcmMvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3YixPQUFPLEVBQUMsUUFBUSxFQUFzRCxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQWlELFFBQVEsRUFBRSxnQkFBZ0IsRUFBa0IsWUFBWSxFQUFFLG1CQUFtQixFQUFRLGlCQUFpQixFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaFYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUVsRCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUM7Ozs7O0FBS3pFLE1BQU0sT0FBTyw0QkFBNEIsR0FBRztJQUMxQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O01BRUssbUJBQW1CLEdBQW1COzs7OztJQUMxQyxHQUFHLENBQUMsR0FBVztRQUNiLE1BQU0sSUFBSSxLQUFLLENBQ1gsMkVBQTJFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGOztNQUVLLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFFdkQsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0lBR3ZCLFlBQ0ksUUFBa0IsRUFBVSxpQkFBMEMsRUFDdEUsY0FBOEIsRUFBRSxhQUE0QixFQUFFLFlBQTBCLEVBQ3hGLGdCQUFrQyxFQUFFLGVBQTJDLEVBQy9FLGdCQUFrQyxFQUFFLFlBQTBCLEVBQzlELGNBQThCLEVBQUUsT0FBZ0I7UUFKcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUt4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxDQUM1QixpQkFBaUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDaEYsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUN4RSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyx5QkFBeUI7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FDOUMsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFJLFVBQW1CO1FBQ3RDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBc0IsQ0FBQztJQUM1RSxDQUFDOzs7Ozs7SUFDRCxrQkFBa0IsQ0FBSSxVQUFtQjtRQUN2QyxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQStCLENBQUM7SUFDdEYsQ0FBQzs7Ozs7O0lBQ0QsaUNBQWlDLENBQUksVUFBbUI7O2NBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztRQUMzRSxPQUFPO1lBQ0wsZUFBZSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxlQUFlLEVBQXNCO1lBQzdELGtCQUFrQixFQUFFLG1CQUFBLE1BQU0sQ0FBQyxrQkFBa0IsRUFBMkI7U0FDekUsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUNELGtDQUFrQyxDQUFJLFVBQW1CO1FBRXZELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUM7YUFDL0QsSUFBSTs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsZUFBZSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxlQUFlLEVBQXNCO1lBQzdELGtCQUFrQixFQUFFLG1CQUFBLE1BQU0sQ0FBQyxrQkFBa0IsRUFBMkI7U0FDekUsQ0FBQyxFQUFDLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBQyxTQUFzQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLEdBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFDRCxtQkFBbUIsQ0FBSSxTQUFrQjtRQUN2QyxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQXVCLENBQUM7SUFDOUUsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLElBQWU7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsVUFBcUI7O2NBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1FBQ25FLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjs7Ozs7O0lBNURDLGlDQUErQjs7SUFDL0IsZ0NBQW1DOzs7OztJQUVYLHlDQUFrRDs7Ozs7OztNQThEdEUsNEJBQTRCLEdBQUcsbUJBQWtCO0lBQ3JELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLFlBQVksRUFBRSxFQUFDO0lBQ3pELEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7SUFDeEQsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztJQUN2QyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFDO0lBQzNELEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0lBQzVCLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0lBQzFCLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztJQUNoQztRQUNFLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRDtRQUNFLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFVBQVU7Ozs7Ozs7O1FBQ04sQ0FBQyxNQUFrQixFQUFFLFlBQXlCLEVBQUUsTUFBYyxFQUFFLE1BQXNCLEVBQ3JGLE9BQWdCLEVBQUUsRUFBRTtZQUNuQixZQUFZLEdBQUcsWUFBWSxJQUFJLEVBQUUsQ0FBQzs7a0JBQzVCLGtCQUFrQixHQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNO1lBQ2pGLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFBO1FBQ0wsSUFBSSxFQUFFO1lBQ0osY0FBYztZQUNkLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqRCxDQUFDLGNBQWMsQ0FBQztZQUNoQixDQUFDLE9BQU8sQ0FBQztTQUNWO0tBQ0Y7SUFDRDtRQUNFLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFdBQVcsRUFBRSxjQUFjO0tBQzVCO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDakc7SUFDRCxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0lBQ3pELEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxFQUFDO0lBQy9GO1FBQ0UsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUU7WUFDSixjQUFjLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVk7WUFDN0UsZUFBZSxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE9BQU87WUFDcEUsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQztTQUNuRjtLQUNGO0lBQ0QsNEJBQTRCO0lBQzVCLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBQztJQUM3QyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUNqRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxjQUFjLEVBQUUsRUFBQztJQUN6RDtRQUNFLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVk7WUFDOUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsT0FBTztTQUMzRjtLQUNGO0lBQ0QsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztJQUM3QyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUM7SUFDdkUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUM7SUFDaEQsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN0RCxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUNqRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0NBQ3RELEVBQUE7O0FBRUQsTUFBTSxPQUFPLDZCQUE2QixHQUN0QyxtQkFBa0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVTs7O1FBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQSxFQUFDLENBQUMsRUFBQTs7QUFDN0UsTUFBTSxPQUFPLGtCQUFrQixHQUZsQiw2QkFFaUQ7Ozs7QUFJOUQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFJN0IsWUFBWSxjQUFpQzs7Y0FDckMsZUFBZSxHQUFvQjtZQUN2QyxNQUFNLEVBQUUsSUFBSTtZQUNaLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDLFFBQVE7WUFDaEQsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUMsT0FBTztTQUN2RDtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxVQUE2QixFQUFFOztjQUN0QyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztjQUMxRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUMvQixrQkFBa0I7WUFBRTtnQkFDbEIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLFVBQVU7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ2YsT0FBTyxJQUFJLGNBQWMsQ0FBQzs7O3dCQUd4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLFVBQVUsRUFBRSxTQUFTLEVBQUU7Ozt3QkFHdkIsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjt3QkFDL0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjt3QkFDM0MsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtxQkFDOUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQTtnQkFDRCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQztTQUNoQixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7Ozs7O0lBcENDLDZDQUEyQzs7Ozs7O0FBc0M3QyxTQUFTLGFBQWEsQ0FBQyxVQUE2QjtJQUNsRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDO1FBQy9ELG9CQUFvQixFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFDLENBQUM7UUFDM0YsU0FBUyxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQUEsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFDLENBQUM7UUFDdEUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUMsQ0FBQztRQUN2RixtQkFBbUIsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBQyxDQUFDO0tBQzFGLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBSSxJQUFTO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYzs7VUFDNUIsTUFBTSxHQUFVLEVBQUU7SUFDeEIsS0FBSyxDQUFDLE9BQU87Ozs7SUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ3RELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIENvbXBpbGVyQ29uZmlnLCBDb21waWxlUmVmbGVjdG9yLCBEaXJlY3RpdmVOb3JtYWxpemVyLCBEaXJlY3RpdmVSZXNvbHZlciwgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIEh0bWxQYXJzZXIsIEkxOE5IdG1sUGFyc2VyLCBKaXRDb21waWxlciwgSml0RXZhbHVhdG9yLCBKaXRTdW1tYXJ5UmVzb2x2ZXIsIExleGVyLCBOZ01vZHVsZUNvbXBpbGVyLCBOZ01vZHVsZVJlc29sdmVyLCBQYXJzZXIsIFBpcGVSZXNvbHZlciwgUHJvdmlkZXJNZXRhLCBSZXNvdXJjZUxvYWRlciwgU3RhdGljU3ltYm9sQ2FjaGUsIFN0eWxlQ29tcGlsZXIsIFN1bW1hcnlSZXNvbHZlciwgVGVtcGxhdGVQYXJzZXIsIFVybFJlc29sdmVyLCBWaWV3Q29tcGlsZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcGlsZXIsIENvbXBpbGVyRmFjdG9yeSwgQ29tcGlsZXJPcHRpb25zLCBDb21wb25lbnRGYWN0b3J5LCBJbmplY3QsIEluamVjdGlvblRva2VuLCBJbmplY3RvciwgaXNEZXZNb2RlLCBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSwgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcywgTmdNb2R1bGVGYWN0b3J5LCBPcHRpb25hbCwgUEFDS0FHRV9ST09UX1VSTCwgU3RhdGljUHJvdmlkZXIsIFRSQU5TTEFUSU9OUywgVFJBTlNMQVRJT05TX0ZPUk1BVCwgVHlwZSwgVmlld0VuY2Fwc3VsYXRpb24sIMm1Q29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtKaXRSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZXJfcmVmbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IEVSUk9SX0NPTExFQ1RPUl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbignRXJyb3JDb2xsZWN0b3InKTtcblxuLyoqXG4gKiBBIGRlZmF1bHQgcHJvdmlkZXIgZm9yIHtAbGluayBQQUNLQUdFX1JPT1RfVVJMfSB0aGF0IG1hcHMgdG8gJy8nLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogUEFDS0FHRV9ST09UX1VSTCxcbiAgdXNlVmFsdWU6ICcvJ1xufTtcblxuY29uc3QgX05PX1JFU09VUkNFX0xPQURFUjogUmVzb3VyY2VMb2FkZXIgPSB7XG4gIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gUmVzb3VyY2VMb2FkZXIgaW1wbGVtZW50YXRpb24gaGFzIGJlZW4gcHJvdmlkZWQuIENhbid0IHJlYWQgdGhlIHVybCBcIiR7dXJsfVwiYCk7XG4gIH1cbn07XG5cbmNvbnN0IGJhc2VIdG1sUGFyc2VyID0gbmV3IEluamVjdGlvblRva2VuKCdIdG1sUGFyc2VyJyk7XG5cbmV4cG9ydCBjbGFzcyBDb21waWxlckltcGwgaW1wbGVtZW50cyBDb21waWxlciB7XG4gIHByaXZhdGUgX2RlbGVnYXRlOiBKaXRDb21waWxlcjtcbiAgcHVibGljIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcjtcbiAgY29uc3RydWN0b3IoXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX21ldGFkYXRhUmVzb2x2ZXI6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLFxuICAgICAgdGVtcGxhdGVQYXJzZXI6IFRlbXBsYXRlUGFyc2VyLCBzdHlsZUNvbXBpbGVyOiBTdHlsZUNvbXBpbGVyLCB2aWV3Q29tcGlsZXI6IFZpZXdDb21waWxlcixcbiAgICAgIG5nTW9kdWxlQ29tcGlsZXI6IE5nTW9kdWxlQ29tcGlsZXIsIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFR5cGU8YW55Pj4sXG4gICAgICBjb21waWxlUmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCBqaXRFdmFsdWF0b3I6IEppdEV2YWx1YXRvcixcbiAgICAgIGNvbXBpbGVyQ29uZmlnOiBDb21waWxlckNvbmZpZywgY29uc29sZTogQ29uc29sZSkge1xuICAgIHRoaXMuX2RlbGVnYXRlID0gbmV3IEppdENvbXBpbGVyKFxuICAgICAgICBfbWV0YWRhdGFSZXNvbHZlciwgdGVtcGxhdGVQYXJzZXIsIHN0eWxlQ29tcGlsZXIsIHZpZXdDb21waWxlciwgbmdNb2R1bGVDb21waWxlcixcbiAgICAgICAgc3VtbWFyeVJlc29sdmVyLCBjb21waWxlUmVmbGVjdG9yLCBqaXRFdmFsdWF0b3IsIGNvbXBpbGVyQ29uZmlnLCBjb25zb2xlLFxuICAgICAgICB0aGlzLmdldEV4dHJhTmdNb2R1bGVQcm92aWRlcnMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeHRyYU5nTW9kdWxlUHJvdmlkZXJzKCkge1xuICAgIHJldHVybiBbdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQcm92aWRlck1ldGFkYXRhKFxuICAgICAgICBuZXcgUHJvdmlkZXJNZXRhKENvbXBpbGVyLCB7dXNlVmFsdWU6IHRoaXN9KSldO1xuICB9XG5cbiAgY29tcGlsZU1vZHVsZVN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE5nTW9kdWxlRmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVTeW5jKG1vZHVsZVR5cGUpIGFzIE5nTW9kdWxlRmFjdG9yeTxUPjtcbiAgfVxuICBjb21waWxlTW9kdWxlQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGVUeXBlKSBhcyBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj47XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMobW9kdWxlVHlwZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlRmFjdG9yeTogcmVzdWx0Lm5nTW9kdWxlRmFjdG9yeSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD4sXG4gICAgICBjb21wb25lbnRGYWN0b3JpZXM6IHJlc3VsdC5jb21wb25lbnRGYWN0b3JpZXMgYXMgQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sXG4gICAgfTtcbiAgfVxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOlxuICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVHlwZSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICBuZ01vZHVsZUZhY3Rvcnk6IHJlc3VsdC5uZ01vZHVsZUZhY3RvcnkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3RvcmllczogcmVzdWx0LmNvbXBvbmVudEZhY3RvcmllcyBhcyBDb21wb25lbnRGYWN0b3J5PGFueT5bXSxcbiAgICAgICAgICAgICAgfSkpO1xuICB9XG4gIGxvYWRBb3RTdW1tYXJpZXMoc3VtbWFyaWVzOiAoKSA9PiBhbnlbXSkge1xuICAgIHRoaXMuX2RlbGVnYXRlLmxvYWRBb3RTdW1tYXJpZXMoc3VtbWFyaWVzKTtcbiAgfVxuICBoYXNBb3RTdW1tYXJ5KHJlZjogVHlwZTxhbnk+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmhhc0FvdFN1bW1hcnkocmVmKTtcbiAgfVxuICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkgYXMgQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgfVxuICBjbGVhckNhY2hlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RlbGVnYXRlLmNsZWFyQ2FjaGUoKTtcbiAgfVxuICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGU8YW55Pikge1xuICAgIHRoaXMuX2RlbGVnYXRlLmNsZWFyQ2FjaGVGb3IodHlwZSk7XG4gIH1cbiAgZ2V0TW9kdWxlSWQobW9kdWxlVHlwZTogVHlwZTxhbnk+KTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbWV0YSA9IHRoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0TmdNb2R1bGVNZXRhZGF0YShtb2R1bGVUeXBlKTtcbiAgICByZXR1cm4gbWV0YSAmJiBtZXRhLmlkIHx8IHVuZGVmaW5lZDtcbiAgfVxufVxuLyoqXG4gKiBBIHNldCBvZiBwcm92aWRlcnMgdGhhdCBwcm92aWRlIGBKaXRDb21waWxlcmAgYW5kIGl0cyBkZXBlbmRlbmNpZXMgdG8gdXNlIGZvclxuICogdGVtcGxhdGUgY29tcGlsYXRpb24uXG4gKi9cbmNvbnN0IENPTVBJTEVSX1BST1ZJREVSU19fUFJFX1IzX18gPSA8U3RhdGljUHJvdmlkZXJbXT5bXG4gIHtwcm92aWRlOiBDb21waWxlUmVmbGVjdG9yLCB1c2VWYWx1ZTogbmV3IEppdFJlZmxlY3RvcigpfSxcbiAge3Byb3ZpZGU6IFJlc291cmNlTG9hZGVyLCB1c2VWYWx1ZTogX05PX1JFU09VUkNFX0xPQURFUn0sXG4gIHtwcm92aWRlOiBKaXRTdW1tYXJ5UmVzb2x2ZXIsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IFN1bW1hcnlSZXNvbHZlciwgdXNlRXhpc3Rpbmc6IEppdFN1bW1hcnlSZXNvbHZlcn0sXG4gIHtwcm92aWRlOiBDb25zb2xlLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBMZXhlciwgZGVwczogW119LFxuICB7cHJvdmlkZTogUGFyc2VyLCBkZXBzOiBbTGV4ZXJdfSxcbiAge1xuICAgIHByb3ZpZGU6IGJhc2VIdG1sUGFyc2VyLFxuICAgIHVzZUNsYXNzOiBIdG1sUGFyc2VyLFxuICAgIGRlcHM6IFtdLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSTE4Tkh0bWxQYXJzZXIsXG4gICAgdXNlRmFjdG9yeTpcbiAgICAgICAgKHBhcnNlcjogSHRtbFBhcnNlciwgdHJhbnNsYXRpb25zOiBzdHJpbmd8bnVsbCwgZm9ybWF0OiBzdHJpbmcsIGNvbmZpZzogQ29tcGlsZXJDb25maWcsXG4gICAgICAgICBjb25zb2xlOiBDb25zb2xlKSA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zIHx8ICcnO1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdUcmFuc2xhdGlvbiA9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA/IGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb24hIDogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuSWdub3JlO1xuICAgICAgICAgIHJldHVybiBuZXcgSTE4Tkh0bWxQYXJzZXIocGFyc2VyLCB0cmFuc2xhdGlvbnMsIGZvcm1hdCwgbWlzc2luZ1RyYW5zbGF0aW9uLCBjb25zb2xlKTtcbiAgICAgICAgfSxcbiAgICBkZXBzOiBbXG4gICAgICBiYXNlSHRtbFBhcnNlcixcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IEluamVjdChUUkFOU0xBVElPTlMpXSxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IEluamVjdChUUkFOU0xBVElPTlNfRk9STUFUKV0sXG4gICAgICBbQ29tcGlsZXJDb25maWddLFxuICAgICAgW0NvbnNvbGVdLFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0bWxQYXJzZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEkxOE5IdG1sUGFyc2VyLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogVGVtcGxhdGVQYXJzZXIsXG4gICAgZGVwczogW0NvbXBpbGVyQ29uZmlnLCBDb21waWxlUmVmbGVjdG9yLCBQYXJzZXIsIEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgSTE4Tkh0bWxQYXJzZXIsIENvbnNvbGVdXG4gIH0sXG4gIHtwcm92aWRlOiBKaXRFdmFsdWF0b3IsIHVzZUNsYXNzOiBKaXRFdmFsdWF0b3IsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IERpcmVjdGl2ZU5vcm1hbGl6ZXIsIGRlcHM6IFtSZXNvdXJjZUxvYWRlciwgVXJsUmVzb2x2ZXIsIEh0bWxQYXJzZXIsIENvbXBpbGVyQ29uZmlnXX0sXG4gIHtcbiAgICBwcm92aWRlOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICBkZXBzOiBbXG4gICAgICBDb21waWxlckNvbmZpZywgSHRtbFBhcnNlciwgTmdNb2R1bGVSZXNvbHZlciwgRGlyZWN0aXZlUmVzb2x2ZXIsIFBpcGVSZXNvbHZlcixcbiAgICAgIFN1bW1hcnlSZXNvbHZlciwgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBEaXJlY3RpdmVOb3JtYWxpemVyLCBDb25zb2xlLFxuICAgICAgW09wdGlvbmFsLCBTdGF0aWNTeW1ib2xDYWNoZV0sIENvbXBpbGVSZWZsZWN0b3IsIFtPcHRpb25hbCwgRVJST1JfQ09MTEVDVE9SX1RPS0VOXVxuICAgIF1cbiAgfSxcbiAgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUixcbiAge3Byb3ZpZGU6IFN0eWxlQ29tcGlsZXIsIGRlcHM6IFtVcmxSZXNvbHZlcl19LFxuICB7cHJvdmlkZTogVmlld0NvbXBpbGVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogTmdNb2R1bGVDb21waWxlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IENvbXBpbGVyQ29uZmlnLCB1c2VWYWx1ZTogbmV3IENvbXBpbGVyQ29uZmlnKCl9LFxuICB7XG4gICAgcHJvdmlkZTogQ29tcGlsZXIsXG4gICAgdXNlQ2xhc3M6IENvbXBpbGVySW1wbCxcbiAgICBkZXBzOiBbXG4gICAgICBJbmplY3RvciwgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIFRlbXBsYXRlUGFyc2VyLCBTdHlsZUNvbXBpbGVyLCBWaWV3Q29tcGlsZXIsXG4gICAgICBOZ01vZHVsZUNvbXBpbGVyLCBTdW1tYXJ5UmVzb2x2ZXIsIENvbXBpbGVSZWZsZWN0b3IsIEppdEV2YWx1YXRvciwgQ29tcGlsZXJDb25maWcsIENvbnNvbGVcbiAgICBdXG4gIH0sXG4gIHtwcm92aWRlOiBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnksIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgdXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0sXG4gIHtwcm92aWRlOiBVcmxSZXNvbHZlciwgZGVwczogW1BBQ0tBR0VfUk9PVF9VUkxdfSxcbiAge3Byb3ZpZGU6IERpcmVjdGl2ZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogUGlwZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogTmdNb2R1bGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbl07XG5cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlNfX1BPU1RfUjNfXyA9XG4gICAgPFN0YXRpY1Byb3ZpZGVyW10+W3twcm92aWRlOiBDb21waWxlciwgdXNlRmFjdG9yeTogKCkgPT4gbmV3IENvbXBpbGVyKCl9XTtcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlMgPSBDT01QSUxFUl9QUk9WSURFUlNfX1BSRV9SM19fO1xuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBKaXRDb21waWxlckZhY3RvcnkgaW1wbGVtZW50cyBDb21waWxlckZhY3Rvcnkge1xuICBwcml2YXRlIF9kZWZhdWx0T3B0aW9uczogQ29tcGlsZXJPcHRpb25zW107XG5cbiAgLyogQGludGVybmFsICovXG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRPcHRpb25zOiBDb21waWxlck9wdGlvbnNbXSkge1xuICAgIGNvbnN0IGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zID0ge1xuICAgICAgdXNlSml0OiB0cnVlLFxuICAgICAgZGVmYXVsdEVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nLFxuICAgIH07XG5cbiAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IFtjb21waWxlck9wdGlvbnMsIC4uLmRlZmF1bHRPcHRpb25zXTtcbiAgfVxuICBjcmVhdGVDb21waWxlcihvcHRpb25zOiBDb21waWxlck9wdGlvbnNbXSA9IFtdKTogQ29tcGlsZXIge1xuICAgIGNvbnN0IG9wdHMgPSBfbWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLmNvbmNhdChvcHRpb25zKSk7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAgQ09NUElMRVJfUFJPVklERVJTLCB7XG4gICAgICAgIHByb3ZpZGU6IENvbXBpbGVyQ29uZmlnLFxuICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDb21waWxlckNvbmZpZyh7XG4gICAgICAgICAgICAvLyBsZXQgZXhwbGljaXQgdmFsdWVzIGZyb20gdGhlIGNvbXBpbGVyIG9wdGlvbnMgb3ZlcndyaXRlIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGFwcCBwcm92aWRlcnNcbiAgICAgICAgICAgIHVzZUppdDogb3B0cy51c2VKaXQsXG4gICAgICAgICAgICBqaXREZXZNb2RlOiBpc0Rldk1vZGUoKSxcbiAgICAgICAgICAgIC8vIGxldCBleHBsaWNpdCB2YWx1ZXMgZnJvbSB0aGUgY29tcGlsZXIgb3B0aW9ucyBvdmVyd3JpdGUgb3B0aW9uc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgYXBwIHByb3ZpZGVyc1xuICAgICAgICAgICAgZGVmYXVsdEVuY2Fwc3VsYXRpb246IG9wdHMuZGVmYXVsdEVuY2Fwc3VsYXRpb24sXG4gICAgICAgICAgICBtaXNzaW5nVHJhbnNsYXRpb246IG9wdHMubWlzc2luZ1RyYW5zbGF0aW9uLFxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZXNwYWNlczogb3B0cy5wcmVzZXJ2ZVdoaXRlc3BhY2VzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXBzOiBbXVxuICAgICAgfSxcbiAgICAgIG9wdHMucHJvdmlkZXJzIVxuICAgIF0pO1xuICAgIHJldHVybiBpbmplY3Rvci5nZXQoQ29tcGlsZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9tZXJnZU9wdGlvbnMob3B0aW9uc0FycjogQ29tcGlsZXJPcHRpb25zW10pOiBDb21waWxlck9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIHVzZUppdDogX2xhc3REZWZpbmVkKG9wdGlvbnNBcnIubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy51c2VKaXQpKSxcbiAgICBkZWZhdWx0RW5jYXBzdWxhdGlvbjogX2xhc3REZWZpbmVkKG9wdGlvbnNBcnIubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5kZWZhdWx0RW5jYXBzdWxhdGlvbikpLFxuICAgIHByb3ZpZGVyczogX21lcmdlQXJyYXlzKG9wdGlvbnNBcnIubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5wcm92aWRlcnMhKSksXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLm1pc3NpbmdUcmFuc2xhdGlvbikpLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcykpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBfbGFzdERlZmluZWQ8VD4oYXJnczogVFtdKTogVHx1bmRlZmluZWQge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfbWVyZ2VBcnJheXMocGFydHM6IGFueVtdW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydCAmJiByZXN1bHQucHVzaCguLi5wYXJ0KSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=