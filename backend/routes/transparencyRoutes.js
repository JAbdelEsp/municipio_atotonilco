const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  Records,
  updateTransparency,
  Delete,
} = require("../controllers/transparencyControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const router = express.Router();
const route = "./public/files/";
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const routeComplete = path.join(route, req.body.article, req.body.year, req.body.fraction);
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
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".xlsx" && ext !== ".xls" && ext !== ".pdf") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, file.originalname);
  },
});

router.get("/transparency/records", Records);
router.post("/transparency/register", Register);
router.put(
  "/transparency/update",
  requiresAuth,
  uploadFile.single("file"),
  updateTransparency
);
router.delete("/transparency/delete", Delete);
module.exports = router;
