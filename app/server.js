'use strict';
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const db = require('./db.js');
require('dotenv').config();


const port = process.env.PORT;

const app = express();
app.get('/', (req, res) => {
    db.query('INSERT INTO users (name, email) values ($1, $2)', ['Sasha', 'Korkots'])
    res.send(`| (${moment().format('LLL')})`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})