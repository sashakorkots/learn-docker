'use strict';

import express from 'express';
import moment from 'moment';   
import dotenv from 'dotenv'
import db from './db.js' 
import path from 'path'

dotenv.config()
const port = process.env.PORT;

const app = express();
app.get('/db', (req, res) => {
    db.query('INSERT INTO users (name, email) values ($1, $2)', ['Sasha', 'Korkots'])
    res.send(`database changed| (${moment().format('LLL')})`)
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve("./resorces/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})