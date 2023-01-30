const user = require('../models/user');
const url = require('url');

function getUser(req, res){
    console.log(`URL: http://localhost:3000${req.url}`);
    res.json({ message: 'Conectado correctamente a la URL http://localhost:3000/users' });

    return user.find({})
    .then((users) => res.send({data: users}))
    .catch((err) => res.status(500).send({message: `No se encuentra la pagina`}))
};

function getUserById(req, res){
  user.findById(req.params.id)
  .orFail(() => {
    const err = new Error('No se encontro ningun usuario con ese id')
    err.statusCode = 404;
    throw err;
  })
}

function createUser(req, res) {
  if (!req.body) {
    res.status(400).send({ message: 'Faltan datos para crear el usuario' });
    return;
  }

  const { name, about, avatar } = req.body;
  const user = new User({ name, about, avatar });

  user.save()
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(400).send({ message: 'Hubo un error al guardar el usuario', error: err }));
}

function addProfile(req, res){
  user.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .orFail(() => {
    const err = new Error('No se encontro ningun usuario con ese id')
    err.statusCode = 404;
    throw err;
  })
  .then((updatedUser) => res.send({data: updatedUser}))
  .catch((err) => res.status(400).send({message: `Hubo un error al actualizar el perfil: ${err}`}));
}

function addAvatar(req, res){
  user.findByIdAndUpdate(req.params.id, {avatar: req.body.avatar}, {new: true})
  .orFail(() => {
    const err = new Error('No se encontro ningun usuario con ese id')
    err.statusCode = 404;
    throw err;
  })
  .then((updatedUser) => res.send({data: updatedUser}))
  .catch((err) => res.status(400).send({message: `Hubo un error al actualizar el avatar: ${err}`}));
}

module.exports = {
  getUser,
  getUserById,
  createUser,
  addProfile,
  addAvatar
}