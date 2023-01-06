const express = require('express');
const { port = 3000 } = process.env;
const app = express();

const usersAPI = require('./routes/users');
const cardsAPI = require('./routes/cards');

app.use('/users', usersAPI);
app.use('/cards', cardsAPI);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});