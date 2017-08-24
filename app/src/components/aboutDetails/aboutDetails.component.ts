import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector : "about-details",
	template : `<h3>About details</h3><br>
				selected option id = {{id}}`
})

export class aboutDetails{
	constructor(private route : ActivatedRoute){}
	public id : string
	ngOnInit(){
		let id = this.route.snapshot.params['id'];
		this.id = id;
	}
}
