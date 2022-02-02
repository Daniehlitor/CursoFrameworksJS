import React from "react";
import Pelicula from "./Pelicula";

class Peliculas extends React.Component {

    state = {
        peliculas: [
            { titulo: 'Batman v Superman', image: 'https://as.com/ocio/imagenes/2016/03/22/cine/1458639537_473504_1458639748_noticia_grande.jpg' },
            { titulo: 'Gran Torino', image: 'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/312628/312628_600x315.jpg' },
            { titulo: 'Looper', image: 'https://hbomax-images.warnermediacdn.com/images/GYGa0pQQsjlXCeQEAAADJ/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=d382bcbdf506a575c597839d837afc9f&host=art-gallery-latam.api.hbo.com&w=1280' }
        ],
        nombre: "Daniel Jerez",
        favorita: null
    }

    cambiarTitulo = () => {
        const { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins"
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, i) => {
        console.log(i);
        this.setState({
            favorita: pelicula
        });
    }

    render() {
        const pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        let favorita = <p>NO HAY PELICULA FAVORITA</p>
        if (this.state.favorita) {
            favorita = <p style={pStyle}><b>La pelicula favorita de {this.state.nombre} es: </b>{this.state.favorita.titulo}</p>
        }
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p><input type="button" onClick={this.cambiarTitulo} value="Cambiar titulo de batman" /></p>
                {/* {
                    this.state.favorita ? (
                        <p style={pStyle}><b>La pelicula favorita de {this.state.nombre} es: </b>{this.state.favorita.titulo}</p>
                    ) : (
                        <p>NO HAY PELICULA FAVORITA</p>
                    )
                } */}
                {favorita}
                {/* Componente Pelicula */}
                <div id="articles">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                    indice={i}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;