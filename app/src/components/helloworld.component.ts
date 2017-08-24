import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<a routerLink="about">about</a>
				<a routerLink="services">service</a>
				<router-outlet></router-outlet>`
})
export class HelloWorldComponent{
	getMessage():string {
		return "Hello World...this is my message";
	}
}