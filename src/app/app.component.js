"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var demo_service_1 = require("./demo.service");
var AppComponent = (function () {
    function AppComponent(_demoService) {
        this._demoService = _demoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    AppComponent.prototype.getRecipes = function () {
        var _this = this;
        this._demoService.getRecipes().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.recipes = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading foods'); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'content',
            templateUrl: '../templates/index.html'
        }),
        __metadata("design:paramtypes", [demo_service_1.DemoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map