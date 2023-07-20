/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

// Definición de la función 'menuPrincipal', que simplemente devuelve el valor que se le pasa como argumento
function menuPrincipal(value) {
    return value;
}
// Definición del componente 'Encabezado' como una función de React
const Encabezado = (props) => {
    return (
    // Estructura del encabezado (menú)
        <div className="menu">
            <div className="logo">
                <a href="#" onClick={() => menuPrincipal('inicio')} id="">
                    Impresiones_Monikita
                </a>
            </div>
            <nav className="nav">
                <Link to="/">
                    <i className="fa fa-home" aria-hidden="true"></i>Inicio
                </Link>
                <Link to="/nosotros">
                    <i className="fa fa-user" aria-hidden="true"></i>Nosotros
                </Link>
                <Link to="/contacto">
                    <i className="fa fa-envelope" aria-hidden="true"></i>Contacto
                </Link>
                <Link to="/valores">
                    <i className="fa fa-usd" aria-hidden="true"></i>Valores
                </Link>
            </nav>
        </div>
    );
};
// Exporta el componente 'Encabezado' para poder ser utilizado en otros archivos
export default Encabezado;
