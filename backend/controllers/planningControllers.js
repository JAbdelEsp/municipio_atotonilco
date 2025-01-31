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
    const sevac = await checkRecordExists("planning", "id", req.body.id);
    let files = [];
    if (!req.files) {
      await updateRecordInfo("planning", req.body, "id", sevac.id);
    } else {
      for (let i = 0; i < req.files.length; i++) {
        files.push(req.files[i].path);
      }
      await updateRecord(
        "planning",
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
  const { year, file_name, id_planning } = req.body;
  if (!year || !file_name || !id_planning) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("planning", req.body);
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
      req.body.id_planning = req.body.id;
      await insertRecord("planning", req.body);
    }
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("planning");
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
      records = await getRecordsBy("planning", "year", req.query.year);
    } else {
      console.log("enter here");
      records = await getRecordsNoOrder("planning");
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
    const records = await getRecordsBy(
      "files_planning",
      "year",
      req.query.year
    );
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
  console.log(req.query);
  try {
    const deleteRec = await deleteRecord("planning", "id", req.query.id);
    const route = "./public/files/planning" + "/" + req.query.year + "/";
    await fs.rm(route, { recursive: true }).then(() => {
      console.log("folder removed");
    });
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
