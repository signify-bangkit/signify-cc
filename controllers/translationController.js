const { db, admin } = require('../db');  // Import Firestore instance and admin from db.js
const { validationResult } = require('express-validator');

exports.addTranslation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { translatedText } = req.body;
    const userEmail = req.user.email;
    const timestamp = admin.firestore.FieldValue.serverTimestamp();

    // Add to translations collection
    await db.collection('translations').add({
      email: userEmail,
      translatedText,
      createdAt: timestamp,
    });

    // Add to history collection
    await db.collection('history').add({
      email: userEmail,
      translatedText,
      createdAt: timestamp,
    });

    res.status(201).send('Translation added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
