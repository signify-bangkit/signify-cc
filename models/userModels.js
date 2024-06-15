const { db, admin } = require('../db');  // Import from db.js

const createUser = async (email, hashedPassword, firstName, lastName) => {
  return db.collection('users').doc(email).set({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

const getUserByEmail = async (email) => {
  return db.collection('users').doc(email).get();
};

const updateUserProfile = async (email, firstName, lastName) => {
  return db.collection('users').doc(email).update({
    firstName,
    lastName,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

module.exports = { createUser, getUserByEmail, updateUserProfile };
