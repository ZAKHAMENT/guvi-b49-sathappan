const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { type } = require("os");
const app = express();
app.use(express.json());
app.use(
   cors({
    origin: 'https://6587ce78bd2a380552df0f82--dashing-shortbread-999330.netlify.app',
    credentials: true,
  })
);
app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongooseConnection: mongoose.connection,
      mongoUrl: "mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/Task_Submission?retryWrites=true&w=majority",
    }),
  })
);
const PORT = 3000;
const DB_URL = "mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/Task_Submission?retryWrites=true&w=majority";

  mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
    process.exit(1); 
  });
// Task Schema
const taskSchema = new mongoose.Schema({
  Day: String,
  username: String,
  frontEndCode: String,
  backEndCode: String,
  comments: String,
  submissionTime: Date,
  isSubmitted: {
    type: Boolean,
    deviceRegistered: {
      type: Boolean,
      default: false,
    },  },
});
// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  registered: Boolean,
});
//barchart schema
const barChartDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  labels: [String],
  datasets: [
    {
      label: String,
       data: [Number],
    },
  ],
});
//polarchart schema
const polarChartDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
    },
  ],
});
const PolarChartDataModel = mongoose.model("PolarChartData", polarChartDataSchema);
const TaskModel = mongoose.model("Task", taskSchema);
const UserModel = mongoose.model("User", userSchema);
const BarChartDataModel = mongoose.model("BarChartData",barChartDataSchema);
// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("auth token", token);
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const decodedToken = jwt.verify(
    token,
    "123456789"
 );
 console.log("decided token" ,decodedToken);
 req.user = {
  username: decodedToken.username,
  }
  next();
};
const updateBarChartOnServer = async (userId, dayNumber, currentDate) => {
  try {
    const filter = { user: userId };
    const update = {
      $push: {
        'datasets.data': dayNumber,
      },
      $addToSet: {
        'labels': `${currentDate} / Day-${dayNumber}`,
      },
    };
    await BarChartDataModel.findOneAndUpdate(filter, update, { upsert: true });
    console.log('Bar chart data updated on the server.');
  } catch (error) {
    console.error('Error updating bar chart data on the server:', error);
  }
};
const updatePolarChartOnServer = async (userId, dayNumber, currentDate) => {
  console.log('updatePolarChartOnServer called with userId:', userId, 'dayNumber:', dayNumber, 'currentDate:', currentDate);
  try {
    const filter = { user: userId };
    const update = {
      $push: {
        'datasets.data': dayNumber,
      },
      $addToSet: {
        'labels': `${currentDate} / Day-${dayNumber}`,
      },
    };
    await PolarChartDataModel.findOneAndUpdate(filter, update, { upsert: true });
    console.log('Polar chart data updated on the server.');
  } catch (error) {
    console.error('Error updating polar chart data on the server:', error);
  }
};

app.post('/submit-task', authenticateUser, async (req, res) => {
  console.log('User Session:', req.user.username);
  try {
    const { Day, frontEndCode, backEndCode, comments, submissionTime } = req.body;
    // Check if the user is authenticated
    // if ( !req.user.username) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }
    // Check if the user has already submitted a task for the specified day
    const existingTask = await TaskModel.findOne({ Day, username: req.user.username });
    if (existingTask) {
      return res.status(400).json({ error: 'You have already submitted a task for this day.' });
    }
    // Set the username from the authenticated user
    const newTask = new TaskModel({
      Day,
      username: req.user.username,
      frontEndCode,
      backEndCode,
      comments,
      submissionTime,
      isSubmitted: true,
    });
    await newTask.save();
    // Extract the day number from newTask.Day
    const dayNumberMatch = newTask.Day.match(/\d+/);
    const dayNumber = dayNumberMatch ? parseInt(dayNumberMatch[0]) : null;
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    // Get the current date
    const currentDate = getCurrentDateTime().split(' ')[0];
    // Inside the submit-task route
 const userId = req.session.user._id;
await updateBarChartOnServer(userId, dayNumber, currentDate);
await updatePolarChartOnServer(userId, dayNumber, currentDate);
    try {
      res.status(201).json({ message: 'Task submitted successfully' });
    } catch (updateError) {
      console.error('Error updating bar chart data:', updateError);
      res.status(500).json({ error: 'An error occurred while updating bar chart data.' });
    }
  } catch (error) {
    console.error('Error submitting task:', error);
    res.status(500).json({ error: 'An error occurred while submitting the task.' });
  } 
});
app.get('/get-bar-chart-data', authenticateUser, async (req, res) => {
  try {
    // Fetch and send the bar chart data for the authenticated user
    const userId = req.session.user._id ; 
    const barChartData = await BarChartDataModel.findOne({ user: userId });
    // If no data is found, send an empty response or handle it accordingly
    if (!barChartData) {
      return res.status(200).json({ labels: [], datasets: [{ label: 'Task no:', data: [] }] });
    }
    res.status(200).json(barChartData);
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    res.status(500).json({ error: 'An error occurred while fetching bar chart data.' });
  }
});

