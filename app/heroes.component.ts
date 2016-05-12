import {Component} from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';



export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-heroes',
templateUrl:'app/heroes.component.html',
styleUrls:['app/heroes.component.css'],
directives: [HeroDetailComponent]
})




export class HeroesComponent implements OnInit { 
    constructor(private router: Router,
        private heroService: HeroService) { }
title = 'Tour of Heroes';
heroes: Hero[];
selectedHero: Hero;
onSelect(hero: Hero) { this.selectedHero = hero; }
gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
}
getHeroes() { this.heroService.getHeroes().then(heroes=>this.heroes=heroes); }
ngOnInit() {this.getHeroes();}
}