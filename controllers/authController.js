const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { createUser, getUserByEmail } = require('../models/userModels');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password, firstName, lastName } = req.body;

    const userDoc = await getUserByEmail(email);
    if (userDoc.exists) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword, firstName, lastName);

    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const userDoc = await getUserByEmail(email);
    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }

    const user = userDoc.data();
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password');
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
