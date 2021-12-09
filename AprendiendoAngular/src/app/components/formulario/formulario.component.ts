import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
      nombre: "",
      apellidos: "",
      biografia: "",
      genero: ""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    alert("¡Formulario Enviado!");
  }

  eventoClick(){
    alert("Evento click");
  }

  eventoBlur(){
    alert("Evento blur")
  }

  eventoKeyUp(){
    alert("Evento keyup")
  }

}
