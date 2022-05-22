import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Favourites } from '../models/favourites';
import { MoviesService } from './movies.service';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
 public preferred: Movies[]=[]
public filmPr= new BehaviorSubject<any>([]);
public movie : Movies []= [];

  constructor() { }

  getFilms(){
    return this.filmPr.asObservable();
  }
  setMovie(mov:any){
    this.preferred.push(...mov);
    this.filmPr.next(mov);
  }
addToFav(mov:Movies){
  this.preferred.push(mov);
  this.filmPr.next(this.preferred);
  console.log(this.preferred);
}

}
