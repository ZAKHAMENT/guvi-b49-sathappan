const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const UserModel = require('./models/User');
const TemporaryUserModel = require('./models/TemporaryUser');
const { OAuth2Client } = require('google-auth-library');
const User = require('./models/User');
//const User = require('./models/User');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000 * 60,
      secure: true, // Set this if using HTTPS
      httpOnly: true,

    },
    store: MongoStore.create({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day in seconds
      connectTimeoutMS: 30000, // 30 seconds
      mongoUrl: "mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/Main_Project_1?retryWrites=true&w=majority",
    }),
  })  
);

const PORT = 3000;
const DB_URL = "mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/Main_Project_1?retryWrites=true&w=majority"
mongoose.connect(DB_URL, {
  family: 4, // Force IPv4
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => {
  console.error("Could not connect to MongoDB", err);
  process.exit(1);
});

  // Middleware to check if the user is authenticated
  const authenticateUser = (req, res, next) => {
    const $FSA_auth_token = req.headers.authorization.split(" ")[1];
    
    if (!$FSA_auth_token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const decodedToken = jwt.verify(
      $FSA_auth_token,
      "123456789"
  );
  req.user = {
    username: decodedToken.username,
    userId: decodedToken.userId, 
    email: decodedToken.email,
  }
    next();
  };

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const existingUserByUsername = await UserModel.findOne({ username });
    const existingUserByEmail = await UserModel.findOne({ email });

    if (existingUserByUsername) {
      return res.status(400).json({ error: 'Username already exists.' });
    }
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = generateVerificationPin();

    // Save user details in temporary collection
    const temporaryUser = new TemporaryUserModel({
      username,
      email,
      password: hashedPassword,
      fourDigitCode: token
    });
    await temporaryUser.save();

    // Send verification email
    sendEmail(email, token);
    res.status(201).json({ message: 'Verification code sent. Please check your email.', email });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

app.post('/google-register', async (req, res) => {
  const { googleCredential } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: googleCredential,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name } = payload;

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = new UserModel({
        googleId: sub,
        username: name,
        email,
        deviceRegistered: true,
      });
      await user.save();
      return res.status(200).json({ message: 'Google login successful', $FSA_auth_token: generateToken(user) });
    } else {
      if (user.googleId && user.googleId === sub) {
        return res.status(200).json({ message: 'Google login successful', $FSA_auth_token: generateToken(user) });
      } else {
        return res.status(400).json({ error: 'Email is already registered with a different method.' });
      }
    }
  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(500).json({ error: 'Google login failed. Please try again.' });
  }
});

const GOOGLE_CLIENT_ID = '383869457570-gupq720fk2s1unh8bn5vag2ie58533bv.apps.googleusercontent.com';
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

app.post('/google-login', async (req, res) => {
  const { googleCredential } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: googleCredential,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email } = payload;

    let user = await UserModel.findOne({ email });

    if (user) {      
      // User exists, proceed with login
      if (user.googleId && user.googleId === sub) {
        return res.status(400).json({ error: 'Email is already registered with a different method.' });
      } else {        
        return res.status(200).json({ message: 'Google login successful', $FSA_auth_token: generateToken(user) });
      }
    } else {
      return res.status(400).json({ error: 'User does not exist. Please sign up first.' });
    }
  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(500).json({ error: 'Google login failed. Please try again.' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    
    req.user = user;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const $FSA_auth_token = generateToken(user);
      res.status(200).json({ message: 'Login successful', $FSA_auth_token });
    } else {
      res.status(404).json({ error: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});

app.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;

  try {
    const temporaryUser = await TemporaryUserModel.findOne({ email, fourDigitCode: code });

    if (temporaryUser) {
      const newUser = new UserModel({
        username: temporaryUser.username,
        email: temporaryUser.email,
        password: temporaryUser.password,
        registered: true,
        deviceRegistered: true  // Set deviceRegistered to true
      });

      await newUser.save();
      await TemporaryUserModel.deleteOne({ email, fourDigitCode: code });

      res.status(200).json({ success: true, message: 'Verification successful!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid verification code.' });
    }
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/myProfile', authenticateUser, (req, res) => {
  const user = req.user;
  res.json({ username: user.username, _id: user.userId, email: user.email });
});

app.post('/api/user-temp-progress', async (req, res) => {
  const { userId, progress } = req.body;
  // console.log('UPQ:',userId,progress);
  
  if (!userId || !progress) {
    return res.status(400).send("Missing userId, progress data, or quizId");
  }

  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const existingProgress = user.tempProgress.find((p) => p.quizId === progress.tag);
    
    if (!existingProgress) {
      // Add new progress
      user.tempProgress.push({
        quizId: progress.tag || null,
        answers: progress.answers || {},
        time: progress.time || 0,
        currentQuestion: progress.currentQuestion || {},
        subProgress: progress.subProgress || 0,
      });
    } else {
      // Update existing progress
      const index = user.tempProgress.findIndex((p) => p.quizId === progress.tag);
      user.tempProgress[index] = {
        quizId: progress.tag,
        answers: progress.answers || existingProgress.answers,
        time: progress.time || existingProgress.time,
        currentQuestion: progress.currentQuestion || existingProgress.currentQuestion,
        subProgress: progress.subProgress || existingProgress.subProgress,
      };
    }
    await user.save();
    res.status(200).send("Progress saved successfully!");
  } catch (error) {
    console.error("Error saving progress:", error);
    res.status(500).send("Internal server error");
  }
});

app.post('/api/save-attempts', async (req, res) => {
  const { userId, tag, isValidUrl } = req.body;

  if (!userId || !tag || !isValidUrl) {
    console.log('Boooooooooooooom', userId, tag, isValidUrl);
    return res.status(400).send("Missing required fields: userId, genreType, or tag!");
  }

  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Validate allChapterPoints and genreType
    if (!user.userCredentials?.allChapterPoints || !user.userCredentials.allChapterPoints[tag]) {
      return res.status(400).send(`Invalid genreType: ${tag}`);
    }

    // getting the specific tag and save it to the variable called 'genrePoints'
    const genrePoints = user.userCredentials.allChapterPoints[tag];
    // Check if the isValidUrl exists
    const exist = genrePoints.find((p) => p.tag === isValidUrl);

    if (exist) {
      exist.attempts += 1;      
    } else {
      genrePoints.push({
        tag: isValidUrl,
        attempts: 1,
      });
    }
    await user.save();
    res.status(200).send("Attempts saved successfully!");
  } catch (error) {
    console.error("Error saving Attempts:", error);
    res.status(500).send("Internal server error");
  }
});


app.get('/api/retrieve-user-temp-progress', authenticateUser, async (req, res) => {
  const { userId } = req.user;
  
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const progress = user.tempProgress;
    if (progress) res.status(200).json(progress);
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).send("Internal server error");
  }
});


function generateToken(user) {
  const token = jwt.sign({username: user.username, email: user.email, password: user.password, userId: user._id }, '123456789', {
     expiresIn: '3hr',
  });
  return token;
}

const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kdsomewhatelse@gmail.com',
    pass: 'drugjvpuwdfzregv',
  },
});

function sendEmail(email, token) {
  const mailOptions = {
    from: 'kdsomewhatelse@gmail.com',
    to: email,
    subject: 'Email verification',
    text: `To join our quiz-ko, verify your email with this 4-digit pin code: ${token}`,
  };
  emailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function generateVerificationPin() {
  return Math.floor(1000 + Math.random() * 9000);
}

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});