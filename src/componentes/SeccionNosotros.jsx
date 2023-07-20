import React from 'react';

// Declaración del componente funcional SeccionNosotros que toma un objeto props como argumento.
const SeccionNosotros = (props) => { 
    return (
        // Devuelve la estructura de la sección con el contenido del componente.
        <section className="section bg-white" id="nosotros">
            <div className="container">
                <div className="texto-principal">
                    <h1>
                        Somos un emprendimiento que tiene como objetivo cumplir con el requerimiento de cada cliente, procurando un diseño exclusivo que supla las
                        expectativas solicitadas. Ofrecemos nuestros servicios a todo tipo de clientes: empresas, instituciones y particulares. Creemos que es nuestro
                        deber atender con la máxima profesionalidad a nuestros clientes. Cada encargo que recibimos es revisado en cada uno de los procesos por un
                        equipo de expertos, desde el comienzo hasta el final.
                    </h1>
                    <h2>Somos especialistas en los siguientes trabajos:</h2>
                    <ul>
                        <li>Impresiones Clásicas</li>
                        <li>Impresiones de fotografías</li>
                        <li>Sublimaciones</li>
                        <li>Agendas personalizadas</li>
                    </ul>
                    <h3>¡Atrévete a cotizar con nosotros!</h3>
                </div>
                
            </div>
        </section>
    );
};
// Exportar el componente para que pueda ser utilizado en otras partes de la aplicación.
export default SeccionNosotros;
