const { db, admin } = require('../db');

const getAllArticles = async () => {
  const articlesSnapshot = await db.collection('articles').get();
  console.log(
    'Articles retrieved:',
    articlesSnapshot.docs.map((doc) => doc.data())
  );
  return articlesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

module.exports = {
  getAllArticles,
};
