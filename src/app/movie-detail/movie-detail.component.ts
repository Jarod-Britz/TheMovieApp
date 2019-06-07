import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId;
  movies;
  details;

APIKEY = '17f709c69af2597f84403a41a627adac';
baseUrl = 'https://api.themoviedb.org/3/';
url = ''.concat(this.baseUrl, 'search/movie?api_key=', this.APIKEY);

@Input()
moviePosterPath: string;
movieName: string;
movieDetails$: Object;
currentMovie;

  constructor(private apiService: ApiService,private movieData: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("id")
    console.log(this.movieId);

    this.apiService.getMovies(this.movieName).subscribe((data) => {
      // console.log(data)
       this.movies = data['results'];
       console.log(this.movies);
     })
      
     this.movies = JSON.parse(localStorage.getItem("movies"));


    this.movies.map((data) => {
      if(data.id == this.movieId){
        console.log(data);
        this.details = data;
      }
    })
     
    //  for (let index = 0; index < this.movies.length; index++) {
    //   if(this.movies[] == this.movieId){
    //       console.log()
    //   }
       
    //  }
    
  }

}
