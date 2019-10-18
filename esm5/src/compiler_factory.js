import { __read, __spread } from "tslib";
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
export var ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
 */
export var DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
var _NO_RESOURCE_LOADER = {
    get: function (url) {
        throw new Error("No ResourceLoader implementation has been provided. Can't read the url \"" + url + "\"");
    }
};
var baseHtmlParser = new InjectionToken('HtmlParser');
var CompilerImpl = /** @class */ (function () {
    function CompilerImpl(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    CompilerImpl.prototype.getExtraNgModuleProviders = function () {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    };
    CompilerImpl.prototype.compileModuleSync = function (moduleType) {
        return this._delegate.compileModuleSync(moduleType);
    };
    CompilerImpl.prototype.compileModuleAsync = function (moduleType) {
        return this._delegate.compileModuleAsync(moduleType);
    };
    CompilerImpl.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
        var result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: result.ngModuleFactory,
            componentFactories: result.componentFactories,
        };
    };
    CompilerImpl.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then(function (result) { return ({
            ngModuleFactory: result.ngModuleFactory,
            componentFactories: result.componentFactories,
        }); });
    };
    CompilerImpl.prototype.loadAotSummaries = function (summaries) { this._delegate.loadAotSummaries(summaries); };
    CompilerImpl.prototype.hasAotSummary = function (ref) { return this._delegate.hasAotSummary(ref); };
    CompilerImpl.prototype.getComponentFactory = function (component) {
        return this._delegate.getComponentFactory(component);
    };
    CompilerImpl.prototype.clearCache = function () { this._delegate.clearCache(); };
    CompilerImpl.prototype.clearCacheFor = function (type) { this._delegate.clearCacheFor(type); };
    CompilerImpl.prototype.getModuleId = function (moduleType) {
        var meta = this._metadataResolver.getNgModuleMetadata(moduleType);
        return meta && meta.id || undefined;
    };
    return CompilerImpl;
}());
export { CompilerImpl };
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 */
var COMPILER_PROVIDERS__PRE_R3__ = [
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
            var missingTranslation = translations ? config.missingTranslation : MissingTranslationStrategy.Ignore;
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
];
export var COMPILER_PROVIDERS__POST_R3__ = [{ provide: Compiler, useFactory: function () { return new Compiler(); } }];
export var COMPILER_PROVIDERS = COMPILER_PROVIDERS__POST_R3__;
/**
 * @publicApi
 */
