import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/swapiService.js';
import '../../../client/src/App.css';
import {charactersWithImages} from '../../src/pages/Home.js';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await getCharacterById(id);
        setCharacter(response);
      } catch (error) {
        console.error('Error fetching character detail:', error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  return (
    <div className='CharacterDetails'>
      <h2>Detalles del Personaje</h2>
      {character && (
        <div>
          <h3>{character.name}</h3>
          <img src={character.image_url} alt={character.name} />
          <p>Height: {character.height}</p>
          <p>Gender: {character.gender}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Mass: {character.mass}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;