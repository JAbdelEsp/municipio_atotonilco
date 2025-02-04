const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  ReqRecords,
  GetRecords,
  Records,
  Update,
  Delete,
  GetRecordsBy,
} = require("../controllers/resourcesControllers");
const router = express.Router();

router.get("/resources/records", Records);
router.get("/resources/recordsBy", GetRecordsBy);
router.post("/resources/register", Register);
router.get("/resources/requeriments/records", ReqRecords);
router.get("/areas/records", GetRecords);
router.put("/resources/update", Update);
router.delete("/resources/delete", Delete);
module.exports = router;
