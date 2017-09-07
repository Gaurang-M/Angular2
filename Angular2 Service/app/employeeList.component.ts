import {Component, OnInit} from "@angular/core"
import {employeeService} from "./employee.service"

@Component({
	selector:"emp-list",
	template:`
		<h3>List :</h3>
		<ul>
			<li *ngFor="let emp of empList">{{emp.name}}</li>
		</ul>
	`
})
export class EmployeeList implements OnInit{
	public empList : Array<Object>;

	constructor(private _employeeService:employeeService){}

	ngOnInit(){
		this.empList = this._employeeService.getData();
	}
}