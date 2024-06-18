const express = require('express');
const { getHistory, deleteHistory } = require('../controllers/historyController');
const authenticate = require('../middleware/authenticate');  // Import authenticate middleware

const router = express.Router();

router.get('/', authenticate, getHistory);  // Pastikan rute ini benar
router.delete('/delete', authenticate, deleteHistory);  // Pastikan rute ini benar

module.exports = router;
