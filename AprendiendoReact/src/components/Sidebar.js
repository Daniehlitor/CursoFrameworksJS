import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <aside id="sidebar">
                <div id="navblock" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="asd" className="btn btn-success">Crear Articulo</a>
                </div>
                <div id="" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscar</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn btn-success" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;