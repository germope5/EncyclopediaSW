import React from 'react';
import '../../../client/src/App.css';

const FiltroBusqueda = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='FiltroB'>
      <input
        className='BarraBusqueda'
        type='text'
        placeholder='Buscar por nombre...'
        value={searchTerm}
        onChange={onSearchChange}
        style={{
          marginBottom: '10px',
          padding: '8px',
          width: '40%',
          borderRadius: '10px',
          height: '30px',
          display: 'block',
          margin: '0 auto', // Para centrar horizontalmente
          fontSize:'16px'
        }}
      />
    </div>
  );
};

export default FiltroBusqueda;