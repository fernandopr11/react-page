import React from 'react';

function FilterCalendarSection() {
  const filtersStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
      backgroundColor: '#f5f5f5',
    },
    leftContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    rightContainer: {
      marginLeft: 'auto',
    },
    select: {
      marginRight: '10px',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: 'white',
    },
    searchBar: {
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '300px', // Ajusta el ancho según tus preferencias
    },
  };

  return (
    <div style={filtersStyles.container}>
      {/* Elementos a la izquierda */}
      <div style={filtersStyles.leftContainer}>
        {/* Select "Próximos 7 días" */}
        <select style={filtersStyles.select}>
          <option value="proximos7dias">Próximos 7 días</option>
          {/* Otras opciones... */}
        </select>

        {/* Select "Ordenar por Fecha" */}
        <select style={filtersStyles.select}>
          <option value="ordenarPorFecha">Ordenar por Fecha</option>
          {/* Otras opciones... */}
        </select>
      </div>

      {/* Elemento a la derecha */}
      <div style={filtersStyles.rightContainer}>
        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar por tipo o nombre de actividad"
          style={filtersStyles.searchBar}
        />
      </div>
    </div>
  );
}

export default FilterCalendarSection;
