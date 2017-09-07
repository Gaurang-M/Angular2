import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";


import {HelloWorldComponent} from './helloworld.component';
import {EmployeeList} from './employeeList.component';
import {EmployeeDetails} from './employee.details';

@NgModule({
	imports: [BrowserModule, HttpModule],
	declarations: [HelloWorldComponent,EmployeeList,EmployeeDetails],
	bootstrap: [HelloWorldComponent]
})
export class AppModule{ }