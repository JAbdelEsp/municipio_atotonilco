const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/userSchema");
const clearToken = require("../utils/auth");
const bcrypt = require("bcryptjs");
const {
  createTable,
  checkRecordExists,
  insertRecord,
} = require("../utils/sqlFunctions");
const profileSchema = require("../schemas/profileSchema");

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "7d" });
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res
      .status(400)
      .json({ error: "Email or Password fields cannot be empty!" });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = {
    userId: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };
  const profile = {
    profileId: uuidv4(),
    userId: user.userId,
    email: user.email,
  };
  try {
    // await createTable(userSchema);
    // await createTable(profileSchema);
    const userAlreadyExists = await checkRecordExists("users", "email", email);
    if (userAlreadyExists) {
      res
        .status(409)
        .json({ error: "El correo electrónico ya existe en la base de datos" });
    } else {
      await insertRecord("users", user);
      // await insertRecord("profiles", profile);
      res.status(201).json({ message: "Usuario creado exitosamente!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body.data;
  if (!email || !password) {
    res.status(400).json({ error: "Email o Password no pueden estar vacios!" });
    return;
  }

  try {
    const existingUser = await checkRecordExists("users", "email", email);
    if (existingUser) {
      if (!existingUser.password) {
        res.status(401).json({ error: "Invalid credentials!" });
        return;
      }

      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (passwordMatch) {
        res.status(200).json({
          userId: existingUser.userId,
          email: existingUser.email,
          name: existingUser.name,
          area: existingUser.area,
          roles: existingUser.roles,
          token: generateAccessToken(existingUser.userId),
          success: true,
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  clearToken(res);
  res.status(200).json({ message: "User logged out" });
};

module.exports = {
  logoutUser,
  register,
  login,
};
