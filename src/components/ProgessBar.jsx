import React from 'react';

const ProgressBar = ({ completado }) => {
  const progressBarStyles = {
    width: '100%',
    height: '10px',
    borderRadius: '5px',
    background: `linear-gradient(90deg, #007BFF ${completado}%, transparent ${completado}%)`,
  };

  return (
    <div style={progressBarStyles}>
      <span>{completado}% completado</span>
    </div>
  );
};

export default ProgressBar;
