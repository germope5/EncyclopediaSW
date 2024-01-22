import React from 'react';
import '../../../client/src/App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const creatorName = 'Germán Mora'; // Reemplaza con tu nombre

  return (
    <footer className="footer-style">
      <p>&copy; {currentYear} Derechos Reservados | Creado por {creatorName}</p>
      <a href='https://swapi.dev/' className='enlaceSWAPI' target="_blank"><p className='swapi-title'>Comprobar SWAPI</p></a>
      <a href='mailto:dmm71317@gmail.com' className='enlaceCon' target="_blank"><p className='contacto-title'>¡Contáctame!</p></a>
    </footer>
  );
};

export default Footer;