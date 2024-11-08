// models/TemporaryUser.js
const mongoose = require('mongoose');

const temporaryUserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  fourDigitCode: String,
  createdAt: { type: Date, default: Date.now, expires: '1h' } // Expire in 1 hour
});

module.exports = mongoose.model('TemporaryUser', temporaryUserSchema);
