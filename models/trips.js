const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  username: String,
  origin: {
    type: String,
    required: false
  },
  destination: String,
  yourTime: Number,
  description: String,
  favorite: Boolean

}, {
  timestamps: true
});



const Trip = mongoose.model('Trip', routeSchema);



module.exports = Trip;