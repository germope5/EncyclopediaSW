import React from 'react';
import { Link } from 'react-router-dom';
import '../../../client/src/App.css';

const Pagination = ({ page, totalPages, onChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxPagesToShow = 9;

  // Función para calcular las páginas a mostrar alrededor de la página actual
  const calculatePageRange = () => {
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = page - halfMaxPagesToShow;
    let endPage = page + halfMaxPagesToShow;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

//   const pagesToShow = calculatePageRange();

  return (
    <nav aria-label="Paginación">
      <div className="pagination-container">
        {pages.map((pageNumber) => (
          <span key={pageNumber} className={`pagination-number ${page === pageNumber ? 'active' : ''}`}>
            <Link
              to={`/?page=${pageNumber}`}
              onClick={() => onChange(pageNumber)}
            >
              {pageNumber}
            </Link>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
