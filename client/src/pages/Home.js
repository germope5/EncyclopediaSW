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

   // Función para obtener el índice del personaje basado en su URL
   const getCharacterIndex = (character) => {
    const urlParts = character.url.split('/');
    return urlParts[urlParts.length - 2]; // El índice se encuentra antes del último segmento en la URL
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = searchTerm
          ? await searchCharacters(searchTerm)
          : await getCharacters(page);

          const charactersWithImages = response.results.map((character) => ({
            ...character,
            image_url: `${process.env.PUBLIC_URL}/static/img/people/${getCharacterIndex(character)}.jpg`,
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
                <span className='character-name'>{character.name}</span>
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
