const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/files");
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".xlsx" && ext !== ".xls" && ext !== ".pdf") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, true);
  },
});
