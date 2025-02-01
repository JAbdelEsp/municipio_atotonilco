const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  insertRecord,
  getRecordsBy,
  getRecordsNoOrder,
  deleteRecord,
  updateRecordInfo,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/transparencySchema");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;

const Update = async (req, res) => {
  try {
    const sevac = await checkRecordExists("sevac", "id", req.body.id);
    let files = [];
    if (!req.files) {
      await updateRecordInfo("sevac", req.body, "id", sevac.id);
    } else {
      for (let i = 0; i < req.files.length; i++) {
        files.push(req.files[i].path);
      }
      await updateRecord(
        "sevac",
        req.body.column[0],
        [JSON.stringify(files)],
        "id",
        sevac.id
      );
    }
    res.json({ message: "Cambios realizados con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { year, financial_states, id_sevac, section } = req.body;
  if (!year || !financial_states || !id_sevac || !section) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("sevac", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RegisterFiles = async (req, res) => {
  const { trimester } = req.body;
  if (!trimester) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    for (let i = 0; i < req.files.length; i++) {
      req.body.file = req.files[i].originalname;
      req.body.id_sevac = req.body.id;
      await insertRecord("sevac", req.body);
    }
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("sevac");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RecordsOrderBy = async (req, res) => {
  try {
    let records = null;
    if (req.query.year !== undefined) {
      records = await getRecordsBy("sevac", "year", req.query.year);
    } else {
      records = await getRecordsNoOrder("sevac");
    }
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FilesOrderBy = async (req, res) => {
  try {
    const records = await getRecordsBy("files_sevac", "year", req.query.year);
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
    const deleteRec = await deleteRecord("sevac", "id", req.query.id);
    const route =
      "./public/files/sevac/" + req.query.year + "/" + req.query.section;
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
  RecordsOrderBy,
  FilesOrderBy,
  Update,
  Delete,
  RegisterFiles,
};
