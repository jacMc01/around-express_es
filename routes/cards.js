const express = require('express');
const cardsAPI = express.Router();

const {
  getCards,
  createCard,
  deleteCard
} = require('../controllers/cards');

cardsAPI.get('/', getCards);
cardsAPI.post('/', createCard);
cardsAPI.delete('/:cardId', deleteCard);

module.exports = cardsAPI;