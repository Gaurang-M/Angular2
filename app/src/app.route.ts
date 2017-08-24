//import { ModuleWithProviders } from "@angular/core";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { aboutComponent } from "./components/about/about.component";
import { servicesComponent } from "./components/services/services.component";
import { aboutDetails } from "./components/aboutDetails/aboutDetails.component";


const router : Routes = [
	{path:"", redirectTo: 'about', pathMatch: 'full'},
	{path:"about", component : aboutComponent},
	{path:"services", component : servicesComponent},
	{path:"aboutDetails/:id", component : aboutDetails} //optonal param
];

//export const routeModule : ModuleWithProviders = RouterModule.forRoot(router);
@NgModule({
	imports:[RouterModule.forRoot(router)],
	exports:[RouterModule]
})
export class routerModule{};
export const views = [aboutComponent,servicesComponent,aboutDetails];