import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {  Routes, RouterModule  } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
     path: 'movies',
    component:MoviesComponent,
}
];

@NgModule({
  declarations: [MoviesComponent,SidenavComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    BrowserModule






  ]
})
export class MoviesModule { }
