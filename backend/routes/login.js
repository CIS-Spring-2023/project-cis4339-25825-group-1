var express = require("express");
//const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const router = express.Router();
const env = process.env.ORG;

const { login } = require("../models/models"); // import the Login model from the database

// Login route
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await login.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    //Compare password
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    /*
        // Create JWT token
        const token = jwt.sign(
          { email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );*/

    // Return user data
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post("/test", async (req, res) => {
  const testlogin = {
    email: req.body.email,
    roles: req.body.roles,
    orgs: env,
  };

  if (req.body.password != null || req.body.password != "") {
    testlogin.password = await bcrypt.hash(req.body.password, 10);
  }

  login.create(testlogin);

  res.send("User has been created successfully!");
});

module.exports = router;
