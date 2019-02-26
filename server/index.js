const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes');
var cors = require('cors');
const app = express();
const films = require('../database');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://Monika:test123@ds159624.mlab.com:59624/films', ()=> {
    console.log('connected to the database')
});

const db = mongoose.connection;

// db.collection('films').insertMany(films)
   

const port = 9000;

app.use('/', apiRoutes);

app.listen(port, ()=> {
    console.log('server is running on port ' + port)
})

