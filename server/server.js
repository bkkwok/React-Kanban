const express = require('express');
const app = express();
const fs = require('fs');
const resolve = require('path').resolve;

app.get('*', (req, res) => {
  fs.sendFile(resolve(process.cwd(), 'build'));
});

module.exports = app;