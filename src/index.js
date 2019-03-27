'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
});

app.post('/registration/new', (req, res) => {
    res.sendFile('./registered.html', {root: __dirname})
});

app.get('/schedule/list', (req, res) => {
    res.sendFile('./schedule.html', {root: __dirname})
});

app.get('/schedule/star', (req, res) => {
    res.sendFile('./schedule.html', {root: __dirname})
});

app.all('*', (req, res) => {
    const path = req.originalUrl;
    res.sendFile('.'+path, {root: __dirname})
});
app.listen(3100);
console.log(`Running on http://localhost:3100`);