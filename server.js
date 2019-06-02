// express
const express = require('express');
const app = express();

// mongo
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/touring';

// config
const methodOverride = require('method-override')
require('dotenv').config();

const routesController = require('./controllers/routes')

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

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/routes', routesController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});