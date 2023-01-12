const fs = require('fs');
const path = require('path');

const resolvedPath = path.resolve(__dirname,"..", 'data', 'users.json');
const parentDir = path.dirname(resolvedPath);
const filePath = path.join(parentDir, 'users.json');


const usersAPI = require("express").Router()

usersAPI.get('/', (request, response) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
          console.error(error);
          response.status(500).send('Error al leer el archivo de usuarios');
          return;
        }
        else{
          response.send(data);
        }
      });

})

usersAPI.get('/:id', (request, response) => {

fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        response.status(500).message('Ruta no encontrada');
        return;
      }
      else{
        const jsonData = JSON.parse(data);
        requestedId = request.params.id;
        const user = jsonData.find((user) => user._id === requestedId);
        if(!user){
          response.status(404).json({"message": "ID de usuario no encontrado"});
        }
        else{
          response.send(user);
        }
      }
    });
})

module.exports = usersAPI;