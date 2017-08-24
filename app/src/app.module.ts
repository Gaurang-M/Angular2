import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloWorldComponent} from './components/helloworld.component';
import {router, routes, views} from "./app.route";

@NgModule({
	imports: [BrowserModule,routes],
	declarations: [HelloWorldComponent, views],
	bootstrap: [HelloWorldComponent]
})
export class AppModule{ }