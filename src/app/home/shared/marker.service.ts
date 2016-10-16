import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Marker } from './marker';

import { MARKERS } from './mock-markers';

@Injectable()
export class MarkerService {

	// Observable navItem source
	private _markersSource = new BehaviorSubject<Marker[]>(MARKERS);
	// Observable navItem stream
	markers$ = this._markersSource.asObservable();

	constructor(private http: Http) { }
	
	// service command
	addMarker(obj : any) {
		var id = MARKERS.length;
		obj['id'] = id;
		MARKERS.push(obj)

		this._markersSource.next(MARKERS);

		return id;
	}

	deleteMarker(obj : any) {

		var m =  MARKERS.filter(marker => marker.id == obj.id)[0];

		MARKERS.splice(MARKERS.indexOf(m), 1);

		this._markersSource.next(MARKERS);
	}

	deleteMarkers(obj: any) {
		for ( var i = 0; i < obj.length; i++ ) {
			var m =  MARKERS.filter(marker => marker.id == obj[i].id)[0];
			MARKERS.splice(MARKERS.indexOf(m), 1);

			this._markersSource.next(MARKERS);
		} 
	}
}


