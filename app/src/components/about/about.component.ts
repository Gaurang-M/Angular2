import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "about",
	templateUrl:"src/components/about/about.html"
})

export class aboutComponent{
	constructor(private Router : Router){}

	public topics = [
		{"name": "Technology", "id": 1},
		{"name": "Consulting", "id": 2},
		{"name": "Human Resource", "id": 3},
		{"name": "Mobility", "id": 4}
	];

	selectOption(t){
		this.Router.navigate(["/aboutDetails",t.id]);
	}
}