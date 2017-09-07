import {Component, OnInit} from "@angular/core"
import {employeeService} from "./employee.service"

@Component({
	selector:"emp-details",
	template:`
		<h3>Details :</h3>
		<strong *ngIf="error">{{error}}</strong>
		<div class="borderClass" *ngFor="let emp of empList">
			<div>Name : {{emp.name}}</div><br>
			<div>Id : {{emp.id}}</div><br>
			<div>Gender : {{emp.gender}}</div><br>
		</div>
	`,
	styles: [`
		.borderClass{
			border-bottom: 1px solid black
		}
	`]
})
export class EmployeeDetails implements OnInit{
	public empList : Array<Object>;
	public error : string;

	constructor(private _employeeService:employeeService){}

	ngOnInit(){
			this._employeeService.getData().subscribe(employeeData => this.empList = employeeData,
			error => this.error = error);
	}
}