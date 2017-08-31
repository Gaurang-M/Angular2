"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var childComponent = (function () {
    function childComponent() {
        this.childEvent = new core_1.EventEmitter();
    }
    childComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    childComponent = __decorate([
        core_1.Component({
            selector: "child-component",
            template: "\n\t\t<h3>Child</h3><br>\n\t\t<input type=\"text\" [(ngModel)]=\"text\" #input (keyup)=\"onChange(input.value)\"/>\n\t\t<p>Display parent data here: {{parentData}}</p>\n\t",
            inputs: ['parentData'],
            outputs: ['childEvent']
        })
    ], childComponent);
    return childComponent;
}());
exports.childComponent = childComponent;
//# sourceMappingURL=child.component.js.map