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
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

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
    const resources = await checkRecordExists("procedures", "id", req.body.id);
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
  const { resource, user_email } = req.body;
  if (!resource || !user_email) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    req.body.files = JSON.stringify(req.files);
    await insertRecord("procedures", req.body);
    await res.status(201).json({
      message:
        "Te haremos llegar a tu correo electrónico tu número de folio...",
      register: req.body.register_number,
    });
    await Send(
      req.body.resource,
      req.body.register_number,
      req.body.user_email
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Records = async (req, res) => {
  try {
    const records = await getRecordsNoOrder("procedures");
    if (records) {
      res.status(200).json(records);
    } else {
      res.status(200).json({ error: "No records found", records: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Send = async (resource, register_number, user_email) => {
  const readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };
  readHTMLFile(__dirname + "/views/email.html", async function (err, html) {
    if (err) {
      console.log("Error reading file...", err);
      return;
    }
    var template = handlebars.compile(html);
    var replacements = {
      register_number: register_number,
      resource: resource,
    };
    var htmlToSend = template(replacements);
    const mailOptions = {
      from: '"Tu solicitud esta siendo atendida" <atencion@atotonilcoelgrande.gob.mx>',
      to: user_email,
      subject: `Gracias por utilizar los servicios del Municipio de Atotonilco el Grande`,
      html: htmlToSend,
    };
    try {
      const response = await transporter.sendMail(mailOptions);
    } catch (err) {}
  });
};

const GetRecordsBy = async (req, res) => {
  try {
    const records = await paramReq("procedures", req.query.id);
    if (records) {
      res.status(200).json(records);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Delete = async (req, res) => {
  try {
    const deleteRec = await deleteRecord("procedures", "id", req.query.id);
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
  GetRecordsBy,
  Update,
  Delete,
  Send,
};
