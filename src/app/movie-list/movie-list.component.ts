import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../_services/movieApi.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies;
  public errorMessage = null;
  public imageUrl: string = "";

  constructor(private movieservice: MovieApiService, router:) { }

  ngOnInit(): void {
    this.movieservice.getMovieList()
                     .subscribe(
                       data => this.movies = data,
                       error => this.errorMessage = error
                     );
    this.imageUrl = this.movieservice._imageUrl;
  }

  takeToDetails() {

  }

}
