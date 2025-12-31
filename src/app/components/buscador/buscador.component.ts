import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;
  term: string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this._heroesService.searchHeroe(this.term).subscribe({
        next: (heroes) => {
          this.heroes = heroes;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    })
  }
}
