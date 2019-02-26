import { FilmsServiceService } from './../../services/films-service.service';
import { Component, OnInit } from '@angular/core';
import Film from './film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})


export class FilmsComponent implements OnInit {
  public title = "Biblioteka filmów";
  public films$: Film[];
  filteredStatus:string = '';
  property:string = '';
  order:number = 1;
   length: number;
   pageSize:number = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];
   activePageDataChunk: Film[];



  constructor(private filmService: FilmsServiceService, private router: Router) { }

  removeFilm(id: number) {

    this.filmService.removeFilm(id).subscribe();
    const removingFilm = this.films$.find(el => el.id === id);
   this.films$ = this.films$.filter(el => el !== removingFilm);
   if(this.activePageDataChunk.includes(removingFilm)) {
     this.activePageDataChunk = this.activePageDataChunk.filter(el => el !== removingFilm);
   }
  }

  averageRating(rating: number[]): string {
    // return ((rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(2)).toString()
    return this.filmService.countRating(rating)
  }

  sortItems(prop: string) {
    this.property = prop;
    this.order = this.order * (-1);
  }



  ngOnInit() {
     this.filmService.getFilms().subscribe(result => {
       this.films$ = result;
       this.length = this.films$.length;
       this.activePageDataChunk = this.films$.slice(0, this.pageSize)
     });   
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.films$.slice(firstCut, secondCut);
  }

 

}


//pipe async - z automatu unsubskrypcja do observable, gdy komponet zostanie zniszczony, zapobiega wyciekom pamieci
// subscribe - zwraca wartosc tego, co ob. emituje, trzeba pamiętac o unsubskrypci - w onDestroy
