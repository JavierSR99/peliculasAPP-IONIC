import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  content: object = null;

  constructor(private peliculaService: PeliculaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculaService.getFilmData(id).subscribe(result => {
      this.content = result;
    });
  }

}
