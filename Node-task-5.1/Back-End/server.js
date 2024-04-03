const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({
  origin: 'https://660d01c77697269c4d3c9345--effulgent-panda-0eb781.netlify.app', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

const PORT = 3000;
const DB_URL = 'mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/password_reset?retryWrites=true&w=majority';
mongoose
  .connect(DB_URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Could not connect to MongoDB', err));

// Models 

const Email = require('./models/emailModel');
const Token = require('./models/tokenEmailModel');
// Api to enter email
app.post('/api/enter-email', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email already exists in the database
    const existingEmail = await Email.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Creating a new email document in the database
    const newEmail = new Email({ email });
    await newEmail.save();

    res.json({ message: 'Email saved to the database' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Generate a random token securely using crypto
async function generateToken(length, email) {
  const token = crypto.randomBytes(length).toString('hex');
  const expiresAt = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hour expiry

  try {
    const user = await Email.findOne({ email });

    if (!user) {
      console.log('User not found for email:', email);
      return { message: 'User not found' };
    }

    let existingToken = await Token.findOne({ email });

    if (existingToken) {
      existingToken.token = token;
      existingToken.expiresAt = expiresAt;
      await existingToken.save();
      console.log('Updated existing token:', existingToken);
    } else {
      const newToken = new Token({ email, token, expiresAt });
      await newToken.save();
      console.log('Stored new token:', newToken);
    }

    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    return { message: 'Internal server error' };
  }
}


// Using Nodemailer to send emails
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
async function sendEmail(email, token) {
  const resetLink = `https://660d01c77697269c4d3c9345--effulgent-panda-0eb781.netlify.app/reset-password/${token}`; 
  const mailOptions = {
    from: 'kdsomewhatelse@gmail.com',
    to: email,
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

// Endpoint to password reset
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await Email.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a 32-character token securely
    const token = await generateToken(32, email); 
    sendEmail(email, token); 
    res.json({ message: 'Password reset token generated', token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to reset password 
app.post('/api/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Find the token in the database
    const storedToken = await Token.findOne({ token });

    if (!storedToken) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    if (new Date(storedToken.expiresAt) < new Date()) {
      return res.status(400).json({ message: 'Token has expired' });
    }

    // Hash and salt the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database with the hashed password
    const user = await Email.findOne({ email: storedToken.email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = hashedPassword;
    await user.save();

    // Removing the used token from the database
    storedToken.token = null;
    storedToken.expiresAt = null;
    await storedToken.save();

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Endpoint to verify token
app.get('/api/verify-token/:token', async (req, res) => {
  const { token } = req.params;

  try {
    // Find the token in the database
    const storedToken = await Token.findOne({ token });

    if (!storedToken) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    if (new Date(storedToken.expiresAt) < new Date()) {
      return res.status(400).json({ message: 'Token has expired' });
    }

    res.json({ message: 'Token is valid' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
