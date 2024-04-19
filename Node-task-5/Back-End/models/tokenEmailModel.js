const mongoose = require('mongoose');

// const tokenSchema = new mongoose.Schema({
//   email: String,
//   token: String,
// });

// const Token = mongoose.model('Token', tokenSchema);
// module.exports = Token;

const TokenSchema = new mongoose.Schema({
  email: String,
  token: String,
  expiresAt: Date
});

const Token = mongoose.model('Token', TokenSchema);
module.exports = Token;
