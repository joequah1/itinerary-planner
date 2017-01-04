import { NgModule }      		from '@angular/core';
import { SharedModule }       	from '../shared/shared.module';

import { ContactUsComponent } 	from './contactus.component';

import { routing }            	from './contactus.routing';

@NgModule({
	imports: [
		SharedModule,
		routing
	],
	declarations: [
		ContactUsComponent
	]
})
export class ContactUsModule { }