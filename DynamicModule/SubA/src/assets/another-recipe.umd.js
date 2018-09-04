(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser/animations'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('another-recipe', ['exports', '@angular/core', '@angular/platform-browser/animations', 'ng-zorro-antd'], factory) :
    (factory((global['another-recipe'] = {}),global.ng.core,global.ng.platformBrowser.animations,null));
}(this, (function (exports,i0,animations,ngZorroAntd) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AnotherRecipeService = (function () {
        function AnotherRecipeService() {
        }
        AnotherRecipeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AnotherRecipeService.ctorParameters = function () { return []; };
        /** @nocollapse */ AnotherRecipeService.ngInjectableDef = i0.defineInjectable({ factory: function AnotherRecipeService_Factory() { return new AnotherRecipeService(); }, token: AnotherRecipeService, providedIn: "root" });
        return AnotherRecipeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AnotherRecipeComponent = (function () {
        function AnotherRecipeComponent() {
        }
        /**
         * @return {?}
         */
        AnotherRecipeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AnotherRecipeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-AnotherRecipe',
                        template: "\n    <p>\n      another-recipe works!\n      <nz-tag>Tag 1</nz-tag>\n      123\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        AnotherRecipeComponent.ctorParameters = function () { return []; };
        return AnotherRecipeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AnotherRecipeModule = (function () {
        function AnotherRecipeModule() {
        }
        AnotherRecipeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ngZorroAntd.NgZorroAntdModule,
                            animations.BrowserAnimationsModule
                        ],
                        declarations: [AnotherRecipeComponent],
                        exports: [AnotherRecipeComponent]
                    },] },
        ];
        return AnotherRecipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.AnotherRecipeService = AnotherRecipeService;
    exports.AnotherRecipeComponent = AnotherRecipeComponent;
    exports.AnotherRecipeModule = AnotherRecipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci1yZWNpcGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbm90aGVyLXJlY2lwZS9saWIvYW5vdGhlci1yZWNpcGUuc2VydmljZS50cyIsIm5nOi8vYW5vdGhlci1yZWNpcGUvbGliL2Fub3RoZXItcmVjaXBlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5vdGhlci1yZWNpcGUvbGliL2Fub3RoZXItcmVjaXBlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFub3RoZXJSZWNpcGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUFub3RoZXJSZWNpcGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYW5vdGhlci1yZWNpcGUgd29ya3MhXG4gICAgICA8bnotdGFnPlRhZyAxPC9uei10YWc+XG4gICAgICAxMjNcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5vdGhlclJlY2lwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5vdGhlclJlY2lwZUNvbXBvbmVudCB9IGZyb20gJy4vYW5vdGhlci1yZWNpcGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlfSBmcm9tICduZy16b3Jyby1hbnRkJ1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5vdGhlclJlY2lwZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbm90aGVyUmVjaXBlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbm90aGVyUmVjaXBlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O21DQUpEOzs7Ozs7O0FDQUE7UUFlRTtTQUFpQjs7OztRQUVqQix5Q0FBUTs7O1lBQVI7YUFDQzs7b0JBaEJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsUUFBUSxFQUFFLCtGQU1UO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3FDQVpEOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLDZCQUFpQjs0QkFDakJDLGtDQUF1Qjt5QkFDeEI7d0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNsQzs7a0NBWkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=