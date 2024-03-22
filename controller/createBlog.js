const Post = require('../model/post')

exports.createBlog = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { title, content, publicationDate, author } = req.body;
    if (!title || !content || !publicationDate || !author) {

      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await Post.create({
        title, content, publicationDate, author
    });
    return res.status(200).json({
      status: 201,
      message: "Blogs Created Succesfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
