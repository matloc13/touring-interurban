// express
const express = require('express');
const app = express();

// mongo
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/touring';

// config

require('dotenv').config();

const methodOverride = require('method-override');
const tripsController = require('./controllers/trips');
const usersController = require('./controllers/users');

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

app.use('/users', usersController);
app.use('/trips', tripsController);



//routes

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});