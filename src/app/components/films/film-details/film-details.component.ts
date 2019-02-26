import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import Film from './../film';
import { FilmsServiceService } from './../../../services/films-service.service';
import { createHostListener } from '@angular/compiler/src/core';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  paramsSubscription: Subscription;
  id: number;
  film: Film;
  constructor(private filmService: FilmsServiceService, private route: ActivatedRoute) { }

  averageRating(rating: number[]): string {
    return this.filmService.countRating(rating)
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.filmService.getFilm(this.id).subscribe(result => {
          
          this.film = result.data[0];
        })
      }
    );
  }

}
