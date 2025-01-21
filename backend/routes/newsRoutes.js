const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  Records,
  Register,
  RegisterNews,
  getRecordsBy,
  updateNews,
} = require("../controllers/newsControllers");
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
router.get("/news/records", Records);
router.post("/news/pictures", upload.array("pic", 20), Register);
router.get("/news/recordsBy", getRecordsBy);
router.post("/news/register", upload.single("image"), RegisterNews);
router.put("/news/update", updateNews);

module.exports = router;
