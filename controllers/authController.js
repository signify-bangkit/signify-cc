const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { createUser, getUserByEmail } = require('../models/userModels');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: true, msg: errors.errors[0].msg });
  }

  try {
    const { email, password, firstName, lastName } = req.body;

    const userDoc = await getUserByEmail(email);
    if (userDoc.exists) {
      return res.status(400).send({ error: true, msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword, firstName, lastName);

    res.status(201).json({ error: false, msg: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ error: true, msg: error.message });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: true, msg: errors.errors[0].msg });
  }

  try {
    const { email, password } = req.body;

    const userDoc = await getUserByEmail(email);
    if (!userDoc.exists) {
      return res.status(404).json({ error: true, msg: 'User not found' });
    }

    const user = userDoc.data();
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ error: true, msg: 'Invalid password' });
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET_KEY,
      // {
      //   expiresIn: '1h',
      // }
    );
    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
