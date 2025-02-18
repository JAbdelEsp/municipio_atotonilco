const jwt = require("jsonwebtoken");
const Response = require("express");

const clearToken = (res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};

module.exports = {
  clearToken,
};
