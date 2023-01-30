const cards = require('../models/card');
const user = require('../models/user')
const mongoose = require('mongoose')

function getCards(req, res){
    console.log(`URL: http://localhost:3000${req.url}`);
    res.json({ message: 'Conectado correctamente a la URL http://localhost:3000/cards' });

  cards.find({})
  .then((cards) => res.send({data: cards}))
  .catch((err) => res.status(500).send({message: `No se encuentra ninguna card`}));
}

function createCard(req, res){
  if(!req.body.name || !req.body.link){
    res.status(400).send({error: "Missing required fields name and link"})
    return;
  }

  const {name, link} = req.body;
  console.log(req.body);
  console.log(req.card)

  cards.create({name, link, owner})
  .then((card) => res.send({data: card}))
  .catch((err) => res.status(400));
}

function deleteCard(req, res){
  cards.findByIdAndDelete(req.params.cardId)
  .orFail(() => {
    const err = new Error('No se encuentra ninguna card con ese id :(');
    err.statusCode = 400;
    throw err;
  })
  .then((card) => res.send({data: card}))
  .catch((err) => res.status(400).send({message: `Hubo un error!`}));
}

function likeCard(req, res){
  cards.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      const err = new Error('No se encuentra ninguna tarjeta con ese id :(');
      err.statusCode = 404;
      throw err;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(400).send({ message: `Hubo un error! ${err}` }));
}

function dislikeCard(req, res) {
  cards.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      const err = new Error('No se encuentra ninguna card con ese id :(');
      err.statusCode = 400;
      throw err;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(400).send({ message: `Hubo un error!` }));
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard
}