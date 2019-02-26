import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from './../../../services/films-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private filmService: FilmsServiceService) { }

  ngOnInit() {
  }

  onAddFilm() {
    const film = {
      "title": "ZZZZ test film",
      "year": "2014",
      "genres": [
        "Biography",
        "Drama",
        "Thriller"
      ],
      "ratings": [
        4,
        3,
        9,
        2,
        3,
        7,
        9,
        6,
        5,
        4,
        3,
        10,
        8,
        4,
        6,
        6,
        4,
        4,
        6,
        5,
        2,
        9,
        2,
        2,
        1,
        2,
        2,
        8,
        10,
        2
      ],
      "duration": "PT114M",
      "releaseDate": "2015-01-16",
      "averageRating": 0,
      "originalTitle": "",
      "storyline": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.                Written by\nStudio Canal",
      "actors": [
        "Benedict Cumberbatch",
        "Keira Knightley",
        "Matthew Goode"
      ],
      "imdbRating": 8.1,
      "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SY500_CR0,0,340,500_AL_.jpg"
    };

    this.filmService.addFilm(film).subscribe(result => {
      console.log(result);
    })
  }

}

