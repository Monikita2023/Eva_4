// Importar la librería React y algunos componentes y utilidades de 'react-router-dom'.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the styles
// Importar los componentes que se utilizarán en la aplicación.
import SeccionInicio from './componentes/SeccionInicio';
import Encabezado from './componentes/Encabezado';
import SeccionNosotros from './componentes/SeccionNosotros';
import SeccionContact from './componentes/SeccionContact';
import PokemonSelector from './componentes/Valores';

// Definir la función App, que es el componente principal de la aplicación.
function App() {
    return (
        // Inicio del componente Router, utilizado para habilitar el enrutamiento en la aplicación.
        <Router>
            <div className="App">
                <Encabezado />
                <Routes>
                    
                    <Route exact path="/" element={<SeccionInicio />} />
                    <Route exact path="/contacto" element={<SeccionContact />} />
                    <Route exact path="/nosotros" element={<SeccionNosotros />} />
                    <Route exact path="/valores" element={<PokemonSelector />} />
                    
                </Routes>
            </div>
        </Router>
    );
}


export default App;
