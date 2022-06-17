const Post = require("../models/post");

exports.createPost = (req, res) => {
  console.log(req.body);
  const { title, meta, content, slug, author, tags } = req.body;
  const newPost = new Post({ title, meta, content, slug, author, tags });

  res.json(newPost);
};