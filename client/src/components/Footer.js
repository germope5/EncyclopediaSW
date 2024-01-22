import React from 'react';
import '../../../client/src/App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const creatorName = 'Germán Mora'; // Reemplaza con tu nombre

  return (
    <footer className="footer-style">
      <p>&copy; {currentYear} Derechos Reservados | Creado por {creatorName}</p>
    </footer>
  );
};

export default Footer;