const express = require("express");
const {
	signupController,
	loginController,
	googleSignInController,
	logoutController,
	getCurrentUserController,
	deleteAccountController,
	updateAccountController,
} = require("../controllers/userController");
const { authenticateAccessToken } = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/google", googleSignInController);
router.post("/auth/logout", logoutController);
router.get("/auth/me", authenticateAccessToken, getCurrentUserController);
router.post("/auth/delete-account", authenticateAccessToken, deleteAccountController);
router.patch("/auth/account", authenticateAccessToken, updateAccountController);

module.exports = router;
