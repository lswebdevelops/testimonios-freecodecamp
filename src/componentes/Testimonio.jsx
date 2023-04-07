import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img className='imagen-testimonio'
      src={require('../imagenes/testimonio-emma.png')}
      alt='foto de Emma'/>
 
      <div className="contenedor-text-testimonio">
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='text-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;