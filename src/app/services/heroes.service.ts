import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeroesService {

  // 👇 Pega aquí tu Invoke URL de API Gateway (sin / al final)
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!! (AWS)');
  }

  // ✅ GET /heroes
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.API_URL}/heroes`);
  }

  // ✅ GET /heroes/{heroId}
  getHeroe(heroId: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.API_URL}/heroes/${heroId}`);
  }

  // (Opcional) búsqueda en frontend: tu componente puede filtrar la lista
  // Si quieres mantener el método, lo hacemos en el componente para no duplicar llamadas.
}

export interface Heroe {
  heroId: string;
  name: string;
  bio: string;
  image: string;
  dob: string;
  home: string;
}
