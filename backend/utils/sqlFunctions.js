const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createConnection({
  host: process.env.MYSQL_IP,
  user: process.env.MYSQL_LOGIN,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
});

const createTable = (schema) => {
  return new Promise((resolve, reject) => {
    pool.query(schema, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const checkRecordExists = (tableName, column, value) => {
  console.log(tableName, value, column);
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tableName} WHERE ${column} = ?`;
    pool.query(query, [value], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length ? results[0] : null);
      }
    });
  });
};

const getRecords = (tableName) => {
  return new Promise((resolve, reject) => {
    const query = `Select * from ${tableName} ORDER BY date DESC`;
    pool.query(query, (err, results) => {
      console.log("error: ", err);
      if (err) {
        reject(err);
      } else {
        resolve(results.length ? results : null);
      }
    });
  });
};

const paramRecords = (tableName, id, limit) => {
  return new Promise((resolve, reject) => {
    const query = `Select * from ${tableName} WHERE id_news = ? order by date ASC`;
    pool.query(query, id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length ? results : null);
      }
    });
  });
};

const insertRecord = (tableName, record) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tableName} SET ?`;
    pool.query(query, [record], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const updateRecord = (tableName, updates, column, value) => {
  console.log(tableName, updates, column, value);
  return new Promise((resolve, reject) => {
    const columnValues = Object.keys(updates)
      .map((column) => `${column} = ?`)
      .join(", ");
    const query = `UPDATE ${tableName} SET ${columnValues} WHERE ${column} = ?`;
    console.log(query);
    pool.query(query, Object.values(updates).concat(value), (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  createTable,
  checkRecordExists,
  getRecords,
  paramRecords,
  insertRecord,
  updateRecord,
};
