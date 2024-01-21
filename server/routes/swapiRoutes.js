const express = require('express');
const router = express.Router();
const { getCharacters, getCharacterById } = require('../controllers/swapiContoller.js');

router.get('/characters', getCharacters);
router.get('/characters/:id', getCharacterById);

module.exports = router;