import { NgModule }      		from '@angular/core';
import { SharedModule }       	from '../shared/shared.module';

import { DashboardComponent } 	from './dashboard.component';

import { HeroSearchComponent } from '../+heroes';

import { routing }            	from './dashboard.routing';

@NgModule({
	imports: [
		SharedModule,
		routing
	],
	declarations: [
		DashboardComponent, HeroSearchComponent
	]
})
export class DashboardModule { }