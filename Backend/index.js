const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = require('./app');

// Configuración de middleware
app.use(cors());
app.use(express.json());

// Configuración del puerto del servidor web
const port = process.env.PORT || 3000; // Cambia el puerto a 3001 si es necesario

// URL de conexión a tu base de datos MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portalPDA';

// Conexión a la base de datos MongoDB
mongoose.connect(mongoURI, {
    // Las opciones useNewUrlParser y useUnifiedTopology ya no son necesarias
})
    .then(() => {
        console.log("La conexión a la base de datos funciona correctamente");
        
        // Inicio del servidor web
        app.listen(port, () => {
            console.log(`Servidor del API REST de Portal PDA escuchando en http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1); // Salir si no se puede conectar a la base de datos
    });
