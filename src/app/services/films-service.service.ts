import {
  Injectable
} from '@angular/core';
import * as data from '../../../db.json';
import Film from '../components/films/film'
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {

  private readonly routes = {
    films: `http://localhost:9000/films`,
    film: (id: Number) => `http://localhost:9000/films/${id}`,
  }

  constructor(private http: HttpClient) {}

  getFilms(): Observable < {data: Film[]} > {
    return this.http.get < {data: Film[]} > (this.routes.films);

  }

  removeFilm(id: number): Observable < {} > {

    console.log(id);
    console.log(this.routes.film(id));
    return this.http.delete < {} > (this.routes.film(id), httpOptions);
  }

  getFilm(id: number): Observable < {data: Film} > {
    return this.http.get < {data: Film} > (this.routes.film(id))
  }

  addFilm(film: object): Observable < Film > {
    return this.http.post <Film > (this.routes.films, film);
  }

  countRating(rating: number[]): string {
    return ((rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(2)).toString()
  }

}
