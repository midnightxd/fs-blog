import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv/config';

import './db/index.js';
import postRouter from './routes/post.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/post', postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port: [${PORT}]`);
});
