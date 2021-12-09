import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  tittle?:string = "ESTE ES MI TITULO";
  peliculas: Pelicula[];
  favorita!: Pelicula;
  fecha: Date = new Date();

  constructor(
    private _peliculaSvc: PeliculaService
  ) {
    this.peliculas = _peliculaSvc.getPeliculas();
  }

  ngOnInit(): void {
  }

  mostrarFavorita(_event: any){
    this.favorita = _event.pelicula;
  }

}
