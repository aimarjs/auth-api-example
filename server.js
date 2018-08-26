const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./app/models/user');

const app = express();

const port = process.env.PORT || 4000;
mongoose.connect(config.database, { useMongoClient: true });
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(cors())

const localSignupStrategy = require('./app/passport/local-signup');
const localLoginStrategy = require('./app/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

const authCheckMiddleware = require('./app/middleware/auth-check');
app.use('/api/v1', authCheckMiddleware);

const router = require('./app/routes');

router(app);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
