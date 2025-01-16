const express = require("express");
const {
  Records,
  Register,
  getRecordsBy,
  updateNews,
} = require("../controllers/tourismControllers");
const router = express.Router();

router.get("/tourism/records", Records);
router.get("/tourism/recordsBy", getRecordsBy);
router.post("/tourism/register", Register);
router.put("/tourism/update", updateNews);

module.exports = router;
