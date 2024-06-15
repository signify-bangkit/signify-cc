const { db } = require('../server');

const getUserHistory = async (email) => {
  return db.collection('history').where('email', '==', email).get();
};

const addHistory = async (email, translatedText) => {
  return db.collection('history').add({
    email,
    translatedText,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

module.exports = { getUserHistory, addHistory };
