import React from 'react';

class Pelicula extends React.Component {

    favorita = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        const {titulo, image} = this.props.pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>
                <h2>{titulo}</h2>
                <span className="date">Hace 5 minutos</span>
                <a href="article.html">Leer más</a>

                <button onClick={this.favorita}>Marcar como favorita</button>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;