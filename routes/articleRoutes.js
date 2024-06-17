const express = require('express');
const router = express.Router();
const {
  getArticles,
  getArticleDetail,
} = require('../controllers/articleController');

router.get('/', getArticles);

module.exports = router;
