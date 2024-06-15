const express = require('express');
const { getHistory } = require('../controllers/historyController');
const authenticate = require('../middleware/authenticate');  // Import authenticate middleware

const router = express.Router();

router.get('/', authenticate, getHistory);  // Pastikan rute ini benar

module.exports = router;
