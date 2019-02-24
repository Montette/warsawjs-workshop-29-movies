

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { RatingComponent } from './components/shared/rating/rating.component';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    LayoutComponent,
    RatingComponent,
    PageNotFoundComponent,
    FilmDetailsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
