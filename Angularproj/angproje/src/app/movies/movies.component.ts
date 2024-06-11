import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../tv-show.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  selectedOption: string = 'war';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMovies();
    };
    fetchMovies() {
      this.http.get<any[]>(`https://api.tvmaze.com/search/shows?q=${this.selectedOption}`).subscribe(
        (response) => {
          this.movies = response.map(item => item.show);
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
    }
    onSelectOption(event: any) {
      const option = event?.target?.value;
      if (option) {
        this.selectedOption = option;
        this.fetchMovies();
      }
    }
  }