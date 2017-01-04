import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})


export class ContactUsComponent implements OnInit {
    
    constructor( private router: Router) {}
    
    ngOnInit() {
        
    }
}