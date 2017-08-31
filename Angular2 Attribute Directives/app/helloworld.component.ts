import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<p [ngClass]="{classOne:classOneBool,classTwo:classTwoBool}">NgClass directive</p>
			   <button (click)="toggleClass()" >toggle</button>
			   <p [ngStyle]="{'font-style':style,'font-size':size}">NgStyle directive</p>`,
	styles:[`
		.classOne{color:white}
		.classTwo{background-color:black}
	`]
})
export class HelloWorldComponent{
	public classOneBool = true;
	public classTwoBool = true;
	public style = 'italic';
	public size = '50px';
	toggleClass(){
		this.classOneBool = !this.classOneBool;
		this.classTwoBool = !this.classTwoBool;
	}
}