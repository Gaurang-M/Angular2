import {Component} from '@angular/core';

@Component({
	selector: 'hello',
	template: `<H3>String filter: {{name}}</H3><br>
			   <strong>{{name | uppercase}}</strong><br>
			   <strong>{{name | lowercase}}</strong><br>
			   <strong>{{name | slice:'2'}}</strong><br> <!-- starting form index 2-->
			   <strong>{{name | slice:'2':'4'}}</strong><br> <!-- starting from index2 & ending at 3-->
			   <H3>Number filter: {{number}}</H3><br>
			   <strong>{{number | number:'1.2-3'}}</strong><br>	<!-- before decimal 1, after 2 & max 3-->
			   <strong>{{number | number:'2.2-3'}}</strong><br> <!-- before decimal 2, after 2 & max 3-->
			   <strong>{{number | number:'2.4-4'}}</strong><br> <!-- before decimal 2, after 4 & max 4 adding zero-->
			   <strong>{{number | number:'2.2-2'}}</strong><br> <!-- before decimal 1, after 2 & max 2 rounding off-->
			   <H3>Currency filter: {{number | currency:'eur':true}}</H3><br> <!-- currency 1arg: curncy 2arg: synbol true-->
			   <H3>Date filter: {{date}}</H3><br>
			   <strong>{{date | date:'fullDate'}}</strong><br>
			   <strong>{{date | date:'shortDate'}}</strong><br>
			   <strong>{{date | date:'mediumTime'}}</strong><br>
			  `
})
export class HelloWorldComponent{
	public name : string = "Gaurang Manjrekar";
	public number: number = 8.567;
	public date: Date = new Date();
}