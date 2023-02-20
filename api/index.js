const express = require('express');
const app = express();
const config = require('./config')
const apiRouter = require('./routes/api')


//db
require('./db/mongoose');
// routes

app.use('/', apiRouter);

app.listen(config.port, function() {
    console.log("serwer slucha... ")
})