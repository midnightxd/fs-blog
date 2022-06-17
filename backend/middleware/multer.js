const multer = require("multer");

const storage = multer.diskStorage({})
const fileFilter = (req, file, cb) => {
  console.log(file);
}

module.exports = multer({storage, fileFilter });