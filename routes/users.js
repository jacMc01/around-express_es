const express = require('express');
const bodyParser = require('body-parser');
const usersAPI = express.Router();

const {
  getUser,
  getUserById,
  createUser,
  addProfile,
  addAvatar
} = require('../controllers/users');

// Use body-parser middleware
usersAPI.use(bodyParser.json());
usersAPI.use(bodyParser.urlencoded({ extended: true }));

usersAPI.get('/', getUser);
usersAPI.get('/:id', getUserById);
usersAPI.post('/', createUser);
usersAPI.patch('/me', addProfile);
usersAPI.patch('/me/avatar', addAvatar);

module.exports = usersAPI;