const { db } = require('../db');  // Import Firestore instance from db.js

exports.getHistory = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const historySnapshot = await db
      .collection('history')
      .where('email', '==', userEmail)
      .orderBy('createdAt', 'desc')
      .get();

    const history = historySnapshot.docs.map((doc) => doc.data());
    console.log(historySnapshot.docs)
    res.status(200).json({ results: history });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
};
