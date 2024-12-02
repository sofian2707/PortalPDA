'use strict';

const User = require('../models/user');
const bcrypt = require('bcryptjs');


// Función de prueba
exports.pruebas = (req, res) => {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del API REST con Node y Mongo'
    });
};



// Función para registrar un nuevo usuario
exports.registerUser = async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'El correo electrónico y la contraseña son obligatorios' });
    }

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email: email.toLowerCase() });

        if (existingUser) {
            return res.status(400).send({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const newUser = new User({
            email: email.toLowerCase(),
            password: hashedPassword,
            role: role || 'user',
        });

        // Guardar el usuario en la base de datos
        const user = await newUser.save();
        res.status(201).send({
            message: 'Usuario registrado exitosamente',
            user
        });

    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).send({ message: 'Error al registrar el usuario' });
    }
};