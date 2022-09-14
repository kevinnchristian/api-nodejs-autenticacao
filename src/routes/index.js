const routes = require('express').Router();

// Middleware
const checkToken = require('../middleware/auth');

// Controllers
const usersController = require('../controllers/usersController');
const registerController = require('../controllers/registerController');
const authUserController = require('../controllers/authUserController');

// Public Route
routes.get('/', usersController.index);

// Private Route
routes.get('/user/:id', checkToken, usersController.showUser);

// Register User
routes.post('/auth/register', registerController.store);

// Login User
routes.post('/auth/login', authUserController.store);

module.exports = routes;