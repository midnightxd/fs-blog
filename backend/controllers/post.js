import Post from '../models/post.js';

const createPost = (req, res) => {
  console.log(req.file);

  const { title, meta, content, slug, author, tags } = req.body;
  const newPost = new Post({ title, meta, content, slug, author, tags });

  res.json(newPost);
};

export default createPost;
