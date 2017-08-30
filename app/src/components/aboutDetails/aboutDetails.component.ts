import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector : "about-details",
	template : `<h3>About details</h3><br>
				selected option id = {{id}}<br>
				<a (click)="goPrev()">Prev</a>
				<a (click)="goNext()">Next</a><br>
				<div class="btn-group">
					<a (click)="goAbout()" class="btn btn-default">Back</a>
				</div>`
})

export class aboutDetails implements OnInit{
	constructor(private route : ActivatedRoute, private Router : Router){}
	public id : string
	/*ngOnInit(){
		let id = this.route.snapshot.params['id'];
		this.id = id;
	}*/

	ngOnInit(){
		this.route.params.subscribe((params) => {
			this.id = params['id'];
		})
	}

	goPrev(){
		let id = parseInt(this.id) - 1;
		this.Router.navigate(["/about", id]);
	}

	goNext(){
		let id = parseInt(this.id) + 1;
		this.Router.navigate(["/about", id]);
	}

	goAbout(){
		//this.Router.navigate(["/about", {id:this.id}]);
		this.Router.navigate(['../',{id:this.id}],{relativeTo: this.route})
	}

}
