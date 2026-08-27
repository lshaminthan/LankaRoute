const express = require("express");
const { signupController, loginController, googleSignInController, logoutController, deleteAccountController } = require("../controllers/userController");
const { authenticateAccessToken } = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/google", googleSignInController);
router.post("/auth/logout", logoutController);
router.post("/auth/delete-account", authenticateAccessToken, deleteAccountController);

module.exports = router;
