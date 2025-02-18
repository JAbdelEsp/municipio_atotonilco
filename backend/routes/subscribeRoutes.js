const express = require("express");
const { Register } = require("../controllers/subscribeControllers");
const router = express.Router();

router.post("/subscriptions/register", Register);

module.exports = router;
