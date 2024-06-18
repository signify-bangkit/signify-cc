const { db } = require('../db');  // Import Firestore instance from db.js

exports.getHistory = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const historySnapshot = await db
      .collection('history')
      .where('email', '==', userEmail)
      .orderBy('createdAt', 'desc')
      .get();

    const history = historySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    console.log(historySnapshot.docs)
    res.status(200).json({ results: history });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
};

exports.deleteHistory = async (req, res) => {
  try {
    const { historyId } = req.body;

    if (!historyId) {
      return res.status(400).json({ error: true, msg: 'Missing required historyId in request body' });
    }

    const docRef = db.collection('history').doc(historyId);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return res.status(404).json({ error: true, msg: 'History entry with the provided ID not found' });
    }

    await docRef.delete();

    res.status(200).json({ error: true, message: 'History entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
};
