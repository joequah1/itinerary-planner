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

	styles = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
	
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
		//this.subscription.unsubscribe();
	}
}
