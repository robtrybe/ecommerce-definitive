const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());

app.use(require('./routes/index.routes'));

module.exports = app;