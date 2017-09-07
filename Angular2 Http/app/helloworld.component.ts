import {Component} from '@angular/core';
import {employeeService} from "./employee.service"

@Component({
	selector: 'hello',
	template: `<strong>Employees</strong><br>
			    <emp-list></emp-list>
			    <emp-details></emp-details>
			  `,
	providers:[employeeService]
})
export class HelloWorldComponent{
	getMessage():string {
		return "Hello World...this is my message";
	}
	public imageUrl: string = "http://placehold.it/500x500";
}