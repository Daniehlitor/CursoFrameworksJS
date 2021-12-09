import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula!: Pelicula;
  @Input() index: number = 0;
  @Output() marcarFavorita = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  seleccionarFavorita(){
    this.marcarFavorita.emit({
      pelicula: this.pelicula
    })
  }

}
