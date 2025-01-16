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

const RegisterNews = async (req, res) => {
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
    const records = await getRecords("news");
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
    const records = await paramRecords("news", req.query.id);
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
      "news",
      "id_news",
      req.query.id_news
    );

    const updates = {
      ...req.query,
    };

    await updateRecord("news", updates, "id_news", Record.id_news);
    res.json({ message: "News Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  RegisterNews,
  Records,
  getRecordsBy,
  updateNews,
};
