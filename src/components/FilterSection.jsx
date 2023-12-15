import React from 'react';

function FilterSection() {
  const filtersStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra suave
      backgroundColor: '#f5f5f5',
    },
    select: {
      marginRight: '10px',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: 'white',
    },
    searchBar: {
      marginRight: '10px',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={filtersStyles.container}>
      {/* Selección "Todos" */}
      <select style={filtersStyles.select}>
        <option value="todos">Todos</option>
        {/* Otras opciones... */}
      </select>

      {/* Barra de búsqueda */}
      <input type="text" placeholder="Buscar" style={filtersStyles.searchBar} />

      {/* Selección "Ordenar por nombre del curso" */}
      <select style={filtersStyles.select}>
        <option value="nombre">Ordenar por nombre del curso</option>
        {/* Otras opciones... */}
      </select>

      {/* Selección "Tarjeta" */}
      <select style={filtersStyles.select}>
        <option value="tarjeta">Tarjeta</option>
        {/* Otras opciones... */}
      </select>
    </div>
  );
}

export default FilterSection;
