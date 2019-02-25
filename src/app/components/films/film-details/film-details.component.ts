import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import Film from './../film';
import { FilmsServiceService } from './../../../services/films-service.service';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  paramsSubscription: Subscription;
  id: number;
  film: Film;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // this.film = this.FilmsServiceService.getFilm
      }
    );
  }

}
