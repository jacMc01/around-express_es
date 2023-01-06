const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', './cards.json');

const cardsAPI = (request, response) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error al leer el archivo de cards');
      return;
    }

    response.send(data);
  });
};
console.log(filePath);

module.exports = cardsAPI;