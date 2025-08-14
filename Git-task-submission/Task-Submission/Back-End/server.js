const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const axios = require('axios');
const bcrypt = require("bcrypt");
require('dotenv').config()


const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


//Connect to MongoDB
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));


  const taskSchema = new mongoose.Schema({
    Day: String,
    name: String,
    learnerId: Number,
    frontEndCode: String,
    backEndCode: String,
    comments: String,
    submissionTime: Date
  });
  

  // Create a Task model based on the schema
  const Task = mongoose.model("Task", taskSchema);

  app.post('/submit-task', async (req, res) => {
    try {
      const {
        Day,
        name,
        learnerId,
        frontEndCode,
        backEndCode,
        comments,
        submissionTime
      } = req.body;


    // Check if the user has already submitted a task for the given day
    const existingTask = await Task.findOne({ Day, learnerId });

    if (existingTask) {
      // User has already submitted a task for this day
      return res.status(400).json({ error: 'You have already submitted a task for this day.' });
    }
  
      // Create a new task based on the schema
      const newTask = new Task({
        Day,
        name,
        learnerId,
        frontEndCode,
        backEndCode,
        comments,
        submissionTime
      });
  
      // Save the task to the database
      await newTask.save();
  
      res.status(201).json({ message: 'Task submitted successfully' });
    } catch (error) {
      console.error('Error submitting task:', error);
      res.status(500).json({ error: 'An error occurred while submitting the task.' });
    }
  });
  


app.get('/get-submitted-tasks', async (req, res) => {
  try {
    const submittedTasks = await Task.find(); // Assuming Task is your Mongoose model

    res.status(200).json(submittedTasks);
  } catch (error) {
    console.error('Error fetching submitted tasks:', error);
    res.status(500).json({ error: 'An error occurred while fetching submitted tasks.' });
  }
});

function generateToken(user) {
  const token = jwt.sign({ email: user.email }, 'secret-key', {
    expiresIn: '1h', // Token expiration time
  });
  return token;
}

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });