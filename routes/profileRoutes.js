const express = require('express');
const { updateProfile } = require('../controllers/profileController');
const authenticate = require('../middleware/authenticate');  // Import authenticate middleware

const router = express.Router();

router.put('/update', authenticate, updateProfile);  // Pastikan rute ini benar

module.exports = router;
