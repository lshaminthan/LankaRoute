const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now, immutable: true },
    last_updated_at: { type: Date, default: Date.now },
  },
  { collection: "c_user" },
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
