const { db } = require('../server');

const addTranslation = async (email, translatedText) => {
  return db.collection('translations').add({
    email,
    translatedText,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

module.exports = { addTranslation };
