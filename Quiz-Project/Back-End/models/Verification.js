const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
    email: String,
    fourDigitCode: String, 
  });
  
  const Verfication = mongoose.model('Verification', verifySchema);
  module.exports = Verfication;