var JitCompilerFactory = /** @class */ (function () {
    /* @internal */
    function JitCompilerFactory(defaultOptions) {
        var compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = __spread([compilerOptions], defaultOptions);
    }
    JitCompilerFactory.prototype.createCompiler = function (options) {
        if (options === void 0) { options = []; }
        var opts = _mergeOptions(this._defaultOptions.concat(options));
        var injector = Injector.create([
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
            opts.providers
        ]);
        return injector.get(Compiler);
    };
    return JitCompilerFactory;
}());
export { JitCompilerFactory };
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map(function (options) { return options.useJit; })),
        defaultEncapsulation: _lastDefined(optionsArr.map(function (options) { return options.defaultEncapsulation; })),
        providers: _mergeArrays(optionsArr.map(function (options) { return options.providers; })),
        missingTranslation: _lastDefined(optionsArr.map(function (options) { return options.missingTranslation; })),
        preserveWhitespaces: _lastDefined(optionsArr.map(function (options) { return options.preserveWhitespaces; })),
    };
}
function _lastDefined(args) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
function _mergeArrays(parts) {
    var result = [];
    parts.forEach(function (part) { return part && result.push.apply(result, __spread(part)); });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9zcmMvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBb0YsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQWtCLFlBQVksRUFBUSxTQUFTLEVBQUUsUUFBUSxJQUFJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQW1CLG1CQUFtQixFQUFFLDBCQUEwQixHQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpWLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTdiLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQUc7SUFDMUMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixRQUFRLEVBQUUsR0FBRztDQUNkLENBQUM7QUFFRixJQUFNLG1CQUFtQixHQUFtQjtJ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QU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxXQUFTLElBQUksRUFBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXMsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBQQUNLQUdFX1JPT1RfVVJMLCBTdGF0aWNQcm92aWRlciwgVFJBTlNMQVRJT05TLCBUeXBlLCBpc0Rldk1vZGUsIMm1Q29uc29sZSBhcyBDb25zb2xlLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgVFJBTlNMQVRJT05TX0ZPUk1BVCwgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdGF0aWNTeW1ib2xDYWNoZSwgSml0Q29tcGlsZXIsIFByb3ZpZGVyTWV0YSwgSTE4Tkh0bWxQYXJzZXIsIFZpZXdDb21waWxlciwgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsIFVybFJlc29sdmVyLCBUZW1wbGF0ZVBhcnNlciwgTmdNb2R1bGVDb21waWxlciwgSml0RXZhbHVhdG9yLCBKaXRTdW1tYXJ5UmVzb2x2ZXIsIFN1bW1hcnlSZXNvbHZlciwgU3R5bGVDb21waWxlciwgUGlwZVJlc29sdmVyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgUmVzb3VyY2VMb2FkZXIsIE5nTW9kdWxlUmVzb2x2ZXIsIEh0bWxQYXJzZXIsIENvbXBpbGVSZWZsZWN0b3IsIENvbXBpbGVyQ29uZmlnLCBEaXJlY3RpdmVOb3JtYWxpemVyLCBEaXJlY3RpdmVSZXNvbHZlciwgTGV4ZXIsIFBhcnNlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge0ppdFJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlcl9yZWZsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRVJST1JfQ09MTEVDVE9SX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuKCdFcnJvckNvbGxlY3RvcicpO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBwcm92aWRlciBmb3Ige0BsaW5rIFBBQ0tBR0VfUk9PVF9VUkx9IHRoYXQgbWFwcyB0byAnLycuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBQQUNLQUdFX1JPT1RfVVJMLFxuICB1c2VWYWx1ZTogJy8nXG59O1xuXG5jb25zdCBfTk9fUkVTT1VSQ0VfTE9BREVSOiBSZXNvdXJjZUxvYWRlciA9IHtcbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+e1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBObyBSZXNvdXJjZUxvYWRlciBpbXBsZW1lbnRhdGlvbiBoYXMgYmVlbiBwcm92aWRlZC4gQ2FuJ3QgcmVhZCB0aGUgdXJsIFwiJHt1cmx9XCJgKTt9XG59O1xuXG5jb25zdCBiYXNlSHRtbFBhcnNlciA9IG5ldyBJbmplY3Rpb25Ub2tlbignSHRtbFBhcnNlcicpO1xuXG5leHBvcnQgY2xhc3MgQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgQ29tcGlsZXIge1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogSml0Q29tcGlsZXI7XG4gIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICAgIHRlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsXG4gICAgICBuZ01vZHVsZUNvbXBpbGVyOiBOZ01vZHVsZUNvbXBpbGVyLCBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxUeXBlPGFueT4+LFxuICAgICAgY29tcGlsZVJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yOiBKaXRFdmFsdWF0b3IsXG4gICAgICBjb21waWxlckNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IENvbnNvbGUpIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IG5ldyBKaXRDb21waWxlcihcbiAgICAgICAgX21ldGFkYXRhUmVzb2x2ZXIsIHRlbXBsYXRlUGFyc2VyLCBzdHlsZUNvbXBpbGVyLCB2aWV3Q29tcGlsZXIsIG5nTW9kdWxlQ29tcGlsZXIsXG4gICAgICAgIHN1bW1hcnlSZXNvbHZlciwgY29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yLCBjb21waWxlckNvbmZpZywgY29uc29sZSxcbiAgICAgICAgdGhpcy5nZXRFeHRyYU5nTW9kdWxlUHJvdmlkZXJzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXh0cmFOZ01vZHVsZVByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gW3RoaXMuX21ldGFkYXRhUmVzb2x2ZXIuZ2V0UHJvdmlkZXJNZXRhZGF0YShcbiAgICAgICAgbmV3IFByb3ZpZGVyTWV0YShDb21waWxlciwge3VzZVZhbHVlOiB0aGlzfSkpXTtcbiAgfVxuXG4gIGNvbXBpbGVNb2R1bGVTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBOZ01vZHVsZUZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlU3luYyhtb2R1bGVUeXBlKSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD47XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVHlwZSkgYXMgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+O1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZUZhY3Rvcnk6IHJlc3VsdC5uZ01vZHVsZUZhY3RvcnkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+LFxuICAgICAgY29tcG9uZW50RmFjdG9yaWVzOiByZXN1bHQuY29tcG9uZW50RmFjdG9yaWVzIGFzIENvbXBvbmVudEZhY3Rvcnk8YW55PltdLFxuICAgIH07XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTpcbiAgICAgIFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jKG1vZHVsZVR5cGUpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+ICh7XG4gICAgICAgICAgICAgICAgbmdNb2R1bGVGYWN0b3J5OiByZXN1bHQubmdNb2R1bGVGYWN0b3J5IGFzIE5nTW9kdWxlRmFjdG9yeTxUPixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3JpZXM6IHJlc3VsdC5jb21wb25lbnRGYWN0b3JpZXMgYXMgQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sXG4gICAgICAgICAgICAgIH0pKTtcbiAgfVxuICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pIHsgdGhpcy5fZGVsZWdhdGUubG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXMpOyB9XG4gIGhhc0FvdFN1bW1hcnkocmVmOiBUeXBlPGFueT4pOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmhhc0FvdFN1bW1hcnkocmVmKTsgfVxuICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkgYXMgQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgfVxuICBjbGVhckNhY2hlKCk6IHZvaWQgeyB0aGlzLl9kZWxlZ2F0ZS5jbGVhckNhY2hlKCk7IH1cbiAgY2xlYXJDYWNoZUZvcih0eXBlOiBUeXBlPGFueT4pIHsgdGhpcy5fZGVsZWdhdGUuY2xlYXJDYWNoZUZvcih0eXBlKTsgfVxuICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiBtZXRhICYmIG1ldGEuaWQgfHwgdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYEppdENvbXBpbGVyYCBhbmQgaXRzIGRlcGVuZGVuY2llcyB0byB1c2UgZm9yXG4gKiB0ZW1wbGF0ZSBjb21waWxhdGlvbi5cbiAqL1xuY29uc3QgQ09NUElMRVJfUFJPVklERVJTX19QUkVfUjNfXyA9IDxTdGF0aWNQcm92aWRlcltdPltcbiAge3Byb3ZpZGU6IENvbXBpbGVSZWZsZWN0b3IsIHVzZVZhbHVlOiBuZXcgSml0UmVmbGVjdG9yKCl9LFxuICB7cHJvdmlkZTogUmVzb3VyY2VMb2FkZXIsIHVzZVZhbHVlOiBfTk9fUkVTT1VSQ0VfTE9BREVSfSxcbiAge3Byb3ZpZGU6IEppdFN1bW1hcnlSZXNvbHZlciwgZGVwczogW119LFxuICB7cHJvdmlkZTogU3VtbWFyeVJlc29sdmVyLCB1c2VFeGlzdGluZzogSml0U3VtbWFyeVJlc29sdmVyfSxcbiAge3Byb3ZpZGU6IENvbnNvbGUsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IExleGVyLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBQYXJzZXIsIGRlcHM6IFtMZXhlcl19LFxuICB7XG4gICAgcHJvdmlkZTogYmFzZUh0bWxQYXJzZXIsXG4gICAgdXNlQ2xhc3M6IEh0bWxQYXJzZXIsXG4gICAgZGVwczogW10sXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBJMThOSHRtbFBhcnNlcixcbiAgICB1c2VGYWN0b3J5OiAocGFyc2VyOiBIdG1sUGFyc2VyLCB0cmFuc2xhdGlvbnM6IHN0cmluZyB8IG51bGwsIGZvcm1hdDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICBjb25maWc6IENvbXBpbGVyQ29uZmlnLCBjb25zb2xlOiBDb25zb2xlKSA9PiB7XG4gICAgICB0cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnMgfHwgJyc7XG4gICAgICBjb25zdCBtaXNzaW5nVHJhbnNsYXRpb24gPVxuICAgICAgICAgIHRyYW5zbGF0aW9ucyA/IGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb24gISA6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lklnbm9yZTtcbiAgICAgIHJldHVybiBuZXcgSTE4Tkh0bWxQYXJzZXIocGFyc2VyLCB0cmFuc2xhdGlvbnMsIGZvcm1hdCwgbWlzc2luZ1RyYW5zbGF0aW9uLCBjb25zb2xlKTtcbiAgICB9LFxuICAgIGRlcHM6IFtcbiAgICAgIGJhc2VIdG1sUGFyc2VyLFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBuZXcgSW5qZWN0KFRSQU5TTEFUSU9OUyldLFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBuZXcgSW5qZWN0KFRSQU5TTEFUSU9OU19GT1JNQVQpXSxcbiAgICAgIFtDb21waWxlckNvbmZpZ10sXG4gICAgICBbQ29uc29sZV0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHRtbFBhcnNlcixcbiAgICB1c2VFeGlzdGluZzogSTE4Tkh0bWxQYXJzZXIsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBUZW1wbGF0ZVBhcnNlciwgZGVwczogW0NvbXBpbGVyQ29uZmlnLCBDb21waWxlUmVmbGVjdG9yLFxuICAgIFBhcnNlciwgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICAgIEkxOE5IdG1sUGFyc2VyLCBDb25zb2xlXVxuICB9LFxuICB7IHByb3ZpZGU6IEppdEV2YWx1YXRvciwgdXNlQ2xhc3M6IEppdEV2YWx1YXRvciwgZGVwczogW10gfSxcbiAgeyBwcm92aWRlOiBEaXJlY3RpdmVOb3JtYWxpemVyLCBkZXBzOiBbUmVzb3VyY2VMb2FkZXIsIFVybFJlc29sdmVyLCBIdG1sUGFyc2VyLCBDb21waWxlckNvbmZpZ119LFxuICB7IHByb3ZpZGU6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZXJDb25maWcsIEh0bWxQYXJzZXIsIE5nTW9kdWxlUmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgRGlyZWN0aXZlUmVzb2x2ZXIsIFBpcGVSZXNvbHZlcixcbiAgICAgICAgICAgICAgICAgICAgICBTdW1tYXJ5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGl2ZU5vcm1hbGl6ZXIsIENvbnNvbGUsXG4gICAgICAgICAgICAgICAgICAgICAgW09wdGlvbmFsLCBTdGF0aWNTeW1ib2xDYWNoZV0sXG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGlsZVJlZmxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICBbT3B0aW9uYWwsIEVSUk9SX0NPTExFQ1RPUl9UT0tFTl1dfSxcbiAgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUixcbiAgeyBwcm92aWRlOiBTdHlsZUNvbXBpbGVyLCBkZXBzOiBbVXJsUmVzb2x2ZXJdfSxcbiAgeyBwcm92aWRlOiBWaWV3Q29tcGlsZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHsgcHJvdmlkZTogTmdNb2R1bGVDb21waWxlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdIH0sXG4gIHsgcHJvdmlkZTogQ29tcGlsZXJDb25maWcsIHVzZVZhbHVlOiBuZXcgQ29tcGlsZXJDb25maWcoKX0sXG4gIHsgcHJvdmlkZTogQ29tcGlsZXIsIHVzZUNsYXNzOiBDb21waWxlckltcGwsIGRlcHM6IFtJbmplY3RvciwgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXBsYXRlUGFyc2VyLCBTdHlsZUNvbXBpbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3Q29tcGlsZXIsIE5nTW9kdWxlQ29tcGlsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bW1hcnlSZXNvbHZlciwgQ29tcGlsZVJlZmxlY3RvciwgSml0RXZhbHVhdG9yLCBDb21waWxlckNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc29sZV19LFxuICB7IHByb3ZpZGU6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgZGVwczogW119LFxuICB7IHByb3ZpZGU6IEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgdXNlRXhpc3Rpbmc6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0sXG4gIHsgcHJvdmlkZTogVXJsUmVzb2x2ZXIsIGRlcHM6IFtQQUNLQUdFX1JPT1RfVVJMXX0sXG4gIHsgcHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHsgcHJvdmlkZTogUGlwZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7IHByb3ZpZGU6IE5nTW9kdWxlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTX19QT1NUX1IzX18gPVxuICAgIDxTdGF0aWNQcm92aWRlcltdPlt7cHJvdmlkZTogQ29tcGlsZXIsIHVzZUZhY3Rvcnk6ICgpID0+IG5ldyBDb21waWxlcigpfV07XG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTID0gQ09NUElMRVJfUFJPVklERVJTX19QUkVfUjNfXztcbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgSml0Q29tcGlsZXJGYWN0b3J5IGltcGxlbWVudHMgQ29tcGlsZXJGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdO1xuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0T3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10pIHtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgIHVzZUppdDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZyxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSBbY29tcGlsZXJPcHRpb25zLCAuLi5kZWZhdWx0T3B0aW9uc107XG4gIH1cbiAgY3JlYXRlQ29tcGlsZXIob3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10gPSBbXSk6IENvbXBpbGVyIHtcbiAgICBjb25zdCBvcHRzID0gX21lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5jb25jYXQob3B0aW9ucykpO1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIENPTVBJTEVSX1BST1ZJREVSUywge1xuICAgICAgICBwcm92aWRlOiBDb21waWxlckNvbmZpZyxcbiAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoe1xuICAgICAgICAgICAgLy8gbGV0IGV4cGxpY2l0IHZhbHVlcyBmcm9tIHRoZSBjb21waWxlciBvcHRpb25zIG92ZXJ3cml0ZSBvcHRpb25zXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBhcHAgcHJvdmlkZXJzXG4gICAgICAgICAgICB1c2VKaXQ6IG9wdHMudXNlSml0LFxuICAgICAgICAgICAgaml0RGV2TW9kZTogaXNEZXZNb2RlKCksXG4gICAgICAgICAgICAvLyBsZXQgZXhwbGljaXQgdmFsdWVzIGZyb20gdGhlIGNvbXBpbGVyIG9wdGlvbnMgb3ZlcndyaXRlIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGFwcCBwcm92aWRlcnNcbiAgICAgICAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBvcHRzLmRlZmF1bHRFbmNhcHN1bGF0aW9uLFxuICAgICAgICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBvcHRzLm1pc3NpbmdUcmFuc2xhdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG9wdHMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW11cbiAgICAgIH0sXG4gICAgICBvcHRzLnByb3ZpZGVycyAhXG4gICAgXSk7XG4gICAgcmV0dXJuIGluamVjdG9yLmdldChDb21waWxlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21lcmdlT3B0aW9ucyhvcHRpb25zQXJyOiBDb21waWxlck9wdGlvbnNbXSk6IENvbXBpbGVyT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdXNlSml0OiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnVzZUppdCkpLFxuICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLmRlZmF1bHRFbmNhcHN1bGF0aW9uKSksXG4gICAgcHJvdmlkZXJzOiBfbWVyZ2VBcnJheXMob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByb3ZpZGVycyAhKSksXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLm1pc3NpbmdUcmFuc2xhdGlvbikpLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcykpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBfbGFzdERlZmluZWQ8VD4oYXJnczogVFtdKTogVHx1bmRlZmluZWQge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfbWVyZ2VBcnJheXMocGFydHM6IGFueVtdW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydCAmJiByZXN1bHQucHVzaCguLi5wYXJ0KSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=