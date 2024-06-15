const { db } = require('../db');  // Import Firestore instance from db.js

exports.getHistory = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const historySnapshot = await db
      .collection('history')
      .where('email', '==', userEmail)
      .get();

    if (historySnapshot.empty) {
      return res.status(404).send('No history found');
    }

    const history = historySnapshot.docs.map((doc) => doc.data());
    res.status(200).json(history);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
