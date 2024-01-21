import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

const swapiService = axios.create({
    baseURL,
});

export const getCharacters = (page) => swapiService.get(`people/?page=${page}`);
export const getCharacterId = (id) => swapiService.get(`people/${id}`);