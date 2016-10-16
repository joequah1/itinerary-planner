import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'my-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
    
    title = 'tour of Heroes';

    constructor( private router: Router, private translate: TranslateService ) {
        translate.addLangs(["en", "jp"]);
        
        translate.setDefaultLang('en');
        translate.use('en');

    }
    
    ngOnInit() {
        
    }
}