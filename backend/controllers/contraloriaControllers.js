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
const fs = require("fs");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const path = require("path");
const date = new Date();
const transporter = nodemailer.createTransport({
  host: "mail.atotonilcoelgrande.gob.mx",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
const Update = async (req, res) => {
  try {
    const comptroller = await checkRecordExists(
      "indicators_comptroller",
      "id",
      req.body.id
    );
    let files = [];
    if (!req.files) {
      await updateRecordInfo(
        "indicators_comptroller",
        req.body,
        "id",
        comptroller.id
      );
    } else {
      for (let i = 0; i < req.files.length; i++) {
        files.push(req.files[i].path);
      }
      await updateRecord(
        "indicators_comptroller",
        req.body.column[0],
        [JSON.stringify(files)],
        "id",
        comptroller.id
      );
    }
    res.json({ message: "Cambios realizados con éxito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Register = async (req, res) => {
  const { year, file_name, id_indicator } = req.body;
  if (!year || !file_name || !id_indicator) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    insertRecord("indicators_comptroller", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RegisterComplaint = async (req, res) => {
  const { type, date_time, place, email, public_server, charge, area } =
    req.body;
  if (
    !type ||
    !date_time ||
    !place ||
    !email ||
    !public_server ||
    !charge ||
    !area
  ) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
    await insertRecord("buzon", req.body);
    await res
      .status(201)
      .json({ message: "Tu mensaje a sido enviado de forma satisfactoria!" });
    await Sending(req.body.name, email, req.body.folio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Sending = async (name, email, folio) => {
  const readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };
  readHTMLFile(__dirname + "/views/mailbox.html", async function (err, html) {
    if (err) {
      console.log("Error reading file...", err);
      return;
    }
    var template = handlebars.compile(html);
    var replacements = {
      name: name,
      folio: folio,
    };
    var htmlToSend = template(replacements);
    const mailOptions = {
      from: '"Tu solicitud esta siendo atendida" <atencion@atotonilcoelgrande.gob.mx>',
      to: email,
      subject: `Gracias por utilizar el buzón de quejas y sugerencias del Municipio de Atotonilco el Grande`,
      html: htmlToSend,
    };
    console.log(mailOptions);
    try {
      const response = await transporter.sendMail(mailOptions);
      console.log(response);
    } catch (err) {}
  });
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
    await insertRecord("comptroller_info", req.body);
    // await createTable(newsSchema);
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
    const records = await getRecordsNoOrder("indicators_comptroller");
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
    const records = await getRecordsNoOrder("comptroller_info");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const RecordsBuzon = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("buzon");
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
      records = await getRecordsBy(
        "indicators_controller",
        "year",
        req.query.year
      );
    } else {
      records = await getRecordsNoOrder("indicators_comptroller");
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
    const deleteRec = await deleteRecord(
      "indicators_comptroller",
      "id",
      req.query.id
    );
    const route = "./public/files/contraloria" + "/" + req.query.year + "/";
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
    const deleteRec = await deleteRecord(
      "comptroller_info",
      "id",
      req.query.id
    );
    const route =
      "./public/files/contraloria/publicInfo" +
      "/" +
      req.query.description +
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

module.exports = {
  Register,
  Records,
  RecordsPublic,
  RecordsOrderBy,
  RecordsBuzon,
  FilesOrderBy,
  Update,
  Delete,
  DeletePublic,
  RegisterFiles,
  RegisterPublic,
  RegisterComplaint,
};
