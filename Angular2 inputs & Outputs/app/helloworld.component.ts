import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `
		<h3>Parent</h3><br>
		<input type="text" [(ngModel)]="text" #input/>
		<p>Display child data here: {{childText}}</p>
		<child-component [parentData]="input.value" (childEvent)="childText = $event"></child-component>
	`,
})
export class HelloWorldComponent{
	public text: string;
	public childText: string;
}