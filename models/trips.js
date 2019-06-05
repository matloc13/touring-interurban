const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  username: String,
  origin: {
    type: String,
    required: false
  },
  destination: String,
  yourTime: Number,
  description: String

}, {
  timestamps: true
});



const Trip = mongoose.model('Trip', routeSchema);

// Trip.paginate().then({}, {
//   page: 1,
//   limit: 10,
//   prevPage: true,
//   nextPage: true
// }, (err, result) => {
//
// })

module.exports = Trip;