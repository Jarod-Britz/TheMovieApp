import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const appRoutes: Routes = [
  { path: "", component: MovieComponent },
  { path: "movie-detail/:id", component: MovieDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing:true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
