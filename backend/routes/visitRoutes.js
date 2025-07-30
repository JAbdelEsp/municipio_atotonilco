const express = require("express");
const {
  Records,
  Register,
} = require("../controllers/visitControllers");
const router = express.Router();

router.get("/visit/records", Records);
router.post("/visit/register", Register);

module.exports = router;