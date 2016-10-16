import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
	data : Array<Object> = [];

	// Observable navItem source
	private _navItemSource = new BehaviorSubject<Object>(this.data);
	// Observable navItem stream
	navItem$ = this._navItemSource.asObservable();

  
  // service command
  changeNav(obj : Object) {

  	this.data.push(obj)

    this._navItemSource.next(this.data);
  }
}