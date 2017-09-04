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
        this.name = "Gaurang Manjrekar";
        this.number = 8.567;
        this.date = new Date();
    }
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            template: "<H3>String filter: {{name}}</H3><br>\n\t\t\t   <strong>{{name | uppercase}}</strong><br>\n\t\t\t   <strong>{{name | lowercase}}</strong><br>\n\t\t\t   <strong>{{name | slice:'2'}}</strong><br> <!-- starting form index 2-->\n\t\t\t   <strong>{{name | slice:'2':'4'}}</strong><br> <!-- starting from index2 & ending at 3-->\n\t\t\t   <H3>Number filter: {{number}}</H3><br>\n\t\t\t   <strong>{{number | number:'1.2-3'}}</strong><br>\t<!-- before decimal 1, after 2 & max 3-->\n\t\t\t   <strong>{{number | number:'2.2-3'}}</strong><br> <!-- before decimal 2, after 2 & max 3-->\n\t\t\t   <strong>{{number | number:'2.4-4'}}</strong><br> <!-- before decimal 2, after 4 & max 4 adding zero-->\n\t\t\t   <strong>{{number | number:'2.2-2'}}</strong><br> <!-- before decimal 1, after 2 & max 2 rounding off-->\n\t\t\t   <H3>Currency filter: {{number | currency:'eur':true}}</H3><br> <!-- currency 1arg: curncy 2arg: synbol true-->\n\t\t\t   <H3>Date filter: {{date}}</H3><br>\n\t\t\t   <strong>{{date | date:'fullDate'}}</strong><br>\n\t\t\t   <strong>{{date | date:'shortDate'}}</strong><br>\n\t\t\t   <strong>{{date | date:'mediumTime'}}</strong><br>\n\t\t\t  "
        })
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map