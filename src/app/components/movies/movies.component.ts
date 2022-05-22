import { Component, OnInit } from '@angular/core';
import { FavsService } from 'src/app/auth/favs.service';
import { MoviesService } from 'src/app/auth/movies.service';

import { Movies } from 'src/app/models/movies';



@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  films : Movies[] = [];
  mov:Movies[] = [];
  newColor = false;

  constructor(public filmsSrv:MoviesService, private preferred:FavsService) { }

  ngOnInit(): void {
    this.filmsSrv.getFilms().subscribe((catalogue)=>{
      this.films = catalogue
    }

    )
  }
  addFav(film:Movies){
    this.preferred.addToFav(film);
    this.newColor = !this.newColor;

  }



}

