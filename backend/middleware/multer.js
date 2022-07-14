import multer from 'multer';

export const storage = multer.diskStorage({});

export const fileFilter = (req, file, cb) => {
  if (!file.mimetype.includes('images')) {
    return callback('Invalid image format', false);
  }
  callback(null, true);
};

export default multer({ storage, fileFilter });
