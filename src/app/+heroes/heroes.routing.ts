import { RouterModule }  from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail';

export const routing = RouterModule.forChild([
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path : 'detail/:id',
		component : HeroDetailComponent
	}
]);
