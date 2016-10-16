import { Marker } from './marker';
import { Observable } from 'rxjs';

export const MARKERS : Marker[] = [
	{
		id: 0,
		lat: 51.673858,
		lng: 7.815982,
		title: 'Hamm',
		label: '',
		iconUrl : 'public/images/icons/map_pin/pin_1.png',
		draggable: true
	},
	{
		id: 1,
		lat: 51.373858,
		lng: 7.215982,
		title: 'Bodenlos',
		label: '',
		iconUrl : 'public/images/icons/map_pin/pin_1.png',
		draggable: false
	},
	{
		id: 2,
		lat: 51.723858,
		lng: 7.895982,
		title: 'Ahlen',
		label: '',
		iconUrl : 'public/images/icons/map_pin/pin_1.png',
		draggable: true
	}
];