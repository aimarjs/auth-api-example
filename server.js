const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const jwt    = require('jsonwebtoken');
const config = require('./config');
const User   = require('./app/models/user');

const port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(cors())

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

const router = require('./app/routes');

router(app);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
