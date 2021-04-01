import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPeliculas } from '../model/IPeliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url: string = '';
  private apiKey: string = 'e99ab7f3';

  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    
    return this.http.get<IPeliculas>(this.url).pipe(map(results => results['Search']));
  }

  getDetails (id: string) {
    return this.http.get<IPeliculas>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
