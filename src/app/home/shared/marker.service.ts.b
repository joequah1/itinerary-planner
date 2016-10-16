import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Marker } from './marker';

import { MARKERS } from './mock-markers';

@Injectable()
export class MarkerService {

	constructor(private http: Http) { }

	getMarkers(): Observable<Marker[]> {console.log(MARKERS)
		return Observable.of(MARKERS);
		/*
		return this.http
		           .get(`json/marker.json`)
		           .map((r: Response) => r.json() as Marker[]);
		           */
	}

	addMarker(marker: any): Observable<void>  {
		console.log(marker)

		MARKERS.push(marker);

		return null;
	}
}