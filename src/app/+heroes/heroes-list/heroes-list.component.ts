import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
    selector: 'my-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.css']
})

export class HeroesListComponent implements OnInit {
    
    heroes : Hero[];
    
    constructor( private router: Router, private heroService: HeroService) {}
    
    ngOnInit() {
        this.getHeroes();
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


}
