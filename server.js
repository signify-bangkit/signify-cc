const express = require('express');
const app = express();

const admin = require('firebase-admin');
const credentials = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/create', async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.email;
    const userJson = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    const response = db.collection('users').doc(id).set(userJson);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
