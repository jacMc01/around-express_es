const fs = require('fs');
const path = require('path');

const resolvedPath = path.resolve(__dirname,"..", 'data', 'cards.json');
const parentDir = path.dirname(resolvedPath);
const filePath = path.join(parentDir, 'cards.json');

const cardsAPI = (request, response) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error al leer el archivo de tarjetas (cards)');
      return;
    }
    else{
      response.send(data);
    }
  });
};

module.exports = cardsAPI;