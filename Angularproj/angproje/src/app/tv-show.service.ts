import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http:HttpClient) { }
  searchTvShow(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}`);
  }
}

