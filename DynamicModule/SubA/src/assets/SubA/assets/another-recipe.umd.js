(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('another-recipe', ['exports', '@angular/core'], factory) :
    (factory((global['another-recipe'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

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
                        template: "\n    <p>\n      another-recipe works!\n    </p>\n  ",
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
                        imports: [],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci1yZWNpcGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbm90aGVyLXJlY2lwZS9saWIvYW5vdGhlci1yZWNpcGUuc2VydmljZS50cyIsIm5nOi8vYW5vdGhlci1yZWNpcGUvbGliL2Fub3RoZXItcmVjaXBlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5vdGhlci1yZWNpcGUvbGliL2Fub3RoZXItcmVjaXBlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFub3RoZXJSZWNpcGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUFub3RoZXJSZWNpcGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYW5vdGhlci1yZWNpcGUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFub3RoZXJSZWNpcGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub3RoZXJSZWNpcGVDb21wb25lbnQgfSBmcm9tICcuL2Fub3RoZXItcmVjaXBlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5vdGhlclJlY2lwZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbm90aGVyUmVjaXBlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbm90aGVyUmVjaXBlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7bUNBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxzREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztxQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNsQzs7a0NBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=