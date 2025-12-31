import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  verHeroe(idx: String) {
    this.router.navigate(['/heroes/hero', idx]);
  }

}
