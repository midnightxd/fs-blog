const mongoose = require("mongoose");
require("dotenv").config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("Database as been connected."))
  .catch((err) => console.log("Database connection faled", err.message || err));
