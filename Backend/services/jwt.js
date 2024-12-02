// jwt.js
const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'clave_secreta_curso'; // Asegúrate de que esta clave coincida con la del middleware

exports.createToken = function(user) {
    const payload = {
        sub: user._id,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);
};
