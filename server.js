// express
const express = require('express');
const app = express();
const session = require('express-session');

// mongo

const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI ||
  'mongodb://localhost/touring';

// config

require('dotenv').config();

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.KEY
});
const methodOverride = require('method-override');
const moment = require('moment');
const tripsController = require('./controllers/trips');
const usersController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');

// mongoose connect

mongoose.connection.once('open', () => {
  console.log(`connected to mongo`);
});
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// middleware

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use('/users', usersController);
app.use('/trips', tripsController);
app.use('/sessions', sessionsController);

//routes

app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});


// listening

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});