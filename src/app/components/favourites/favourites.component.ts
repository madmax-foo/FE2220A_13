import { Component, OnInit } from '@angular/core';
import { Favourites } from 'src/app/models/favourites';
import { MoviesService } from 'src/app/auth/movies.service';
import { Movies } from 'src/app/models/movies';
import { FavsService } from 'src/app/auth/favs.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
films:Movies[]=[]
public movie:Movies[]=[]

  constructor(private preferiti:FavsService ) { }

  ngOnInit(): void {
    this.preferiti.getFilms().subscribe(res=>{
      this.movie = res;

    })

  }

}