app.get('/get-polar-chart-data', authenticateUser, async (req, res) => {
  try {
    // Fetch and send the Polar Chart data for the authenticated user
    const userId = req.session.user._id ;
    const polarChartData = await PolarChartDataModel.findOne({ user: userId });
    // If no data is found, send an empty response or handle it accordingly
    if (!polarChartData) {
      return res.status(200).json({ labels: [], datasets: [{ label: 'Task no:', data: [] }] });
    }
    res.status(200).json(polarChartData);
  } catch (error) {
    console.error('Error fetching polar chart data:', error);
    res.status(500).json({ error: 'An error occurred while fetching polar chart data.' });
  }
});
app.get('/get-submitted-tasks', authenticateUser,async (req, res) => {
  try {
    // Check if the user is authenticated and the user object is present in the request
   // console.log('User Session:', req.session.user);
    // if (!req.session.user || !req.session.user.username) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    //}
    const submittedTasks = await TaskModel.find({ username: req.user.username });
    res.status(200).json(submittedTasks);
  } catch (error) {
    console.error('Error fetching submitted tasks:', error);
    res.status(500).json({ error: 'An error occurred while fetching submitted tasks.' });
  }
});
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the device is already registered
    const existingUserByDevice = await UserModel.findOne({ deviceRegistered: true });
    if (existingUserByDevice) {
      return res.status(400).json({ error: 'Device is already registered.' });
    }
    const existingUserByUsername = await UserModel.findOne({ username });
    const existingUserByEmail = await UserModel.findOne({ email });
    if (existingUserByUsername) {
      return res.status(400).json({ error: 'Username already exists.' });
    }
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }
    // Set deviceRegistered to true during registration
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, email, password: hashedPassword, registered: true, deviceRegistered: true });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    req.session.user = user;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = generateToken(user);
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(404).json({ error: 'Invalid username or password.' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});
function generateToken(user) {
  const token = jwt.sign({ username: user.username, password: user.password }, '123456789', {
    expiresIn: '3h',
  });
  return token;
}
app.get('/get-submitted-task-days', authenticateUser, async (req, res) => {
  try {
    const submittedTaskDays = await TaskModel.find({ username: req.user.username }).distinct('Day');
    res.status(200).json(submittedTaskDays);
  } catch (error) {
    console.error('Error fetching submitted task days:', error);
    res.status(500).json({ error: 'An error occurred while fetching submitted task days.' });
  }
});
app.get('/check-registration-status', (req, res) => {
  const registrationStatus = true;
  res.json({ registered: registrationStatus });
});
// _____________________________________Forgot password ______________________________________________
const tokens = [];
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.example.email',
  port: 465,
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: 'kdsomewhatelse@gmail.com',
    pass: 'drugjvpuwdfzregv',
  },
  tls: {
    rejectUnauthorized: true,
  },
});
// Send an email with the token link
function sendEmail(email, token) {
  const resetLink = `http://localhost:5173/reset-password/${token}`; // Include the token in the link
  const mailOptions = {
    from: 'kdsomewhatelse@gmail.com', 
    to: email, // Use the provided email address
    subject: 'Password Reset',
    text: `Click the following link to reset your password: ${resetLink}`,
  };
  emailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
// Checking nodemailer
emailTransporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});
// Generate a random token securely using crypto
function generateTokens(length) {
  return crypto.randomBytes(length).toString('hex');
}
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    // Check if the email exists in the database
    const user = await UserModel.findOne({ email });
    const token = generateTokens(32); // Generate a 32-character token securely
    tokens.push({ email, token });
    // Send the token in the response, you can send it via email in a real application
    sendEmail(email, token);
    res.json({ message: 'Password reset token generated', token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Endpoint to reset password
app.post('/api/reset-password/:token', async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    // Find the token in the tokens array
    const storedToken = tokens.find((t) => t.token === token);
    if (!storedToken) {
      return res.status(400).json({ message: 'Invalid token' });
    }
    // Update the user's password in the database
    const user = await UserModel.findOne({ email: storedToken.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Replace 'password' with the hashed and salted newPassword
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save(); // Save the updated user to the database
    // Remove the used token
    const index = tokens.indexOf(storedToken);
    tokens.splice(index, 1);
    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/api/enter-email', async (req, res) => {
  const { email } = req.body;
  try {
    // Check if the email already exists in the database
    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    // Create a new email document in the database
    const newEmail = new UserModel({ email });
    await newEmail.save();
    res.json({ message: 'Email saved to the database' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
