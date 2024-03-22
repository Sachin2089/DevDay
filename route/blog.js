const express = require("express");
const router = express.Router();


//Import Controller

const {createBlog} = require("../controller/createBlog");
const {getPostById} = require("../controller/readBlog");
const {updatePost} = require("../controller/update");
const {deletePost} = require("../controller/delete");
const {sortPosts} = require("../controller/sort");
const {filterPostsByAuthor} = require("../controller/sort");


// maping
router.post("/blog/create", createBlog);
router.get("/blog/:id", getPostById);
router.post("/blog/update/:id", updatePost);
router.post("/blog/delete", deletePost);
router.get("/blog/sort/:criteria", sortPosts);
router.get("/blog/sort/filter/:author", filterPostsByAuthor);

//export
module.exports = router;
