const {
  checkRecordExists,
  updateRecord,
  deleteRecord,
  getRecords,
  insertRecord,
} = require("../utils/sqlFunctions");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;

const Register = async (req, res) => {
  const { name, lastname, area } = req.body;
  if (!name || !lastname || !area) {
    res.status(400).json({ error: "Faltan elementos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    await insertRecord("directions", req.body);
    res.status(201).json({ message: "Datos agregados con éxito!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecords("directions");
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

const Update = async (req, res) => {
  try {
    const Record = await checkRecordExists("directions", req.query.id);
    const updates = {
      ...req.query,
    };
    await updateRecord("directions", updates, "id", Record.id);
    res.json({ message: "News Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Delete = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("directions", "id", req.query.id);
    const route = "./public/uploads/directions/" + req.query.id;
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

module.exports = {
  Register,
  Records,
  Delete,
  Update,
};
