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

    const userDoc = await db.collection('users').doc(userEmail).get();
    const currentData = userDoc.data();

    res.status(200).json({ error: false, msg: 'User profile updated successfully', results: currentData });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
};
