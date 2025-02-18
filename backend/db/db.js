const mysql = require("mysql2");
require("dotenv").config();

const connectDB = async () => {
  const pool = mysql.createConnection({
    host: process.env.MYSQL_IP,
    user: process.env.MYSQL_LOGIN,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.connect((err) => {
    if (err) {
      console.log("Error connecting to MySQL: ", err);
    }
    console.log("Connected to MySQL as ID: ", pool.threadId);
  });
};

module.exports = connectDB;
