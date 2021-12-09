import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string = "";
  public apellido: string = "";

  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });
  }

  redireccion(){
    this._router.navigate(["pagina-de-prueba", "Victor", "Robles"]);
  }

}
