const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  Files,
  Records,
  RecordsOrderBy,
  FilesOrderBy,
  Update,
} = require("../controllers/theasureControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const { getRecordsBy } = require("../utils/sqlFunctions");
const router = express.Router();
const route = "./public/files/tesoreria1/";
if (!fs.existsSync(route)) {
  fs.mkdirSync(route, { recursive: true });
}
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const routeComplete = path.join(route,req.body.year,req.body.id);
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
  })
});

router.get("/theasure/records", Records);
router.post("/theasure/files", Files);
router.put(
  "/theasure/update", 
  requiresAuth,
  uploadFile.single('file'), 
  Update,
)

router.post("/theasure/register", Register);
module.exports = router;