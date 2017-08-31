"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.classOneBool = true;
        this.classTwoBool = true;
        this.style = 'italic';
        this.size = '50px';
    }
    HelloWorldComponent.prototype.toggleClass = function () {
        this.classOneBool = !this.classOneBool;
        this.classTwoBool = !this.classTwoBool;
    };
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            template: "<p [ngClass]=\"{classOne:classOneBool,classTwo:classTwoBool}\">NgClass directive</p>\n\t\t\t   <button (click)=\"toggleClass()\" >toggle</button>\n\t\t\t   <p [ngStyle]=\"{'font-style':style,'font-size':size}\">NgStyle directive</p>",
            styles: ["\n\t\t.classOne{color:white}\n\t\t.classTwo{background-color:black}\n\t"]
        })
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map