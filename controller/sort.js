const Post = require("../model/post")

exports.sortPosts = async (req, res) => {
    const { criteria } = req.params;
    try {
        let sortedPosts;
       
        if (criteria === 'date') {
            sortedPosts = await Post.find().sort({ publicationDate: 1 });
        } else if (criteria === 'author') {
            sortedPosts = await Post.find().sort({ author: 1 });
        } else {
            return res.status(400).json({ message: 'Invalid sorting criteria' });
        }

        res.json(sortedPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.filterPostsByAuthor = async (req, res) => {
    const { author } = req.params;
    try {
        const filteredPosts = await Post.find({ author });
        res.json(filteredPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


