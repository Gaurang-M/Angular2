import {Injectable} from  "@angular/core";

@Injectable()
export class employeeService{
	getData(){
		return [{
			id: 1,
			name: "Gaurang",
			gender: "Male"
		},{
			id: 2,
			name: "Ram",
			gender: "Male"
		},{
			id: 3,
			name: "Geeta",
			gender: "Female"
		},{
			id: 4,
			name: "Satish",
			gender: "Male"
		},{
			id: 1,
			name: "Aman",
			gender: "Male"
		}]
	}
}