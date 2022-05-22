import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { catchError,throwError, Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Favourites } from '../models/favourites';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl="http://localhost:4201"


public preferred:Favourites[]= []


  constructor(private http:HttpClient) { }
  getFilms(){
    return this.http.get<Movies[]>(`${this.baseUrl}/movies-popular`)


  }



    getFilm(id:number){
      return this.http.get<Movies>(`${this.baseUrl}/movies-popular/${id}`)
      .pipe(
        catchError(errore => throwError(()=>errore))
      )

    }

  }


