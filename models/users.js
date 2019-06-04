const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: 'rider'
  },
  password: {
    type: String,
    required: true
  },
  img: String

});


const User = mongoose.model('User', userSchema);


module.exports = User;