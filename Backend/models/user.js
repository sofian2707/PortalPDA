'use strict'

//acceso a la bd
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Esquema 
var UserSchema = Schema({
    email: { type: String, unique: true },
    password: String,
    role: String,
});

module.exports = mongoose.model('User', UserSchema);