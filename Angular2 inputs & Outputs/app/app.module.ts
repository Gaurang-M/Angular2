import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloWorldComponent} from './helloworld.component';
import {childComponent} from './child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [BrowserModule,FormsModule],
	declarations: [HelloWorldComponent,childComponent],
	bootstrap: [HelloWorldComponent]
})
export class AppModule{ }