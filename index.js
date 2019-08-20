'use strict';

const express = require('express');
const playstore = require('./Playstore.js')
const app = express();

app.get('/apps', (req, res) => {
  res.json(playstore);
});
  
app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});