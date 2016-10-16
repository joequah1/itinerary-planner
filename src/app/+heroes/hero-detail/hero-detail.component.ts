import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
    selector : 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy {

    hero : Hero;
    
    constructor(private heroService: HeroService, private route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        this.route.params.forEach((params : Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero)
        })
    }
    
    ngOnDestroy() {
        
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack);
    }
    
    goBack() {
        window.history.back();
    }

}