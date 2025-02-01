const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  insertRecord,
  getRecordsByYear,
  getRecordsNoOrder,
  deleteRecord,
  updateRecordInfo,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/transparencySchema");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;

const updateTransparency = async (req, res) => {
  try {
    const transparency = await checkRecordExists(
      "transparency",
      "id",
      req.body.id
    );
    if (!req.file) {
      await updateRecordInfo("transparency", req.body, "id", transparency.id);
    } else {
      const name = req.file.originalname;
      await updateRecord(
        "transparency",
        req.body.column[0],
        name,
        "id",
        transparency.id
      );
    }
    res.json({ message: "Cambios realizados con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { article, year, fraction } = req.body;
  if (!article || !year || !fraction) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("transparency", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
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

const Delete = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("transparency", "id", req.query.id);
    const route =
      "./public/files/" + req.query.article + "/" + req.query.year + "/";
    await fs.rm(route, { recursive: true }).then(() => {});
    if (deleteRec) {
      res.status(200).json(deleteRec);
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
  Delete,
};
