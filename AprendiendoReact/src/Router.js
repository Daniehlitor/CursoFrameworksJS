import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MiComponente from './components/MiComponente';
import SeccionPruebas from './components/SectionPruebas';
import Peliculas from './components/Peliculas'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Routes>
                    <Route exact path="/" element={<Peliculas/>}/>
                    <Route path="/ruta-pruebas" element={<SeccionPruebas/>}/>
                    <Route path="/mi-componente" element={<MiComponente/>} />
                </Routes>

            </BrowserRouter>
        );
    }
}

export default Router;