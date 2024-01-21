import React from 'react';

const FiltroBusqueda = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='Encyclopedia'>
      <h1 className='Title-Home'>Star Wars Encyclopedia</h1>
      <input
        className='BarraBusqueda'
        type='text'
        placeholder='Buscar por nombre...'
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default FiltroBusqueda;