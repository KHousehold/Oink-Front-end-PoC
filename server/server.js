/*global require*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
// const UserModel = require('./model/UserModel');

const port = 4000;

mongoose.connect('mongodb://localhost/oink');
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

app.use(cors());

require('./auth/auth');

app.use(bodyParser.json());

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

app.use('/', routes);
//We plugin our jwt strategy as a middleware so only verified users can access this route
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

//Handle errors
app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.get('/', (req, res) => res.send('Hello!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));