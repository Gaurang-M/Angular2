import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<p [class.myClass]="myClassBool">i am a parargraph</p>
			   <p [style.color]="myStyleBool? 'red': 'orange'">i am a paragraph styled by style binding</p>`,
	styles:[`
		.myClass{
			color:red;
		}
	`]
})
export class HelloWorldComponent{
	public myClassBool: Boolean = false;
	public myStyleBool: Boolean = false;
}