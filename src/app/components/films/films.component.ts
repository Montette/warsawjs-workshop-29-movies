import { FilmsServiceService } from './../../services/films-service.service';
import { Component, OnInit } from '@angular/core';
import Film from './film';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})


export class FilmsComponent implements OnInit {
  public title = "Biblioteka filmów";
  public films$: Observable<Film[]>;
  filteredStatus: '';


  constructor(private filmService: FilmsServiceService, private router: Router) { }

  removeFilm(id: number) {

   return this.filmService.removeFilm(id).subscribe(() => {
     this.router.navigate(['/films']);
   });
  }

  averageRating(rating: number[]): string {
    return ((rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(2)).toString()
  }

  ngOnInit() {
     this.films$ = this.filmService.getFilms();
  }

}


//pipe async - z automatu unsubskrypcja do observable, gdy komponet zostanie zniszczony, zapobiega wyciekom pamieci
// subscribe - zwraca wartosc tego, co ob. emituje, trzeba pamiętac o unsubskrypci - w onDestroy
