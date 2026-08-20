const { UserModel } = require("../models/userModel");

async function findUserByEmail(email) {
  return UserModel.findOne({ email });
}

async function createUser({ name, email, password }) {
  return UserModel.create({ name, email, password });
}

module.exports = { findUserByEmail, createUser };
