import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { aboutComponent } from "./components/about.component";
import { servicesComponent } from "./components/services.component";

export const router : Routes = [
	{path:"", redirectTo: 'about', pathMatch: 'full'},
	{path:"about", component : aboutComponent},
	{path:"services", component : servicesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
export const views = [aboutComponent,servicesComponent];