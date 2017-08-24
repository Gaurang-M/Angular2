import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {baseComponent} from './components/base/base.component';
import {routerModule, views} from "./app.route";

@NgModule({
	imports: [BrowserModule,routerModule],
	declarations: [baseComponent, views],
	bootstrap: [baseComponent]
})
export class AppModule{}