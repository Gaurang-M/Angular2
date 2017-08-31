import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<button (click)="buttonClickHandeler($event)">GM Tuts .. !!</button>
				<input type="text" value="hello" #inputRef />`
})
export class HelloWorldComponent{
	buttonClickHandeler(e){
		console.log(e);
	}
}