import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/swapiService.js';
import '../../../client/src/App.css';


const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  // Función para obtener el índice del personaje basado en su URL
  const getCharacterIndex = (character) => {
    const urlParts = character.url.split('/');
    return urlParts[urlParts.length - 2]; // El índice se encuentra antes del último segmento en la URL
  };

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await getCharacterById(id);
        setCharacter({
          ...response,
          image_url: `${process.env.PUBLIC_URL}/static/img/people/${getCharacterIndex(response)}.jpg`,
        });
      } catch (error) {
        console.error('Error fetching character detail:', error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  return (
    <div className='CharacterDetails'>
      <h2 className='cd-title'>Detalles del Personaje</h2>
      {character && (
        <div>
          <h1>{character.name}</h1>
          <img className='characterImagen' src={character.image_url} alt={character.name} />
          <p><b>Height:</b> {character.height}</p>
          <p><b>Gender: </b>{character.gender}</p>
          <p><b>Birth Year:</b> {character.birth_year}</p>
          <p><b>Mass:</b>Mass: {character.mass}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;