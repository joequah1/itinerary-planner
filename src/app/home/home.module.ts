import { NgModule }      		from '@angular/core';
import { SharedModule }       	from '../shared/shared.module';

import { HomeComponent } 		from './home.component';
import { SidebarComponent } 	from './sidebar';
import { MapComponent } 		from './map';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MarkerService, MapService, DayService, NavService } from './shared';

import { routing }            	from './home.routing';

@NgModule({
	imports: [
		SharedModule,
		routing,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyB64hyVus1SCBYl7aL8O-kfcH3pICd_HcI',
        	libraries: ['places']
	    })
	],
	providers : [ MarkerService, MapService, DayService, NavService ],
	declarations: [
		HomeComponent, SidebarComponent, MapComponent
	]
})
export class HomeModule { }