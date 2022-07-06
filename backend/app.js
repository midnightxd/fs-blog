const express = require("express");
const morgan = require("morgan");

require("dotenv").config();
require("./db/index");

const postRouter = require("./routes/post");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/post", postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port: [${PORT}]`);
});
