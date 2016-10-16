import { Component, OnInit } from '@angular/core';

import { MapsAPILoader } from 'angular2-google-maps/core';

import { Day, MarkerService, DayService } from '../shared';

declare var google: any;

@Component({
    selector: 'ip-map-search',
    templateUrl: './map-search.component.html',
    styleUrls: ['./map-search.component.css']
})

export class MapSearchComponent implements OnInit {

    selectedDay: Day;
    
    constructor( private _loader: MapsAPILoader, private markerservice: MarkerService, private dayservice: DayService ) {}
    
    ngOnInit() {

        this._loader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById("search-box"), {});

            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                console.log(autocomplete)
                let place = autocomplete.getPlace();
                console.log(place)
                var img = place.photos[1].getUrl({maxWidth:32, maxHeight:32});
                console.log(img)

                var id = this.markerservice.addMarker({
                    lat : place.geometry.location.lat(),
                    lng : place.geometry.location.lng(),
                    title : place.name,
                    label : '',
                    iconUrl : 'public/images/icons/map_pin/pin_' + this.selectedDay.day + '.png',
                    draggable : false
                });

                var iconUrl = this.dayservice.addMarker({
                    id : id,
                    lat : place.geometry.location.lat(),
                    lng : place.geometry.location.lng(),
                    title : place.name,
                    label : '',
                    iconUrl : '',
                    draggable : false
                });

                var input = (<HTMLInputElement>document.getElementById('input-box'));
                input.value = "{ \
                	lat : " + place.geometry.location.lat() + ", \
                	lng : " + place.geometry.location.lng() + ", \
                    title :  " + place.name + " \
                	label : '', \
                	draggable : false \
                }";

                input.click();
            });
        });

        this.dayservice.selectedDays$.subscribe(day => {
            this.selectedDay = day;
        })
    }

    search(term: String): void {
		//this.markerservice.addMarker(term);	 		
	}
}
