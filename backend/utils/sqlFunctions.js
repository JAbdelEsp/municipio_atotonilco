const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  host: process.env.MYSQL_IP,
  user: process.env.MYSQL_LOGIN,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 1000,
  queueLimit: 0,
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
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `SELECT * FROM ${tableName} WHERE ${column} = ?`;
      connection.query(query, value, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results[0] : null);
        }
      });
    });
  });
};

const getRecords = (tableName) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName} ORDER BY date DESC`;
      connection.query(query, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const getRecordsBy = (tableName, param, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName} WHERE ${param} = ?`;
      connection.query(query, value, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const getRecordsNoOrder = (tableName) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName}`;
      connection.query(query, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const paramRecords = (tableName, id, limit) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName} WHERE id_news = ? order by date ASC`;
      connection.query(query, id, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const paramReq = (tableName, id, limit) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName} WHERE id = ? order by date ASC`;
      connection.query(query, id, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const getPictures = (tableName, id, limit) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `Select * from ${tableName} WHERE id_news = ? `;
      connection.query(query, id, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results : null);
        }
      });
    });
  });
};

const insertRecord = (tableName, record) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `INSERT INTO ${tableName} SET ?`;
      connection.query(query, [record], (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });
};

const updateRecord = (tableName, updateCol, updates, column, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `UPDATE ${tableName} SET ${updateCol} = '${updates}' WHERE ${column} = ?`;
      connection.query(query, value, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });
};

const updateRecordInfo = (tableName, updates, column, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `UPDATE ${tableName} SET ? WHERE ${column} = ?`;
      connection.query(query, [updates, value], (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });
};

const deleteRecord = (tableName, column, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error trying connecting: ".err);
        reject(err);
        return;
      }
      const query = `DELETE FROM ${tableName} WHERE ${column} = ?`;
      connection.query(query, value, (err, results) => {
        connection.release();
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });
};

module.exports = {
  createTable,
  checkRecordExists,
  getRecords,
  getRecordsNoOrder,
  getRecordsBy,
  paramRecords,
  paramReq,
  insertRecord,
  updateRecord,
  updateRecordInfo,
  deleteRecord,
  getPictures,
};
