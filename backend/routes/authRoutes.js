const express = require("express");
const {
  register,
  login,
  logoutUser,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/register", register);
router.post("/auth/signin", login);
router.post("/auth/logout", logoutUser);

module.exports = router;
