const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  Records,
  Update,
  Delete,
  RegisterFiles,
  RecordsOrderBy,
  FilesOrderBy,
} = require("../controllers/sevacControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const { getRecordsBy } = require("../utils/sqlFunctions");
const router = express.Router();
const route = "./public/files/sevac/";
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const routeComplete = path.join(
        route,
        req.body.year,
        req.body.section,
        req.body.column
      );
      fs.mkdirSync(routeComplete, { recursive: true });
      if (fs.existsSync(routeComplete) == true) {
        cb(null, routeComplete);
      } else {
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
      cb(new Error("Tipo de Archivo no soportado!"), false);
      return;
    }
    cb(null, file.originalname);
  },
  limits: { fileSize: 3145728 },
});

router.get("/sevac/records", RecordsOrderBy);
router.get("/sevac/files", FilesOrderBy);
router.post("/sevac/register", Register);
router.put("/sevac/update", uploadFile.array("file", 20), Update);
router.delete("/sevac/delete", Delete);
module.exports = router;
