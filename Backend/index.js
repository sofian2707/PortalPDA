const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configuración de middleware
app.use(cors());
app.use(express.json());

// Configuración del puerto del servidor web
const port = process.env.PORT || 3000;

// URL de conexión a tu base de datos MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portalPDA';

// Conectar a MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Conectado a MongoDB');
    // Iniciar el servidor web
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir si no se puede conectar a la base de datos
  });

