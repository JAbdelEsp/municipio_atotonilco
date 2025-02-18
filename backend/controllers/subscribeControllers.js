const { checkRecordExists, insertRecord } = require("../utils/sqlFunctions");
const newsSchema = require("../schemas/newsSchema");
const cloudinary = require("../utils/cloudinary");

const Register = async (req, res) => {
  const { email, date } = req.body;
  if (!email) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  try {
    const emailAlreadyExists = await checkRecordExists(
      "subscriptions",
      "email",
      email
    );
    if (emailAlreadyExists) {
      res.status(409).send({
        error: "El correo electrónico ya existe en nuestra Base de Datos",
      });
    } else {
      await insertRecord("subscriptions", req.body);
      res.status(201).json({ message: "Suscripción exitosa!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

module.exports = {
  Register,
};
