import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './page/book/book.component';
import { HomeComponent } from './page/home/home.component';
import { MovieComponent } from './page/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'books', component: BookComponent},
  { path: 'movies', component: MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
