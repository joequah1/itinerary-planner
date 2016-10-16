import { NgModule }      		from '@angular/core';
import { SharedModule }       	from '../shared/shared.module';

import { HeroesComponent } 		from './heroes.component';
import { HeroDetailComponent } 	from './hero-detail';
import { HeroesListComponent } from './heroes-list'

import { routing }            	from './heroes.routing';

@NgModule({
	imports: [
		SharedModule,
		routing
	],
	declarations: [
		HeroesComponent,
		HeroDetailComponent,
		HeroesListComponent
	]
})
export class HeroesModule { }