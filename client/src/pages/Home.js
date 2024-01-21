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

        setCharacters(response.results);
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
      <FiltroBusqueda searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <Link to={`/characters/${character.url.split('/').reverse()[1]}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
    </div>
  );
};

export default Home;

