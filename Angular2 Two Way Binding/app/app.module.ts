import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloWorldComponent} from './helloworld.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [HelloWorldComponent],
	bootstrap: [HelloWorldComponent]
})
export class AppModule{ }