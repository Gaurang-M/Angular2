import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<strong>{{getMessage()}}</strong><br>
			   <img [src]="imageUrl" /><br>
			   <input type="text" value="angular2" />`
})
export class HelloWorldComponent{
	getMessage():string {
		return "Hello World...this is my message";
	}
	public imageUrl: string = "http://placehold.it/500x500";
}