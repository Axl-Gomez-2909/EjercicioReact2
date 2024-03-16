import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculadoraFormulaCuadratica from './CalculadoraFormulaCuadratica'; // Importa el componente

ReactDOM.render(
  <React.StrictMode>
    <CalculadoraFormulaCuadratica /> {/* Renderiza el componente */}
  </React.StrictMode>,
  document.getElementById('root')
);

