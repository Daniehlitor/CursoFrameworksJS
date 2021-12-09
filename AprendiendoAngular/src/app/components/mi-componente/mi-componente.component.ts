import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  titulo: string = "";
  anio: number = 0;
  comentario: string = "";
  public mostrarPeliculas: boolean = true;

  constructor() {
    this.titulo = "MI COMPONENTE"
    this.anio = new Date().getFullYear();
    this.comentario = "Este es mi componente";
  }

  ngOnInit(): void {
  }

  cambiarPeliculas(){
    this.mostrarPeliculas = !this.mostrarPeliculas;
  }

}
