const {
    createTable,
    checkRecordExists,
    updateRecord,
    getRecords,
    insertRecord,
    getRecordsNoOrder,
    deleteRecord,
    updateRecordInfo,
  } = require("../utils/sqlFunctions");
  const fs = require("fs").promises;
  const ftp = require("basic-ftp");
  const path = require("path");
  const client = new ftp.Client();
  const route = "./public/files/";
  const updateObras = async (req, res) => {
    try {
      const obras_publicas = await checkRecordExists(
        "obras_publicas",
        "id",
        req.body.id
      );
      if (!req.file) {
        await updateRecordInfo("obras_publicas", req.body, "id", obras_publicas.id);
      } else {
        const name = req.file.originalname;
        await updateRecord(
          "obras_publicas",
          req.body.column[0],
          name,
          "id",
          obras_publicas.id
        );
      }
      res.json({ message: "Cambios realizados con éxito." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const Register = async (req, res) => {
    const { no_obra, nombre, contrato, convocatoria } = req.body;
    if (!no_obra || !nombre ) {
      res.status(400).json({ error: "Falta uno o más campos requeridos!" });
      return;
    }
    try {
      // await createTable(newsSchema);
      insertRecord("obras_publicas", req.body);
      res.status(201).json({ message: "Registro satisfactorio!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const Records = async (req, res) => {
    try {
      const records = await getRecordsNoOrder("obras_publicas");
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
      const deleteRec = await deleteRecord("obras_publicas", "id", req.query.id);
      // const deleteRemote =
      // "/public_html/public/files/" +
      // req.query.article +
      // "/" +
      // req.query.year +
      // "/" +
      // req.query.fraction;
  
    const deleteLocal =
      "./public/files/" +
      req.query.no_obra +
      "/" +
      req.query.nombre;
    // await client.access({
    //   host: "ftp.atotonilcoelgrande.gob.mx",
    //   user: "jabdel@atotonilcoelgrande.gob.mx",
    //   port: 21,
    //   password: "Mexico2025@",
    //   secure: false,
    //   secureOptions: { rejectUnauthorized: false },
    // });
    // await client.removeDir(deleteRemote);
    await fs.rm(deleteLocal, { recursive: true }).then(() => {});
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
    updateObras,
    Delete,
  };
  