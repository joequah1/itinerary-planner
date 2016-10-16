import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Day } from './day';

import { DAYS } from './mock-days';

@Injectable()
export class DayService {

	private _daysSource = new BehaviorSubject<Day[]>(DAYS);
	days$ = this._daysSource.asObservable();
	
	private _selectedDaysSource = new BehaviorSubject<Day>(DAYS[0]);
	selectedDays$ = this._selectedDaysSource.asObservable();

	constructor(private http: Http) { }
	
	// service command
	addDay(day: number) {
		DAYS.push({
			day : DAYS.length + 1,
			markers : []
		})

		this._daysSource.next(DAYS);

		/* change selected day to this new day */
		this.changeSelectedDay(DAYS[DAYS.length-1])
	}

	addMarker(obj: any) {
		let i = DAYS.indexOf(this._selectedDaysSource.value);
		DAYS[i].markers.push(obj);

		this._daysSource.next(DAYS);

		return 'public/images/icons/map_pin/pin_' + i + '.png';
	}

	removeMarker(day: Day, obj: any) {
		DAYS[DAYS.indexOf(day)].markers.splice(DAYS[DAYS.indexOf(day)].markers.indexOf(obj), 1);

		this._daysSource.next(DAYS);
	}

	deleteDay(obj: any) {
		console.log(obj);

		var markers = DAYS[DAYS.indexOf(obj)].markers;

		DAYS.splice(DAYS.indexOf(obj), 1);

		this._daysSource.next(DAYS);

		return markers;
	}

	changeSelectedDay(day: Day) {
		this._selectedDaysSource.next(day)
	}
}


