const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const index = require('./routes/index');
const carsRoute = require('./routes/carsRoute');
const motoRoute = require('./routes/motoRoute');

//Rotas
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/users', userRoute);
app.use('/cars',carsRoute);
app.use('/moto',motoRoute);


app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});



module.exports = app;

