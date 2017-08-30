//import { ModuleWithProviders } from "@angular/core";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { aboutComponent } from "./components/about/about.component";
import { servicesComponent } from "./components/services/services.component";
import { aboutDetails } from "./components/aboutDetails/aboutDetails.component";
import { pageNotFoundComponent } from "./components/pageNotFound/pageNotFound.component";
import { servicesBaseComponent } from "./components/servicesBase/servicesBase.component";
import { servicesDetailsComponent } from "./components/servicesDetails/servicesDetails.component";


const router : Routes = [
	{path:"", redirectTo: 'about', pathMatch: 'full'},
	{path:"about", component : aboutComponent},
	{path:"services", component : servicesBaseComponent, 
		children:[
			{path:"", component : servicesComponent, pathMatch:"full", outlet: 'services'},
			{path:":details", component : servicesDetailsComponent}
		]
	},
	{path:"about/:id", component : aboutDetails}, //optonal param
	{path:"**", component : pageNotFoundComponent}
];

//export const routeModule : ModuleWithProviders = RouterModule.forRoot(router);
@NgModule({
	imports:[RouterModule.forRoot(router)],
	exports:[RouterModule]
})
export class routerModule{};
export const views = [aboutComponent,servicesComponent,aboutDetails, pageNotFoundComponent, servicesBaseComponent, servicesDetailsComponent];