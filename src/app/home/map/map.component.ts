import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Marker, MarkerService, MapService, NavService } from '../shared';

import { Subscription } from 'rxjs/Subscription';

declare var google: any;

@Component({
    selector: 'ip-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	focus : Object = {
		lat : 0,
		lng : 0
	};

	markers: Marker[];

	item: any;
	subscription:Subscription;

    constructor( private router: Router, private markerservice: MarkerService, private marpservice: MapService, private _loader: MapsAPILoader, private _navService: NavService ) {}
    
    getMarkers(): void {
		//this.markers = this.markerservice.getMarkers();
		console.log(this.markers)
	}
	ngOnInit(): void {
		
        this.markerservice.markers$.subscribe(markers => {
        	this.markers = markers;

        	if ( markers.length != 0 ) {
        		this.focus = {
	        		lat : markers[markers.length-1].lat,
	        		lng : markers[markers.length-1].lng
	        	}
        	}
        });

        this.marpservice.focus$.subscribe(focus => {
        	this.focus = focus;
        })
	}
	ngOnDestroy() {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
	}
}
