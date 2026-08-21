const mongoose = require("mongoose");
const { AuthProvider } = require("../utils/enum/enums");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false, default: null },
    auth_provider: { type: String, enum: Object.values(AuthProvider), required: true, default: AuthProvider.LOCAL },
    created_at: { type: Date, default: Date.now, immutable: true },
    last_updated_at: { type: Date, default: Date.now },
  },
  { collection: "c_user" },
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
