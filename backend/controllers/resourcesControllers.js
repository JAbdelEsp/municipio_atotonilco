const {
  createTable,
  checkRecordExists,
  updateRecord,
  getRecords,
  insertRecord,
  getRecordsBy,
  paramRecords,
  getRecordsNoOrder,
  paramReq,
  deleteRecord,
  updateRecordInfo,
} = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/transparencySchema");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;

const Update = async (req, res) => {
  try {
    const resources = await checkRecordExists("resources", "id", req.body.id);
    await updateRecord(
      "resources",
      [JSON.stringify(files)],
      "id",
      resources.id
    );
    res.json({ message: "Cambios realizados con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { description, requeriment, area } = req.body;
  if (!description || !requeriment || !area) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("resources", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("resources");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const ReqRecords = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("requeriments");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetRecordsBy = async (req, res) => {
  try {
    const records = await paramReq("resources", req.query.id);
    if (records) {
      res.status(200).json(records);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetRecords = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("areas");
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
    const deleteRec = await deleteRecord("resources", "id", req.query.id);
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
  ReqRecords,
  GetRecords,
  GetRecordsBy,
  Update,
  Delete,
};
