import {Injectable} from  "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class employeeService{
	public url : string = "apiData/employee.json";
	constructor(private http:Http){}
	getData(){
		return this.http.get(this.url)
		.map((response:Response) => response.json())
		.catch(this.errorHandeling)
	}

	errorHandeling(error : Response){
		return Observable.throw(error || "server error");
	}
}