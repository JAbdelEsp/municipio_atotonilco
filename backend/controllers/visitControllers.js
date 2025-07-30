const requestIp = require('request-ip');
const {
    getRecords,
    updateRecord,
    insertRecord,
    checkRecordExists,
  } = require("../utils/sqlFunctions");

  const Register = async (req, res) => {
    let ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
 
    if ( ipAddress.includes(",") ) {
      ipAddress = ipAddress.split(",")[0];
    }
    ipAddress = ipAddress.replace(/^::ffff:/, ""); 

    const { page, userAgent } = req.body;
    req.body.ip_address = ipAddress;
    req.body.visit_count = 1;
    const alreadyExist = await checkRecordExists("visits", "ip_address", ipAddress);
    if ( alreadyExist ) {
      const updates = {
        ...visit_count + 1
      }
      await updateRecord("visits", updates, "ip_address", ipAddress);
      res.json({ message: "Updated Successfully" });
    } else {
      await insertRecord("visits", req.body);
      res.status(201).json({ message: "Visit created successfully!" });
    }
  };
  
  const Records = async (req, res) => {
    try {
      const records = await getRecords("tourism");
      if (records) {
        res.status(200).json(records);
      } else {
        res.status(204).json({
          message: "Algo esta mal!",
          data: records,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
    
  module.exports = {
    Register,
    Records
  };
  