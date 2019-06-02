const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  username: String,
  origin: {
    type: String,
    required: true
  },
  destination: String,
  startTime: Date,
  stopTime: Date,
  yourTime: Number

});


const Route = mongoose.model('Route', routeSchema);

module.exports.Route = Route;