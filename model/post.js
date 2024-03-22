//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publicationDate: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

//export
module.exports = mongoose.model("Post", postSchema);