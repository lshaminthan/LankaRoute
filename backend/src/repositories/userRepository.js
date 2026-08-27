const { UserModel } = require("../models/userModel");

async function findUserByEmail(email) {
  return UserModel.findOne({ email });
}

async function createUser({ name, email, password = null, authProvider }) {
  return UserModel.create({ name, email, password, auth_provider: authProvider });
}

async function deleteUserById(userId) {
  return UserModel.findByIdAndDelete(userId);
}

module.exports = { findUserByEmail, createUser, deleteUserById };
