const express = require('express');
const logger = require('./utils/logger');
const app = express();

app.route('/').get((req, res) => {
    logger.info("Usuario Autenticado");
    res.send("Perfil do usuario");
})

app.listen(3000, () => {
    logger.info('Server Running')
})