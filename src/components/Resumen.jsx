import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //Extraer de datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') {
        return null; //De esta forma no sigue el flujo del codigo y el componente no se carga
    }
    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: { primeraMayuscula(marca) }</li>
                <li>Año: { year }</li>
                <li>Plan: { primeraMayuscula(plan) }</li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;