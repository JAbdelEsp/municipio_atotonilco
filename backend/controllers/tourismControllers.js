const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  paramRecords,
  insertRecord,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/newsSchema");
const cloudinary = require("../utils/cloudinary");

const Register = async (req, res) => {
  const { id_news, title, author, content, date, id_area } = req.body;
  if (!id_news || !title || !author || !content || !date || !id_area) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("tourism", req.body);
    res.status(201).json({ message: "Note created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecords("tourism");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(204).json({
        message: "Algo esta mal!",
        data: records,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecordsBy = async (req, res) => {
  try {
    const records = await paramRecords("tourism", req.query.id);
    if (records) {
      res.status(200).json(records);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const Record = await checkRecordExists(
      "tourism",
      "id_news",
      req.query.id_news
    );

    const updates = {
      ...req.query,
    };

    await updateRecord("tourism", updates, "id_note", Record.id_note);
    res.json({ message: "Tourism Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  Register,
  Records,
  getRecordsBy,
  updateNews,
};
