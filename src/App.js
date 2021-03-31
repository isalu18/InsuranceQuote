import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;

const Contenedorformulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  //Extraer datos
  const { cotizacion, datos } = resumen
  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />

      <Contenedorformulario>
        <Formulario
          guardarResumen={ guardarResumen }
          guardarCargando={ guardarCargando }
        />

        { cargando ? <Spinner/> : null }

        <Resumen
          datos={ datos }
        />

        { !cargando 
          ? <Resultado
            cotizacion={ cotizacion }
          />
          : null
        }
      </Contenedorformulario>
    </Contenedor>
  );
}

export default App;
