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
  RegisterPublic,
  RecordsPublic,
  DeletePublic,
} = require("../controllers/planningControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const { getRecordsBy } = require("../utils/sqlFunctions");
const router = express.Router();
const route = "./public/files/planning/";
const routePublic = "./public/files/planning/publicInfo";
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const routeComplete = path.join(
        route,
        req.body.year,
        req.body.file_name,
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
    if (
      ext !== ".xlsx" &&
      ext !== ".xls" &&
      ext !== ".pdf" &&
      ext !== ".doc" &&
      ext !== ".docx"
    ) {
      cb(new Error("Tipo de Archivo no soportado!"), false);
      return;
    }
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const routeComplete = path.join(routePublic, req.body.description);
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
    if (
      ext !== ".xlsx" &&
      ext !== ".xls" &&
      ext !== ".pdf" &&
      ext !== ".doc" &&
      ext !== ".docx"
    ) {
      return cb(new Error("Tipo de Archivo no soportado!"), false);
    }
    cb(null, file.originalname);
  },
});
router.get("/planning/records", RecordsOrderBy);
router.get("/planning/records/public", RecordsPublic);
router.get("/planning/files", FilesOrderBy);
router.post("/planning/register", Register);
router.post("/planning/register/public", upload.single("file"), RegisterPublic);
router.put("/planning/update", uploadFile.array("file", 60), Update);
router.delete("/planning/delete", Delete);
router.delete("/public/delete", DeletePublic);
module.exports = router;
