import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Array<Movie> = [];
  movieModel: Movie = {};

  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(
      res => this.movies = res,
      err => console.log(err)
    )
  }

  submit() {
    console.log(this.movieModel);
    
  }

}
