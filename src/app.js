const express = require('express');
const logger = require('./utils/logger');
const app = express();


app.listen(3000, () => {
    logger.info('Server Running')
})