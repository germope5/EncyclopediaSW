const axios = require('axios');
const baseURL = 'http://swapi.dev/api/';

exports.getCharacters = async (req, res) => {
    const {page} = req.query;
    try {
        const response = await axios.getAdapter(`${baseURL}people/?page=${page}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getCharacterById = async (req,res) => {
    const {id} = req.params;
    try {
        const response = await axios.getAdapter(`${baseURL}people/${id}`);
        res.json(response.data);
    } catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    } 
};