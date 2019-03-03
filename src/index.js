'use strict';

const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
});

app.all('*', (req, res) => {
    const path = req.originalUrl;
    res.sendFile('.'+path, {root: __dirname})
});
app.listen(8080);
console.log(`Running on http://localhost:8080`);