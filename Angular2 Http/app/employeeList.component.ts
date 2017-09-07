import {Component, OnInit} from "@angular/core"
import {employeeService} from "./employee.service"

@Component({
	selector:"emp-list",
	template:`
		<h3>List :</h3>
		<strong *ngIf="error">{{error}}</strong>
		<ul>
			<li *ngFor="let emp of empList">{{emp.name}}</li>
		</ul>
	`
})
export class EmployeeList implements OnInit{
	public empList : Array<Object>;
	public error : string;

	constructor(private _employeeService:employeeService){}

	ngOnInit(){
		this._employeeService.getData().subscribe(employeeData => this.empList = employeeData,
			error => this.error = error);
	}
}