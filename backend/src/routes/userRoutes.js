const express = require("express");
const { signupController, loginController, googleSignInController, logoutController } = require("../controllers/userController");

const router = express.Router();

router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/google", googleSignInController);
router.post("/auth/logout", logoutController);

module.exports = router;
