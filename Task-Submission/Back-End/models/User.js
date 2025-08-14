const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String, 
    registered: { type: Boolean, default: false },
    deviceRegistered: {
      type: Boolean,
      default: false,
    },
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;