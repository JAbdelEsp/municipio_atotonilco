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
  PicturesBy,
  updateViews,
} = require("../controllers/newsControllers");
const router = express.Router();
const route = "./public/uploads/";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const routeComplete = path.join(route, req.body.title);
    console.log(routeComplete);
    fs.mkdirSync(routeComplete, { recursive: true });
    if (fs.existsSync(routeComplete) == true) {
      cb(null, routeComplete);
    } else {
      fs.mkdirSync(routeComplete);
      cb(null, routeComplete);
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
router.get("/news/pictures", PicturesBy);
router.put("/news/views", updateViews);

module.exports = router;
