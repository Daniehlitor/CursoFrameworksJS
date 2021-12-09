import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {

  private peliculas: Pelicula[];

  constructor(){
    this.peliculas = [
      new Pelicula("Spiderman: No Way Home", 2021, "https://imagenes.milenio.com/yvuFASMGUM7j9-IbitgzLnB085Q=/300x186/smart/https://www.milenio.com/uploads/media/2021/11/22/spiderman-way-home-fecha-estreno.jpg"),
      new Pelicula("Hasta El Último Hombre", 2016, "https://clarovideocdn3.clarovideo.net/PELICULAS/HACKSAWRIDGE/EXPORTACION_WEB/SS/HACKSAWRIDGEWHORIZONTAL.jpg?size=675x380"),
      new Pelicula("El Padre", 2021, "https://i.ytimg.com/vi/w_G_MtinuNg/maxresdefault.jpg"),
      new Pelicula("High School Musical", 2006, "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/10/19/15399495009574.jpg")
    ];
  }

  getPeliculas(){
    return this.peliculas;
  }

}
