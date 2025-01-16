const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  insertRecord,
  getRecordsByYear,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/transparencySchema");
const cloudinary = require("../utils/cloudinary");

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
  console.log("query: ", req.query.year);
  try {
    const records = await getRecords("transparency");
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
};
