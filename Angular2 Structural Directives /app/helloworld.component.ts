import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<p *ngIf="showElement" >show element</p><br>
			  <div [ngSwitch]="color">
			  	<p *ngSwitchCase="'red'">color is red</p>
			  	<p *ngSwitchCase="'blue'">color is blue</p>
			  	<p *ngSwitchCase="'green'">color is green</p>
			  </div><br>
			  <div *ngFor="let color of colors">{{color}}</div>`
})
export class HelloWorldComponent{
	public showElement: Boolean = true;
	public color: String = 'red';
	public colors: Array<string> = ["red","blue","green"];
}