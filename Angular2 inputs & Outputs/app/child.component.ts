import {Component, EventEmitter} from "@angular/core";

@Component({
	selector:"child-component",
	template:`
		<h3>Child</h3><br>
		<input type="text" [(ngModel)]="text" #input (keyup)="onChange(input.value)"/>
		<p>Display parent data here: {{parentData}}</p>
	`,
	inputs: ['parentData'],
	outputs: ['childEvent']
})
export class childComponent{ 	
	public text: string;
	public parentData: string;
    public childEvent = new EventEmitter<string>();
    onChange(value: string){
    	this.childEvent.emit(value);
    }
}
