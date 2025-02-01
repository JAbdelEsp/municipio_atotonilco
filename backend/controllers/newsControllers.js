const {
  createTable,
  checkRecordExists,
  updateRecord,
  deleteRecord,
  getRecords,
  paramRecords,
  insertRecord,
  getPictures,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/newsSchema");
const picturesSchema = require("../schemas/picturesSchema");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;

const RegisterNews = async (req, res) => {
  const { id_news, title, author, content, date, id_area } = req.body;
  if (!id_news || !title || !author || !content || !date) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }
  try {
    // await createTable(newsSchema);
    await insertRecord("news", req.body);
    res.status(201).json({ message: "News created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { id_news } = req.body;
  if (!id_news) {
    res.status(400).json({ error: "Es necesario el id" });
    return;
  }
  try {
    // await createTable(picturesSchema);
    for (let i = 0; i < req.files.length; i++) {
      req.body.pic = req.files[i].originalname;
      req.body.title = req.body.title[0];
      await insertRecord("pictures", req.body);
    }
    res.status(201).json({ message: "Imágenes agregas con éxito!" });
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

const updateViews = async (req, res) => {
  try {
    const Record = await checkRecordExists(
      "news",
      "id_news",
      req.query.id_news
    );
    const updates = {
      ...req.query,
    };
    await updateRecord(
      "news",
      "views",
      updates.views,
      "id_news",
      Record.id_news
    );
    res.json({ message: "News Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Delete = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("news", "id_news", req.query.id);
    await deleteRecord("pictures", "id_news", `${req.query.id}`);
    const route = "./public/uploads/" + req.query.title;
    await fs.rmdir(route, { recursive: true }).then(() => {});
    if (deleteRec) {
      res.status(200).json(deleteRec);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const PicturesBy = async (req, res) => {
  try {
    const records = await getPictures("pictures", req.query.id_news);
    if (records) {
      res.status(200).json(records);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  RegisterNews,
  Register,
  Records,
  Delete,
  getRecordsBy,
  updateNews,
  PicturesBy,
  updateViews,
};
