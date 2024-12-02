const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

// Ruta para probar
router.get('/pruebas', UserController.pruebas);

// Ruta para registrar un nuevo usuario
router.post('/register', UserController.registerUser);

module.exports = router;
