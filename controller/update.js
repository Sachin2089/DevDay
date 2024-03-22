const Post = require('../model/post');

exports.updatePost = async (req, res) => {
    const postId = req.params.id;
    const { content, publicationDate, title, author } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(postId, { content, publicationDate, title, author }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

