import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
	selector: "about",
	templateUrl:"src/components/about/about.html"
})

export class aboutComponent implements OnInit{
	public visitedId : number;
	constructor(private Router : Router, private route : ActivatedRoute){
	}

	ngOnInit(){
		this.route.params.subscribe((params) => {
			this.visitedId = parseInt(params['id']);
		})
	}

	public topics = [
		{"name": "Technology", "id": 1},
		{"name": "Consulting", "id": 2},
		{"name": "Human Resource", "id": 3},
		{"name": "Mobility", "id": 4}
	];

	selectOption(t){
		//this.Router.navigate(["/about",t.id]);
		this.Router.navigate([t.id],{relativeTo:this.route})
	}

	selectedId(t: object){
		return t.id === this.visitedId;
	}
}