import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { LoginComponent } from './auth/login/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesModule } from './components/movies/movies.module';

const routes: Routes = [
  {
    path:'movies',
    loadChildren: () =>
      import('./components/movies/movies.module').then((m) => m.MoviesModule)
    ,
  },
  {
    path: '',pathMatch:'full',
   component:MoviesComponent,
},
{
  path: 'favourites',
   component:FavouritesComponent,
},









];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
