import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/swapiService';

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await getCharacters(page);
          setCharacters(response.data.results);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      fetchCharacters();
    }, [page]);

    return (
        <div>
          <h1>Star Wars Encyclopedia</h1>
          <ul>
            {characters.map((character) => (
              <li key={character.name}>
                <Link to={`/characters/${character.url.split('/').reverse()[1]}`}>
                  {character.name}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
      );
};

export default Home;
    
