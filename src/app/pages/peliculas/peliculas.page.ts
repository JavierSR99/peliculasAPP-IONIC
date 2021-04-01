import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaService } from '../../services/pelicula.service';
import { IPeliculas } from '../../model/IPeliculas.interface';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  results: Observable<IPeliculas>;
  term: string = '';
  type: string = 'movie';

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {
  }

  searchChanged () {
    this.results = this.peliculaService.searchMovies(this.term, this.type);
  }

}
