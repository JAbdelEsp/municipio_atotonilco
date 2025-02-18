const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/sevac/register", Register);
module.exports = router;
