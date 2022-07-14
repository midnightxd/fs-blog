import express from 'express';
const router = express.Router();

import createPost from '../controllers/post.js';
import multer from '../middleware/multer.js';

router.post('/create', multer.single('thumbnail'), createPost);

export default router;
