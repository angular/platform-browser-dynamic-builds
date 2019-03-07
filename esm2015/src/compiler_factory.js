/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler, Inject, InjectionToken, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, isDevMode, ɵConsole as Console, ViewEncapsulation, Injector, TRANSLATIONS_FORMAT, MissingTranslationStrategy, } from '@angular/core';
import { StaticSymbolCache, JitCompiler, ProviderMeta, I18NHtmlParser, ViewCompiler, CompileMetadataResolver, UrlResolver, TemplateParser, NgModuleCompiler, JitEvaluator, JitSummaryResolver, SummaryResolver, StyleCompiler, PipeResolver, ElementSchemaRegistry, DomElementSchemaRegistry, ResourceLoader, NgModuleResolver, HtmlParser, CompileReflector, CompilerConfig, DirectiveNormalizer, DirectiveResolver, Lexer, Parser } from '@angular/compiler';
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
            .then((result) => ({
            ngModuleFactory: (/** @type {?} */ (result.ngModuleFactory)),
            componentFactories: (/** @type {?} */ (result.componentFactories)),
        }));
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) { this._delegate.loadAotSummaries(summaries); }
    /**
     * @param {?} ref
     * @return {?}
     */
    hasAotSummary(ref) { return this._delegate.hasAotSummary(ref); }
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
    clearCache() { this._delegate.clearCache(); }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) { this._delegate.clearCacheFor(type); }
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
export const COMPILER_PROVIDERS = (/** @type {?} */ ([
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
        useFactory: (parser, translations, format, config, console) => {
            translations = translations || '';
            /** @type {?} */
            const missingTranslation = translations ? (/** @type {?} */ (config.missingTranslation)) : MissingTranslationStrategy.Ignore;
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
    { provide: JitEvaluator, useClass: JitEvaluator, deps: [] },
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
            SummaryResolver, CompileReflector, JitEvaluator, CompilerConfig,
            Console] },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]));
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
            COMPILER_PROVIDERS, {
                provide: CompilerConfig,
                useFactory: () => {
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
        useJit: _lastDefined(optionsArr.map(options => options.useJit)),
        defaultEncapsulation: _lastDefined(optionsArr.map(options => options.defaultEncapsulation)),
        providers: _mergeArrays(optionsArr.map(options => (/** @type {?} */ (options.providers)))),
        missingTranslation: _lastDefined(optionsArr.map(options => options.missingTranslation)),
        preserveWhitespaces: _lastDefined(optionsArr.map(options => options.preserveWhitespaces)),
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
    parts.forEach((part) => part && result.push(...part));
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9zcmMvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQW9GLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFrQixZQUFZLEVBQVEsU0FBUyxFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFtQixtQkFBbUIsRUFBRSwwQkFBMEIsR0FBRSxNQUFNLGVBQWUsQ0FBQztBQUVqVixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUU3YixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBRWxELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7QUFLekUsTUFBTSxPQUFPLDRCQUE0QixHQUFHO0lBQzFDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsUUFBUSxFQUFFLEdBQUc7Q0FDZDs7TUFFSyxtQkFBbUIsR0FBbUI7Ozs7O0lBQzFDLEdBQUcsQ0FBQyxHQUFXO1FBQ1gsTUFBTSxJQUFJLEtBQUss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LFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRixTQUFTLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBQSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN2RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZGLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDMUYsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMsWUFBWSxDQUFJLElBQVM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFjOztVQUM1QixNQUFNLEdBQVUsRUFBRTtJQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXMsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBQQUNLQUdFX1JPT1RfVVJMLCBTdGF0aWNQcm92aWRlciwgVFJBTlNMQVRJT05TLCBUeXBlLCBpc0Rldk1vZGUsIMm1Q29uc29sZSBhcyBDb25zb2xlLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgVFJBTlNMQVRJT05TX0ZPUk1BVCwgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdGF0aWNTeW1ib2xDYWNoZSwgSml0Q29tcGlsZXIsIFByb3ZpZGVyTWV0YSwgSTE4Tkh0bWxQYXJzZXIsIFZpZXdDb21waWxlciwgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIFVybFJlc29sdmVyLCBUZW1wbGF0ZVBhcnNlciwgTmdNb2R1bGVDb21waWxlciwgSml0RXZhbHVhdG9yLCBKaXRTdW1tYXJ5UmVzb2x2ZXIsIFN1bW1hcnlSZXNvbHZlciwgU3R5bGVDb21waWxlciwgUGlwZVJlc29sdmVyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgUmVzb3VyY2VMb2FkZXIsIE5nTW9kdWxlUmVzb2x2ZXIsIEh0bWxQYXJzZXIsIENvbXBpbGVSZWZsZWN0b3IsIENvbXBpbGVyQ29uZmlnLCBEaXJlY3RpdmVOb3JtYWxpemVyLCBEaXJlY3RpdmVSZXNvbHZlciwgTGV4ZXIsIFBhcnNlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge0ppdFJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlcl9yZWZsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRVJST1JfQ09MTEVDVE9SX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuKCdFcnJvckNvbGxlY3RvcicpO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBwcm92aWRlciBmb3Ige0BsaW5rIFBBQ0tBR0VfUk9PVF9VUkx9IHRoYXQgbWFwcyB0byAnLycuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBQQUNLQUdFX1JPT1RfVVJMLFxuICB1c2VWYWx1ZTogJy8nXG59O1xuXG5jb25zdCBfTk9fUkVTT1VSQ0VfTE9BREVSOiBSZXNvdXJjZUxvYWRlciA9IHtcbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+e1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBObyBSZXNvdXJjZUxvYWRlciBpbXBsZW1lbnRhdGlvbiBoYXMgYmVlbiBwcm92aWRlZC4gQ2FuJ3QgcmVhZCB0aGUgdXJsIFwiJHt1cmx9XCJgKTt9XG59O1xuXG5jb25zdCBiYXNlSHRtbFBhcnNlciA9IG5ldyBJbmplY3Rpb25Ub2tlbignSHRtbFBhcnNlcicpO1xuXG5leHBvcnQgY2xhc3MgQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgQ29tcGlsZXIge1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogSml0Q29tcGlsZXI7XG4gIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICAgIHRlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsXG4gICAgICBuZ01vZHVsZUNvbXBpbGVyOiBOZ01vZHVsZUNvbXBpbGVyLCBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxUeXBlPGFueT4+LFxuICAgICAgY29tcGlsZVJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yOiBKaXRFdmFsdWF0b3IsXG4gICAgICBjb21waWxlckNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IENvbnNvbGUpIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IG5ldyBKaXRDb21waWxlcihcbiAgICAgICAgX21ldGFkYXRhUmVzb2x2ZXIsIHRlbXBsYXRlUGFyc2VyLCBzdHlsZUNvbXBpbGVyLCB2aWV3Q29tcGlsZXIsIG5nTW9kdWxlQ29tcGlsZXIsXG4gICAgICAgIHN1bW1hcnlSZXNvbHZlciwgY29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yLCBjb21waWxlckNvbmZpZywgY29uc29sZSxcbiAgICAgICAgdGhpcy5nZXRFeHRyYU5nTW9kdWxlUHJvdmlkZXJzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXh0cmFOZ01vZHVsZVByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gW3RoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UHJvdmlkZXJNZXRhZGF0YShcbiAgICAgICAgbmV3IFByb3ZpZGVyTWV0YShDb21waWxlciwge3VzZVZhbHVlOiB0aGlzfSkpXTtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBOZ01vZHVsZUZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlU3luYyhtb2R1bGVUeXBlKSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD47XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVHlwZSkgYXMgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+O1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZUZhY3Rvcnk6IHJlc3VsdC5uZ01vZHVsZUZhY3RvcnkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+LFxuICAgICAgY29tcG9uZW50RmFjdG9yaWVzOiByZXN1bHQuY29tcG9uZW50RmFjdG9yaWVzIGFzIENvbXBvbmVudEZhY3Rvcnk8YW55PltdLFxuICAgIH07XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTpcbiAgICAgIFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jKG1vZHVsZVR5cGUpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgbmdNb2R1bGVGYWN0b3J5OiByZXN1bHQubmdNb2R1bGVGYWN0b3J5IGFzIE5nTW9kdWxlRmFjdG9yeTxUPixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3JpZXM6IHJlc3VsdC5jb21wb25lbnRGYWN0b3JpZXMgYXMgQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sXG4gICAgICAgICAgICAgIH0pKTtcbiAgfVxuICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pIHsgdGhpcy5fZGVsZWdhdGUubG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXMpOyB9XG4gIGhhc0FvdFN1bW1hcnkocmVmOiBUeXBlPGFueT4pOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmhhc0FvdFN1bW1hcnkocmVmKTsgfVxuICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkgYXMgQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgfVxuICBjbGVhckNhY2hlKCk6IHZvaWQgeyB0aGlzLl9kZWxlZ2F0ZS5jbGVhckNhY2hlKCk7IH1cbiAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pIHsgdGhpcy5fZGVsZWdhdGUuY2xlYXJDYWNoZUZvcih0eXBlKTsgfVxuICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiBtZXRhICYmIG1ldGEuaWQgfHwgdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQSBzZXQgb2YgcHJvdmlkZXJzIHRoYXQgcHJvdmlkZSBgSml0Q29tcGlsZXJgIGFuZCBpdHMgZGVwZW5kZW5jaWVzIHRvIHVzZSBmb3JcbiAqIHRlbXBsYXRlIGNvbXBpbGF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTID0gPFN0YXRpY1Byb3ZpZGVyW10+W1xuICB7cHJvdmlkZTogQ29tcGlsZVJlZmxlY3RvciwgdXNlVmFsdWU6IG5ldyBKaXRSZWZsZWN0b3IoKX0sXG4gIHtwcm92aWRlOiBSZXNvdXJjZUxvYWRlciwgdXNlVmFsdWU6IF9OT19SRVNPVVJDRV9MT0FERVJ9LFxuICB7cHJvdmlkZTogSml0U3VtbWFyeVJlc29sdmVyLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBTdW1tYXJ5UmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBKaXRTdW1tYXJ5UmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogQ29uc29sZSwgZGVwczogW119LFxuICB7cHJvdmlkZTogTGV4ZXIsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IFBhcnNlciwgZGVwczogW0xleGVyXX0sXG4gIHtcbiAgICBwcm92aWRlOiBiYXNlSHRtbFBhcnNlcixcbiAgICB1c2VDbGFzczogSHRtbFBhcnNlcixcbiAgICBkZXBzOiBbXSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEkxOE5IdG1sUGFyc2VyLFxuICAgIHVzZUZhY3Rvcnk6IChwYXJzZXI6IEh0bWxQYXJzZXIsIHRyYW5zbGF0aW9uczogc3RyaW5nIHwgbnVsbCwgZm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgIGNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IENvbnNvbGUpID0+IHtcbiAgICAgIHRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucyB8fCAnJztcbiAgICAgIGNvbnN0IG1pc3NpbmdUcmFuc2xhdGlvbiA9XG4gICAgICAgICAgdHJhbnNsYXRpb25zID8gY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbiAhIDogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuSWdub3JlO1xuICAgICAgcmV0dXJuIG5ldyBJMThOSHRtbFBhcnNlcihwYXJzZXIsIHRyYW5zbGF0aW9ucywgZm9ybWF0LCBtaXNzaW5nVHJhbnNsYXRpb24sIGNvbnNvbGUpO1xuICAgIH0sXG4gICAgZGVwczogW1xuICAgICAgYmFzZUh0bWxQYXJzZXIsXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TKV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCldLFxuICAgICAgW0NvbXBpbGVyQ29uZmlnXSxcbiAgICAgIFtDb25zb2xlXSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdG1sUGFyc2VyLFxuICAgIHVzZUV4aXN0aW5nOiBJMThOSHRtbFBhcnNlcixcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFRlbXBsYXRlUGFyc2VyLCBkZXBzOiBbQ29tcGlsZXJDb25maWcsIENvbXBpbGVSZWZsZWN0b3IsXG4gICAgUGFyc2VyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksXG4gICAgSTE4Tkh0bWxQYXJzZXIsIENvbnNvbGVdXG4gIH0sXG4gIHsgcHJvdmlkZTogSml0RXZhbHVhdG9yLCB1c2VDbGFzczogSml0RXZhbHVhdG9yLCBkZXBzOiBbXSB9LFxuICB7IHByb3ZpZGU6IERpcmVjdGl2ZU5vcm1hbGl6ZXIsIGRlcHM6IFtSZXNvdXJjZUxvYWRlciwgVXJsUmVzb2x2ZXIsIEh0bWxQYXJzZXIsIENvbXBpbGVyQ29uZmlnXX0sXG4gIHsgcHJvdmlkZTogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlckNvbmZpZywgSHRtbFBhcnNlciwgTmdNb2R1bGVSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICBEaXJlY3RpdmVSZXNvbHZlciwgUGlwZVJlc29sdmVyLFxuICAgICAgICAgICAgICAgICAgICAgIFN1bW1hcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50U2NoZW1hUmVnaXN0cnksXG4gICAgICAgICAgICAgICAgICAgICAgRGlyZWN0aXZlTm9ybWFsaXplciwgQ29uc29sZSxcbiAgICAgICAgICAgICAgICAgICAgICBbT3B0aW9uYWwsIFN0YXRpY1N5bWJvbENhY2hlXSxcbiAgICAgICAgICAgICAgICAgICAgICBDb21waWxlUmVmbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgIFtPcHRpb25hbCwgRVJST1JfQ09MTEVDVE9SX1RPS0VOXV19LFxuICBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSLFxuICB7IHByb3ZpZGU6IFN0eWxlQ29tcGlsZXIsIGRlcHM6IFtVcmxSZXNvbHZlcl19LFxuICB7IHByb3ZpZGU6IFZpZXdDb21waWxlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAgeyBwcm92aWRlOiBOZ01vZHVsZUNvbXBpbGVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl0gfSxcbiAgeyBwcm92aWRlOiBDb21waWxlckNvbmZpZywgdXNlVmFsdWU6IG5ldyBDb21waWxlckNvbmZpZygpfSxcbiAgeyBwcm92aWRlOiBDb21waWxlciwgdXNlQ2xhc3M6IENvbXBpbGVySW1wbCwgZGVwczogW0luamVjdG9yLCBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcGxhdGVQYXJzZXIsIFN0eWxlQ29tcGlsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdDb21waWxlciwgTmdNb2R1bGVDb21waWxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VtbWFyeVJlc29sdmVyLCBDb21waWxlUmVmbGVjdG9yLCBKaXRFdmFsdWF0b3IsIENvbXBpbGVyQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zb2xlXX0sXG4gIHsgcHJvdmlkZTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBkZXBzOiBbXX0sXG4gIHsgcHJvdmlkZTogRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB1c2VFeGlzdGluZzogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSxcbiAgeyBwcm92aWRlOiBVcmxSZXNvbHZlciwgZGVwczogW1BBQ0tBR0VfUk9PVF9VUkxdfSxcbiAgeyBwcm92aWRlOiBEaXJlY3RpdmVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAgeyBwcm92aWRlOiBQaXBlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHsgcHJvdmlkZTogTmdNb2R1bGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbl07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSml0Q29tcGlsZXJGYWN0b3J5IGltcGxlbWVudHMgQ29tcGlsZXJGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdO1xuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0T3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10pIHtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgIHVzZUppdDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZyxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSBbY29tcGlsZXJPcHRpb25zLCAuLi5kZWZhdWx0T3B0aW9uc107XG4gIH1cbiAgY3JlYXRlQ29tcGlsZXIob3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10gPSBbXSk6IENvbXBpbGVyIHtcbiAgICBjb25zdCBvcHRzID0gX21lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5jb25jYXQob3B0aW9ucykpO1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIENPTVBJTEVSX1BST1ZJREVSUywge1xuICAgICAgICBwcm92aWRlOiBDb21waWxlckNvbmZpZyxcbiAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoe1xuICAgICAgICAgICAgLy8gbGV0IGV4cGxpY2l0IHZhbHVlcyBmcm9tIHRoZSBjb21waWxlciBvcHRpb25zIG92ZXJ3cml0ZSBvcHRpb25zXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBhcHAgcHJvdmlkZXJzXG4gICAgICAgICAgICB1c2VKaXQ6IG9wdHMudXNlSml0LFxuICAgICAgICAgICAgaml0RGV2TW9kZTogaXNEZXZNb2RlKCksXG4gICAgICAgICAgICAvLyBsZXQgZXhwbGljaXQgdmFsdWVzIGZyb20gdGhlIGNvbXBpbGVyIG9wdGlvbnMgb3ZlcndyaXRlIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGFwcCBwcm92aWRlcnNcbiAgICAgICAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBvcHRzLmRlZmF1bHRFbmNhcHN1bGF0aW9uLFxuICAgICAgICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBvcHRzLm1pc3NpbmdUcmFuc2xhdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG9wdHMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW11cbiAgICAgIH0sXG4gICAgICBvcHRzLnByb3ZpZGVycyAhXG4gICAgXSk7XG4gICAgcmV0dXJuIGluamVjdG9yLmdldChDb21waWxlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21lcmdlT3B0aW9ucyhvcHRpb25zQXJyOiBDb21waWxlck9wdGlvbnNbXSk6IENvbXBpbGVyT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdXNlSml0OiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnVzZUppdCkpLFxuICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLmRlZmF1bHRFbmNhcHN1bGF0aW9uKSksXG4gICAgcHJvdmlkZXJzOiBfbWVyZ2VBcnJheXMob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByb3ZpZGVycyAhKSksXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLm1pc3NpbmdUcmFuc2xhdGlvbikpLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcykpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBfbGFzdERlZmluZWQ8VD4oYXJnczogVFtdKTogVHx1bmRlZmluZWQge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfbWVyZ2VBcnJheXMocGFydHM6IGFueVtdW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydCAmJiByZXN1bHQucHVzaCguLi5wYXJ0KSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=