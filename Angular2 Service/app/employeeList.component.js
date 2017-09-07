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
var employee_service_1 = require("./employee.service");
var EmployeeList = /** @class */ (function () {
    function EmployeeList(_employeeService) {
        this._employeeService = _employeeService;
    }
    EmployeeList.prototype.ngOnInit = function () {
        this.empList = this._employeeService.getData();
    };
    EmployeeList = __decorate([
        core_1.Component({
            selector: "emp-list",
            template: "\n\t\t<h3>List :</h3>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let emp of empList\">{{emp.name}}</li>\n\t\t</ul>\n\t"
        }),
        __metadata("design:paramtypes", [employee_service_1.employeeService])
    ], EmployeeList);
    return EmployeeList;
}());
exports.EmployeeList = EmployeeList;
//# sourceMappingURL=employeeList.component.js.map