import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/swapiService';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await getCharacterById(id);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character detail:', error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  return (
    <div>
      <h2>Character Detail</h2>
      {character && (
        <div>
          <h3>{character.name}</h3>
          <p>Height: {character.height}</p>
          <p>Gender: {character.gender}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;