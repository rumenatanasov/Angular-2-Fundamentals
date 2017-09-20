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
var core_1 = require("@angular/core");
var ReadMoreComponent = (function () {
    function ReadMoreComponent(elementRef) {
        this.elementRef = elementRef;
        this.maxLength = 100;
        this.hideToggle = true;
        this.isCollapsed = true;
    }
    ReadMoreComponent.prototype.toggleView = function () {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    };
    ReadMoreComponent.prototype.determineView = function () {
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        }
        else if (this.isCollapsed == false) {
            this.currentText = this.text;
        }
    };
    ReadMoreComponent.prototype.ngOnChanges = function () {
        this.determineView();
    };
    return ReadMoreComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReadMoreComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ReadMoreComponent.prototype, "maxLength", void 0);
ReadMoreComponent = __decorate([
    core_1.Component({
        selector: 'read-more',
        template: "\n        <div [innerHTML]=\"currentText\">\n        </div>\n            <a [class.hidden]=\"hideToggle\" (click)=\"toggleView()\">Read {{isCollapsed? 'more':'less'}}</a>\n    "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ReadMoreComponent);
exports.ReadMoreComponent = ReadMoreComponent;
//# sourceMappingURL=read-more.component.js.map