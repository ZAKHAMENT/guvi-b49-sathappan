const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  Day: String,
  username: String,
  frontEndCode: String,
  backEndCode: String,
  comments: String,
  submissionTime: Date,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
