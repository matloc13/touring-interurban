// express

const express = require('express');
const app = express();

// mongo

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/logbox';

// config

require('dotenv').config();

// mongoose connect
mongoose.connection.once('open', () => {
  console.log(`connected to mongo`);
});

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

// middleware

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));







app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});