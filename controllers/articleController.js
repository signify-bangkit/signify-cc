const articleModel = require('../models/articleModel');

const getArticles = async (req, res) => {
  try {
    const articles = await articleModel.getAllArticles();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getArticles,
};
