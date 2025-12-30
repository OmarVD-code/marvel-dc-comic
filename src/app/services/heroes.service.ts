import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeroesService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!! (AWS)');
  }

  // GET /heroes
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.API_URL}/heroes`);
  }

  // GET /heroes/{heroId}
  getHeroe(heroId: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.API_URL}/heroes/${heroId}`);
  }
}

export interface Heroe {
  heroId: string;
  name: string;
  bio: string;
  image: string;
  dob: string;
  home: string;
}
