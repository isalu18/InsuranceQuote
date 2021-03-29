import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

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
  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />

      <Contenedorformulario>
        <Formulario
        />
      </Contenedorformulario>
    </Contenedor>
  );
}

export default App;
