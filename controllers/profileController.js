const { db, admin } = require('../db');  // Import Firestore instance from db.js

exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const userEmail = req.user.email;

    if (!firstName || !lastName) {
      return res.status(400).json({ error: true, msg: 'First name and last name are required' });
    }

    await db.collection('users').doc(userEmail).update({
      firstName,
      lastName,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ error: false, msg: 'User profile updated successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
};
