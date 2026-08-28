const { UserModel } = require("../models/userModel");

async function findUserByEmail(email) {
  return UserModel.findOne({ email });
}

async function findUserById(userId) {
  return UserModel.findById(userId);
}

async function createUser({ name, email, password = null, authProvider }) {
  return UserModel.create({ name, email, password, auth_provider: authProvider });
}

async function deleteUserById(userId) {
  return UserModel.findByIdAndDelete(userId);
}

async function updateUserById(userId, updates) {
  return UserModel.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });
}

module.exports = { findUserByEmail, findUserById, createUser, deleteUserById, updateUserById };
