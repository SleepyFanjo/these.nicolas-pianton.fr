#!/usr/bin/env node

const express = require('express')
const path = require('path');
const static = require('node-static');
const dotenv = require('dotenv');

dotenv.config();
const app = express()
const port = process.env.PORT || '3001'

const fileServer = new static.Server('./file');

app.use(express.static(path.join(__dirname, 'frontend/dist/app/')));

app.get('/file', (req, res) => {
  const passwordSubmited = req.query.password

  if (passwordSubmited === process.env.PASSWORD) {
    fileServer.serveFile('/' + process.env.FILE_NAME, 200, {}, req, res);
  } else {
    res.status(403).send('Mot de passe incorrect')
  }
})

app.listen(port)
