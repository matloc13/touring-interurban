const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: 'rider'
  }

});


const User = mongoose.model('User', userSchema);


module.exports.User = User;