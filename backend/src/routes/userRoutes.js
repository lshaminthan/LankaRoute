const express = require("express");
const { signupController, loginController, googleSignInController } = require("../controllers/userController");

const router = express.Router();

router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/google", googleSignInController);

module.exports = router;
