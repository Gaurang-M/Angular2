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
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(_employeeService) {
        this._employeeService = _employeeService;
    }
    EmployeeDetails.prototype.ngOnInit = function () {
        this.empList = this._employeeService.getData();
    };
    EmployeeDetails = __decorate([
        core_1.Component({
            selector: "emp-details",
            template: "\n\t\t<h3>Details :</h3>\n\t\t<div class=\"borderClass\" *ngFor=\"let emp of empList\">\n\t\t\t<div>Name : {{emp.name}}</div><br>\n\t\t\t<div>Id : {{emp.id}}</div><br>\n\t\t\t<div>Gender : {{emp.gender}}</div><br>\n\t\t</div>\n\t",
            styles: ["\n\t\t.borderClass{\n\t\t\tborder-bottom: 1px solid black\n\t\t}\n\t"]
        }),
        __metadata("design:paramtypes", [employee_service_1.employeeService])
    ], EmployeeDetails);
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
//# sourceMappingURL=employee.details.js.map