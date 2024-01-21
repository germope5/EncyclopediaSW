// swapiService.js

import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/people/';

export const getCharacters = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchCharacters = async (term) => {
  try {
    const response = await axios.get(`${BASE_URL}?search=${term}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
