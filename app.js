const mongoose = require('mongoose');
const express = require('express');
const { port = 3000 } = process.env;
const app = express();
const usersAPI = require('./routes/users');
const cardsAPI = require('./routes/cards');

const url = require('url');
const hostUrl = `http://localhost:${port}`;
const parsedUrl = url.parse(hostUrl);
console.log(parsedUrl.href);

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133'
  };

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersAPI);
app.use('/cards', cardsAPI);
app.all('*', (req, res) => {res.status(404).json({"message": "Recurso solicitado no encontrado"});});

const DB_URI = 'mongodb://localhost:27017/aroundb';

mongoose.connect(DB_URI, () => {
  console.log('Connected DB!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
