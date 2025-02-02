const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  googleCredential: String,
  registered: { type: Boolean, default: false },
  deviceRegistered: { type: Boolean, default: false },

  // Progress
  tempProgress: [
    {
      quizId: String, // Unique identifier for each quiz
      answers: { type: Object, default: {} },
      time: { type: Number, default: 0 },
      currentQuestion: { type: Object, default: {} },
      subProgress: { type: Number, default: 0 },
      result: {type: Number, default: -1}
    },
  ],

  userCredentials: {
    coins: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    allChapterPoints: {
      choose: [
        {
          tag: { type: String },
          coins: { type: Number, default: -1 },
          highScore: { type: Number, default: -1 },
          attempts: { type: Number, default: 0 },
          answers: { type: Array },
          totalScore: { type: Number, default: 0 },
        }
      ],

      fillUps: [
        {
          tag: { type: String },
          coins: { type: Number, default: 0 },
          highScore: { type: Number, default: 0 },
          attempts: { type: Number, default: 0 },
          answers: { type: Array },
          totalScore: { type: Number, default: 0 },
        }
      ],

      guessByImage: [
        {
          tag: { type: String },
          coins: { type: Number, default: 0 },
          highScore: { type: Number, default: 0 },
          attempts: { type: Number, default: 0 },
          answers: { type: Array },
          totalScore: { type: Number, default: 0 },
        }
      ],

      mixedQuiz: [
        {
          tag: { type: String },
          coins: { type: Number, default: 0 },
          highScore: { type: Number, default: 0 },
          attempts: { type: Number, default: 0 },
          answers: { type: Array },
          totalScore: { type: Number, default: 0 },
        }
      ],
    }

  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
