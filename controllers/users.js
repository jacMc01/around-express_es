const user = require('../models/user');


function getUser(req, res){
  const reqUrl = url.parse(req.url, true);
    console.log(`URL: ${reqUrl.protocol}//${reqUrl.hostname}:3000${reqUrl.pathname}`);
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

function createUser(req, res){
  console.log("--")
  console.log(req.body)
  console.log(req.body.name)
  if (!req.body) {
    res.status(400).send({message: 'Faltan datos para crear el usuario 333'});
    return;
  }
  const {name, about, avatar}  = req.body;

  console.log(name)

  user.create({name, about, avatar})
  .then((user) => res.send({data: user}))
  .catch((err) => res.status(400).send({message: `Hubo un error!`}));
}

module.exports = {
  getUser,
  getUserById,
  createUser
}