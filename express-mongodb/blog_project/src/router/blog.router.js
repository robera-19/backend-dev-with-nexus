//defines which routes/url to the controller
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");
//create
router.post("/v1", blogController.createBlog);
//read
router.get("/v1", blogController.getBlogs);
//get by ID
router.get("/v1/:id", blogController.getBlogById);
//update
router.put("/v1/:id", blogController.updateBlog);
//delete
router.delete("/v1/:id", blogController.deleteBlog);
//export
module.exports = router;