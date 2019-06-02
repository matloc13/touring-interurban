const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  username: String,
  origin: {
    type: String,
    required: false
  },
  destination: String,
  startTime: Date,
  stopTime: Date,
  yourTime: Number

}, {
  timestamps: true
});


const Trip = mongoose.model('Trip', routeSchema);

module.exports = Trip;