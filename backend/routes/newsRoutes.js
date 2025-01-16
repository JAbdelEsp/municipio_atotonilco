const express = require("express");
const {
  Records,
  RegisterNews,
  getRecordsBy,
  updateNews,
} = require("../controllers/newsControllers");
const router = express.Router();

router.get("/news/records", Records);
router.get("/news/recordsBy", getRecordsBy);
router.post("/news/register", RegisterNews);
router.put("/news/update", updateNews);

module.exports = router;
