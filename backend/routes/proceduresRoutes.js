const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  Records,
  Send,
  Update,
  Delete,
  GetRecordsBy,
} = require("../controllers/proceduresControllers");
const router = express.Router();
const route = "./public/procedures/uploads";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const routeComplete = path.join(route, req.body.register_number);
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
  storage,
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (
      ext === ".xlsx" ||
      ext === ".xls" ||
      ext === ".doc" ||
      ext === ".docx" ||
      ext === ".png" ||
      ext === ".svg" ||
      ext === ".HEIC"
    ) {
      return cb(new Error("Tipo de Archivo no soportado!"), true);
    }
    cb(null, file.originalname);
  },
});
router.get("/procedures/records", Records);
router.get("/procedures/recordsBy", GetRecordsBy);
router.post("/procedures/register", upload.array("files"), Register);
// router.post("/procedures/email", Send);
router.delete("/procedures/delete", Delete);
module.exports = router;
