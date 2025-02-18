const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  Register,
  Records,
  Update,
  Delete,
  RegisterBanner,
  RegisterVideo,
  DeleteBanner,
  DeleteVideo,
  RecordsBanner,
  RecordsVideo,
} = require("../controllers/bannersControllers");
const router = express.Router();
const route = "./public/banners/";
const routeVideo = "./public/video/";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const fileSize = req.headers["content-length"];
    const routeComplete = path.join(route, req.body.title);
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
const upload = multer({
  storage: storage,
  limits: { fileSize: 3145728 },
});

const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    const routeComplete = path.join(routeVideo, req.body.title);
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
const uploadVideo = multer({ storage: storageVideo });

router.get("/banner/records", RecordsBanner);
router.post("/banner/register", upload.single("picture"), RegisterBanner);
router.delete("/banner/delete", DeleteBanner);
router.get("/video/records", RecordsVideo);
router.post("/video/register", uploadVideo.single("video"), RegisterVideo);
router.delete("/video/delete", DeleteVideo);
router.post("/banners/register", Register);
router.get("/banners/records", Records);
router.put("/banners/update", Update);
router.delete("/banners/delete", Delete);
module.exports = router;
