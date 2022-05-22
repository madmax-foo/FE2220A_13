import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesModule } from '../movies/movies.module';
import {MatCardModule} from '@angular/material/card';
import { FavouritesComponent } from './favourites.component';
import {  Routes, RouterModule  } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';


const routes: Routes = [

  { path: 'favourites',
   component:FavouritesComponent,
   canActivate:[AuthGuard]}
  ]

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    MoviesModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ]})
export class FavouritesModule { }
