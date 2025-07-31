const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: String,
  password: String,
  token: String
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
