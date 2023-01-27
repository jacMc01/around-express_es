const cards = require('../models/user');

function getCards(req, res){
  cards.find({})
  .then((cards) => res.send({data: cards}))
  .catch((err) => res.status(500).send({message: `No se encuentra ninguna card`}));
}

function createCard(req, res){
  const {name, link} = req.body;

  cards.create({name, link, owner: req.user._id})
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

module.exports = {
  getCards,
  createCard,
  deleteCard
}