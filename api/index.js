const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api/', routes);

module.exports = app;
