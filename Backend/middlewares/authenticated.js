'use strict';

const jwt = require('jwt-simple'); // Biblioteca para crear y verificar JSON Web Tokens (JWT)
const moment = require('moment'); // Biblioteca para manejar fechas y tiempos de manera sencilla
const secret = 'clave_secreta'; // Clave secreta utilizada para codificar y decodificar los JWT

/**
 * Middleware de autenticación que asegura que el usuario esté autenticado antes de acceder a las rutas protegidas.
 */
exports.ensureAuth = function(req, res, next) {
    // Comprobando si la solicitud tiene el encabezado de autorización.
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'La petición no tiene la cabecera de autenticación' });
    }

    // Eliminando las comillas dobles del token.
    const token = req.headers.authorization.replace(/['"']+/g, '');

    try {
        // Decodificando el token utilizando la clave secreta.
        const payload = jwt.decode(token, secret);

        // Comprobando si el token ha expirado.
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' });
        }
    } catch (ex) {
        // En caso de error al decodificar el token, se considera no válido.
        return res.status(404).send({ message: 'Token no válido' });
    }

    // Añadiendo el payload al objeto de solicitud (request).
    req.user = payload;

    // Llamando al siguiente middleware en la cadena.
    next();
};
