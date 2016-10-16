import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Marker, Day, MarkerService, MapService, DayService, NavService } from '../shared';

declare var google: any;

@Component({
    selector: 'ip-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    
	markers: Marker[];
	days: Day[];
	selectedDay: Day;

    constructor( private _loader: MapsAPILoader, private markerservice: MarkerService, private marpservice: MapService, private dayservice: DayService, private _navService: NavService ) {}
    
    getMarkers(): void {
		//this.markers = this.markerservice.getMarkers();

		this.markerservice.markers$.subscribe(markers => {
        	this.markers = markers;
        })

        this.dayservice.days$.subscribe(days => {
        	this.days = days;
        })

        this.dayservice.selectedDays$.subscribe(day => {
        	this.selectedDay = day;
        })
	}
	
    ngOnInit() {
        this.getMarkers();
    }

    addDay() {
    	this.dayservice.addDay(1);
    }

    selectDay(day: Day) {
    	this.dayservice.changeSelectedDay(day);
    }

    removeDay (day: Day) {
    	var markers = this.dayservice.deleteDay(day);
    	
    	this.markerservice.deleteMarkers(markers);
    }

    selectMarker(marker: Marker) {
    	this.marpservice.changeFocus({
    		lat : marker.lat,
    		lng : marker.lng
    	});
    }

    removeMarker(event: Event, day: Day, marker: Marker) {
    	event.stopPropagation();

    	this.markerservice.deleteMarker(marker);

    	this.dayservice.removeMarker(day, marker);
    }

    selectedNavItem(item: Object) {
	console.log('selected nav item ' + item);
	this._navService.changeNav(item);
	}
}

