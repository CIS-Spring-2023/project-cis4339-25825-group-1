var express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('');  // import the User model from the database

// Login route
router.post('/', (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    User.findOne({ email }, (err, user) => {
      if (err || !user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // Compare password
      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
  
        // Create JWT token
        const token = jwt.sign(
          { email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );
  
        // Return token
        res.status(200).json({ message: 'Authentication successful', token });
      });
    });
  });
  
  module.exports = router;