import React from "react";

class MiComponente extends React.Component{

    render() {

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón', 'Piña'],
            calorias: 400
        }

        return (
            <React.Fragment>
                <h5>Receta</h5>
                <p><b>Nombre:</b> {receta.nombre}</p>
                <p><b>Calorias:</b> {receta.calorias}</p>
                <p><b>Ingredientes:</b></p>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return <li key={i}>{ingrediente}</li>;
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
        );
    }

}

export default MiComponente