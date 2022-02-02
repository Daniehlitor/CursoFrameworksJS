import React from 'react';
import Micomponente from './MiComponente';
import MensajeEstatico from './MensajeEstatico';

class SeccionPruebas extends React.Component {

    state = {
        contador: 0
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         contador: 0
    //     }
    // }

    sumar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <section id="content">
                <h2 className="subheader">Pruebas</h2>
                <Micomponente />
                <MensajeEstatico />
                <p>{this.state.contador}</p>
                <input type="button" value="Sumar" onClick={this.sumar} />
                <input type="button" value="Restar" onClick={this.restar} />
            </section>
        );
    }
}

export default SeccionPruebas;