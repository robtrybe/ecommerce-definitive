const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(_req, res) => { res.send('<h1>Boa!</h1>')})

module.exports = app;