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

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const route = "./public/files/" + req.body.article + "/" + req.body.year;
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

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/files");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// uploadFile = multer({ storage });

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
