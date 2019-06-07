const mongoose = require('mongoose');
const User = require('./users')

const tripSchema = new mongoose.Schema({
  username: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  origin: {
    type: String,
    required: false
  },
  destination: String,
  yourTime: Number,
  description: String,
  favorite: Boolean,
  title: String

}, {
  timestamps: true
});



const Trip = mongoose.model('Trip', tripSchema);



module.exports = Trip;