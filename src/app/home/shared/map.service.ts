import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MapService {

	// Observable navItem source
	private _focusSource = new BehaviorSubject<Object>({lat:51.678418,lng:7.809007});
	// Observable navItem stream
	focus$ = this._focusSource.asObservable();

	constructor() { }

	changeFocus(obj : Object) {

		this._focusSource.next(obj);
	}
}


