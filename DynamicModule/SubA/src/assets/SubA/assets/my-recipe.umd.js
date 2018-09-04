(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-recipe', ['exports', '@angular/core'], factory) :
    (factory((global['my-recipe'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyRecipeService = (function () {
        function MyRecipeService() {
        }
        MyRecipeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MyRecipeService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyRecipeService.ngInjectableDef = i0.defineInjectable({ factory: function MyRecipeService_Factory() { return new MyRecipeService(); }, token: MyRecipeService, providedIn: "root" });
        return MyRecipeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyRecipeComponent = (function () {
        function MyRecipeComponent() {
        }
        /**
         * @return {?}
         */
        MyRecipeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyRecipeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-MyRecipe',
                        template: "\n    <p>\n      my-recipe works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MyRecipeComponent.ctorParameters = function () { return []; };
        return MyRecipeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyRecipeModule = (function () {
        function MyRecipeModule() {
        }
        MyRecipeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [MyRecipeComponent],
                        exports: [MyRecipeComponent]
                    },] },
        ];
        return MyRecipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MyRecipeService = MyRecipeService;
    exports.MyRecipeComponent = MyRecipeComponent;
    exports.MyRecipeModule = MyRecipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcmVjaXBlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktcmVjaXBlL2xpYi9teS1yZWNpcGUuc2VydmljZS50cyIsIm5nOi8vbXktcmVjaXBlL2xpYi9teS1yZWNpcGUuY29tcG9uZW50LnRzIiwibmc6Ly9teS1yZWNpcGUvbGliL215LXJlY2lwZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeVJlY2lwZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItTXlSZWNpcGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXktcmVjaXBlIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeVJlY2lwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXlSZWNpcGVDb21wb25lbnQgfSBmcm9tICcuL215LXJlY2lwZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015UmVjaXBlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015UmVjaXBlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeVJlY2lwZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzhCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixvQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGlEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O2dDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOzs2QkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==