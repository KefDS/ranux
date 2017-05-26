const express = require('express');
const routes = require('./routes/');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCORS);
app.use('/api/', routes);

function allowCORS(_, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header(
    'Access-Control-Allow-Headers',
    'Content-type, Authorization'
  );
  next();
}

module.exports = app;
