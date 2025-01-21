const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  insertRecord,
  getRecordsByYear,
  getRecordsNoOrder,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/transparencySchema");
const cloudinary = require("../utils/cloudinary");

const updateTransparency = async (req, res) => {
  try {
    const transparency = await checkRecordExists(
      "transparency",
      "id",
      req.body.id
    );
    console.log("file: ", req.file);
    const name = req.file.originalname;
    // if (req.file) {
    //   if (!profile.image) {
    //     const image = await cloudinary.uploader.upload(req.file.path, {
    //       folder: "profilePro",
    //     });
    //     updates.image = image.secure_url;
    //   } else {
    //     const image_url = profile.image.split("/");
    //     const publicId = image_url[image_url.length - 1].split(".")[0];
    //     await cloudinary.uploader.destroy(`profilePro/${publicId}`);

    //     const image = await cloudinary.uploader.upload(req.file.path, {
    //       folder: "profilePro",
    //     });
    //     updates.image = image.secure_url;
    //   }
    // }
    await updateRecord(
      "transparency",
      "firstTrimester",
      name,
      "id",
      transparency.id
    );
    res.json({ message: "Profile Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { id_news, title, author, content, date, id_area } = req.body;
  if (!id_news || !title || !author || !content || !date || !id_area) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }
  try {
    await createTable(newsSchema);
    insertRecord("news", req.body);
    res.status(201).json({ message: "News created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("transparency");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  Register,
  Records,
  updateTransparency,
};
