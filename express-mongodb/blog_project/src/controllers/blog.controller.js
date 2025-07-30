//this is our major http layer
//we take request and give to service
//takes data from service and give to response
const blogService = require('../services/blog.service');

class BlogController {
    //create
    async createBlog(req, res) {
        try {
            const data = req.body;
            const result = await blogService.createBlog(data);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    //read
    async getBlogs(req, res) {
        try {
            const blogs = await blogService.getBlogs();
            if (!blogs || blogs == "") {
                res.status(404).json({ message: "i dont have any blog in my database" });
                return;
            }
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBlogById(req, res) {
        try {
            const id = req.params.id;
            const blog = await blogService.getBlogById(id);
            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    //update
    async updateBlog(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedBlog = await blogService.updateBlog(id, data);
            res.status(200).json(updatedBlog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    //delete
    async deleteBlog(req, res) {
        try {
            const id = req.params.id;
            await blogService.deleteBlog(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = new BlogController();