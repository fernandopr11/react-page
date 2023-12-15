import React from 'react';

function CalendarioHeader() {
  const headerStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',

      marginBottom: '20px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
      backgroundColor: '#f5f5f5',
    },
    title: {
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: 'bold',
      marginLeft: '30px',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    leftContent: {
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      marginRight: '10px',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: 'white',
    },
    rightContent: {
      marginLeft: 'auto',
    },
    button: {
      padding: '8px 16px',
      borderRadius: '5px',
      backgroundColor: '#0e5a7b',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={headerStyles.container}>
      {/* Nombre "Calendario" en la parte superior */}
      <div style={headerStyles.title}>Calendario</div>

      {/* Contenido inferior */}
      <div style={headerStyles.contentContainer}>
        {/* Elementos a la izquierda */}
        <div style={headerStyles.leftContent}>
          {/* Select "Todos los cursos" */}
          <select style={headerStyles.select}>
            <option value="todosLosCursos">Todos los cursos</option>
            {/* Otras opciones... */}
          </select>
        </div>

        {/* Elemento a la derecha */}
        <div style={headerStyles.rightContent}>
          {/* Botón "Nuevo evento" */}
          <button style={headerStyles.button}>Nuevo evento</button>
        </div>
      </div>
    </div>
  );
}

export default CalendarioHeader;
