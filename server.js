require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Import profileRoutes
const historyRoutes = require('./routes/historyRoutes');
const translationRoutes = require('./routes/translationRoutes'); // Import translationRoutes
const articleRoutes = require('./routes/articleRoutes');
const { db, admin } = require('./db'); // Import db and admin

const app = express();

// Middleware for JSON and URL-encoded data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for Authentication
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) {
    return res.status(401).json({ error: true, msg: 'Unauthorized' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({
      error: true,
      msg: 'Unauthorized'
    });
  }
};

// Route configurations
app.use('/api/auth', authRoutes);
app.use('/api/profile', authenticate, profileRoutes); // Pastikan di sini
app.use('/api/history', authenticate, historyRoutes); // Pastikan di sini
app.use('/api/translation', authenticate, translationRoutes); // Pastikan di sini
app.use('/api/articles', authenticate, articleRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});

// Export db and admin for use in other modules
module.exports = { db, admin };
