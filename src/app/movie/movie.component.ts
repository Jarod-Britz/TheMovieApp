import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface movies{
  name: string;
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies;
  movieName: string;
  @Output() featureSelected = new EventEmitter<string>();

  myControl = new FormControl();
  options: movies[] = [];
  filteredOptions: Observable<movies[]>

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: movies): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): movies[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  search() {
    this.apiService.getMovies(this.movieName).subscribe((data) => {
      this.movies = data['results'];
      console.log(this.movies);

      localStorage.setItem("movies", JSON.stringify(this.movies))
    })
  }

  setMoviesDetails(movies){
    this.apiService.setMovies(movies)
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  

  
}
