import React from 'react';
import Mosaico from '../assets/img/mosaico.png';
import ProgressBar from './ProgessBar';

const Card = ({ fecha, titulo, completado }) => {
  return (
    <article style={cardStyles.container}>
      {/* Tarjeta */}
      <div style={cardStyles.tarjeta}>
        <div style={cardStyles.imagen}>
          <p>{fecha}</p>
        </div>
        {/* Mostrar el título del curso */}
        <h5>{titulo}</h5>
        {/* Barra de progreso*/}
        <ProgressBar completado={completado} />
      </div>
    </article>
  );
};

export default Card;

const cardStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '1px 1px 1px 1px #ccc',
    width: '500px',
    height: '200px',
  },
  tarjeta: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
  },
  imagen: {
    backgroundImage: `url(${Mosaico})`,
    backgroundSize: 'cover',
  },
};
