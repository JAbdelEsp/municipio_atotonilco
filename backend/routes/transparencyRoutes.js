const express = require("express");
const { Register, Records } = require("../controllers/transparencyControllers");
const router = express.Router();

router.get("/transparency/records", Records);
router.post("/transparency/register", Register);
module.exports = router;
