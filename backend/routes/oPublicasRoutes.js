const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  Register,
  Records,
  updateObras,
  Delete,
} = require("../controllers/oPublicasControllers");
const { requiresAuth } = require("../middlewares/authMiddleware");
const router = express.Router();
const route = "./public/files/obras/";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const routeComplete = path.join(route, req.body.no_obra);
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
});

router.get("/obras/records", Records);
router.post("/obras/register",upload.single("contrato"), Register);
// router.put(
//   "/obras/update",
//   requiresAuth,
//   uploadFile.single("file"),
//   updateObras
// );
router.delete("/obras/delete", Delete);
module.exports = router;