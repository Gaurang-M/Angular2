"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employeeService = /** @class */ (function () {
    function employeeService() {
    }
    employeeService.prototype.getData = function () {
        return [{
                id: 1,
                name: "Gaurang",
                gender: "Male"
            }, {
                id: 2,
                name: "Ram",
                gender: "Male"
            }, {
                id: 3,
                name: "Geeta",
                gender: "Female"
            }, {
                id: 4,
                name: "Satish",
                gender: "Male"
            }, {
                id: 1,
                name: "Aman",
                gender: "Male"
            }];
    };
    employeeService = __decorate([
        core_1.Injectable()
    ], employeeService);
    return employeeService;
}());
exports.employeeService = employeeService;
//# sourceMappingURL=employee.service.js.map