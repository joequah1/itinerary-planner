import { NgModule }      from '@angular/core';
import { SharedModule }       	from './shared/shared.module';

import './shared/rxjs-extensions';

import { AppComponent }  from './app.component';
import { MapSearchComponent } from './home';
import { NavComponent, FooterComponent } from './shared';

import { HomeModule } from './home';

import { DashboardModule } 	from './+dashboard';
import { HeroesModule } 	from './+heroes';

import { HeroService } from './+heroes';

import { routing }        from './app.routing';

@NgModule({
	imports: [
		SharedModule,
		HomeModule,
		HeroesModule,
		DashboardModule,
		routing
	],
	providers: [ HeroService ],
	declarations: [
		AppComponent, NavComponent, FooterComponent, MapSearchComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }