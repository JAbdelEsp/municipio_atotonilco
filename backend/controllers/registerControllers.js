const { insertRecord } = require("../utils/sqlFunctions");
const nodemailer = require("nodemailer");

const smtpConfig = {
  service: process.env.SERVICE,
  host: process.env.HOST,
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  debug: false,
  logger: true,
};

const transporter = nodemailer.createTransport(smtpConfig);
const Register = async (req, res) => {
  const { year, financial_states, id_sevac, section } = req.body;
  if (!year || !financial_states || !id_sevac || !section) {
    res.status(400).json({ error: "Falta uno o más campos requeridos!" });
    return;
  }
  try {
    // await createTable(newsSchema);
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
        username: req.body.username,
        password: req.body.password,
      };
      var htmlToSend = template(replacements);
      const mailOptions = {
        from: '"Training Program - Ionate Partner Portal" <training@ionate.ai>',
        to: req.body.email,
        subject: `Assignment to a new training course`,
        html: htmlToSend,
      };
      try {
        const response = await transporter.sendMail(mailOptions);
        res.status(200).json({
          status: "success",
          message: "Email sent successfully",
          data: response,
        });
      } catch (err) {
        console.log(err);
        res.status(200).json({
          status: "error",
          message: "Email could not be sent",
        });
      }
    });

    insertRecord("registers", req.body);
    res.status(201).json({ message: "Registro satisfactorio!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  Register,
};
