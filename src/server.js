const express = require('express');
const server = express();
const routesUsuarios = require('./routes/usuarios');

server.use('/usuarios', routesUsuarios)

module.exports = server;