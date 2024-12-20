const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, 
  googleCredential: String,
  registered: { type: Boolean, default: false },
  deviceRegistered: {
    type: Boolean,
    default: false,
  },

  // Progress
  tempProgress: {
    answers: {},
    time: { type: Number, default: 0 },
    currentQuestion: {},
    subProgress: { type: Number, default: 0 },
  },
  // Quiz Progress and Scores
  // quiz: {
  //   gk: {
  //     choose: {},
  //     fillUps: {},
  //     guessByImage: {},
  //     MixedTypeQuiz: {},
  //   }
  // }
});

const User = mongoose.model('User', userSchema);
module.exports = User;