const express = require('express');
const { body } = require('express-validator');
const { addTranslation } = require('../controllers/translationController');
const authenticate = require('../middleware/authenticate');  // Import authenticate middleware

const router = express.Router();

router.post(
  '/add-translation',
  authenticate,
  [
    body('translatedText').notEmpty().withMessage('Translated text is required'),
  ],
  addTranslation
);

module.exports = router;
