import { RouterModule }  from '@angular/router';

import { ContactUsComponent } from './contactus.component';

export const routing = RouterModule.forChild([
	{
		path: 'contact-us',
		component: ContactUsComponent
	}
]);