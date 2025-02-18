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
  RegisterComplaint,
  RecordsPublic,
  RecordsBuzon,
  DeletePublic,
} = require("../controllers/contraloriaControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const { getRecordsBy } = require("../utils/sqlFunctions");
const router = express.Router();
const route = "./public/files/contraloria/";
const routePublic = "./public/files/contraloria/publicInfo";
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
  limits: { fileSize: 3145728 },
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
router.get("/contraloria/records", RecordsOrderBy);
router.get("/contraloria/records/public", RecordsPublic);
router.get("/contraloria/buzon", RecordsBuzon);
router.get("/contraloria/files", FilesOrderBy);
router.post("/contraloria/register", Register);
router.post(
  "/contraloria/register/public",
  upload.single("file"),
  RegisterPublic
);
router.post("/contraloria/quejas/register", RegisterComplaint);
router.put("/contraloria/update", uploadFile.array("file", 20), Update);
router.delete("/contraloria/delete", Delete);
router.delete("/contraloria/public/delete", DeletePublic);
module.exports = router;
