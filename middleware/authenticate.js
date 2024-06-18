const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({error: true, msg: 'Unauthorized'});
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({error: true, msg: 'Unauthorized'});
  }
};

module.exports = authenticate;
