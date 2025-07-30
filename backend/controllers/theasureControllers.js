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
const ftp = require("basic-ftp");
const path = require("path");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs").promises;
const date = new Date();
const config = {
  host: "ftp.atotonilcoelgrande.gob.mx",
  user: "jabdel@atotonilcoelgrande.gob.mx",
  password: "Mexico2025b@",
  secure: false,
};
const client = new ftp.Client();
client.ftp.verbose = false;
const Update = async (req, res) => {
  try {
    const theasure = await checkRecordExists(
      "tesoreria_table",
      "id",
      req.body.id
    );
    if (!req.file) {
      await updateRecordInfo("tesoreria_table", req.body, "id", theasure.id);
    } else {
      await client.access(config);
      const baseUrl = "public_html";
      const locPath = `/public/files/tesoreria/${req.body.year}/${
        req.body.table_name[0]
      }/${req.body.id[0]}/${
        req.body.column === "first_trimester"
          ? "primer_trimestre"
          : req.body.column === "second_trimester"
          ? "segundo_trimestre"
          : req.body.column === "third_trimester"
          ? "tercer_trimestre"
          : req.body.column === "fourth_trimester"
          ? "cuarto_trimestre"
          : ""
      }`;
      const remoteDir = baseUrl + locPath;
      await client.ensureDir(remoteDir); // ✅ crea todas las carpetas si no existen
      await client.cd("/");
      client.upload(req.file.path, `${remoteDir}/${req.file.originalname}`);
      fs.unlink(req.file.path);
      const name = req.file.originalname;
      await updateRecord(
        "tesoreria_table",
        req.body.column,
        locPath + "/" + name,
        "id",
        theasure.id
      );
    }
    res.json({ message: "Archivo subido exitosamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { table_name, year, description } = req.body;
  if (!year || !table_name || !description) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("tesoreria_table", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RegisterPublic = async (req, res) => {
  const { description, file } = req.body;
  if (!description && !file) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    req.body.file = req.file.path;
    req.body.date = date.toLocaleDateString("en-US");
    await insertRecord("public_info", req.body);
    // await createTable(newsSchema);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Files = async (req, res) => {
  const { trimester } = req.body;
  if (!trimester) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    for (let i = 0; i < req.files.length; i++) {
      req.body.file = req.files[i].originalname;
      req.body.id = req.body.id;
      await insertRecord("tesoreria_table", req.body);
    }
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("tesoreria_table");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RecordsPublic = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("public_info");
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
  try {
    const deleteRec = await deleteRecord("planning", "id", req.query.id);
    const route =
      "./public/files/planning" +
      "/" +
      req.query.year +
      "/" +
      req.query.file_name +
      "/";
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

const DeletePublic = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("public_info", "id", req.query.id);
    const route =
      "./public/files/planning/publicInfo" + "/" + req.query.description + "/";
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
  Files,
  Records,
  RecordsOrderBy,
  FilesOrderBy,
  Update,
  Delete,
};
