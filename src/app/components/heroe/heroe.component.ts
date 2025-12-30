import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  loading: boolean = true;
  error: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const heroId = params['id'];

      this.loading = true;
      this.error = '';
      this.heroe = null;

      this._heroesService.getHeroe(heroId).subscribe(heroe => {
        this.heroe = heroe;
        this.loading = false;
      },
        (err) => {
          console.error(err);
          this.error = 'Error loading hero';
          this.loading = false;
        }
      );
    });
  }
}
