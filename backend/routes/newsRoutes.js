const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  Records,
  Register,
  RegisterNews,
  getRecordsBy,
  updateNews,
  Delete,
} = require("../controllers/newsControllers");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const route = "./public/uploads/" + req.body.title;
    if (fs.existsSync(route) == true) {
      cb(null, route);
    } else {
      fs.mkdirSync(route);
      cb(null, route);
    }
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
router.delete("/news/delete", Delete);

module.exports = router;
