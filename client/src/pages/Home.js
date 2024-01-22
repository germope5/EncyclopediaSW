import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters, searchCharacters } from '../services/swapiService';
import Pagination from '../components/Pagination.js';
import FiltroBusqueda from '../components/FiltroBusqueda.js';
import '../../../client/src/App.css';

const Home = () => {
  const ITEMS_PER_PAGE = 10;
const [characters, setCharacters] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);

useEffect(() => {
  
  const fetchCharacters = async () => {
    try {
      const response = searchTerm
        ? await searchCharacters(searchTerm)
        : await getCharacters(page);

      // Supongamos que tu API devuelve objetos con propiedades 'name' y 'url'
      // Agregamos una propiedad 'image' que contiene la URL de la imagen local
      const charactersWithImages = response.results.map((character, index) => ({
        ...character,
        image_url: `${process.env.PUBLIC_URL}/static/img/people/${index + 1}.jpg`,

      }));

      setCharacters(charactersWithImages);
      setTotalPages(Math.ceil(response.count / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  fetchCharacters();
}, [page, searchTerm]);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className='Encyclopedia'>
        <h1 className='Title-Home'>Star Wars Encyclopedia</h1>
        <FiltroBusqueda searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ul className='list-characters'>
          {characters.map((character) => (
            <li key={character.name} className='character-item'>
              <Link to={`/characters/${character.url.split('/').reverse()[1]}`}>
                <img className='img-character' src={character.image_url} alt={character.name} />
                <span className='.character-name'>{character.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
      </div>
    </div>
    
  );
};

export default Home;

