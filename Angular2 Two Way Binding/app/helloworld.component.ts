import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<input type="text" [(ngModel)]="fName"/>
			   <input type="text" [(ngModel)]="lName"/><br>
			   Name: {{fName}} {{lName}}`
})
export class HelloWorldComponent{
	public fName : string = "John";
	public lName : string = "Doe";
}