import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  private userInput = new BehaviorSubject("");
  currentInput = this.userInput.asObservable();

  private userSelection = new BehaviorSubject("");
  currentSelection = this.userSelection.asObservable();
  
  API_KEY = '17f709c69af2597f84403a41a627adac';

  movieDetails$:Object;

  constructor(private httpClient: HttpClient) { }
  
  public getMovies(movieName){
  return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query=${movieName}`);
    
  }

  public getMoviesDetails(){
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query}`);
  }

  public setMoviesDetail(movie){
    this.movieDetails$ = movie;
  }

  

  changeSelection(selection: string) {
    this.userSelection.next(selection);
  }
}
