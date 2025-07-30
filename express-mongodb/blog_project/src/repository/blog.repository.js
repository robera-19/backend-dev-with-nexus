//repository pattern
//centralizes our database operation
const Blog = require("../models/blog.schema");
class BlogRepository {
    //create
    async createBlog(data) {
        //{
        //     title: "Blog Title",
        //     content: "Blog Description",
        //     author: "Author Name"
        // }
        return await Blog.create(data);
    }

    //read
    async getBlogs() {
        return await Blog.find({});
    }

    //update
    async updateBlog(id, data) {
        return await Blog.findAndUpdate(id);
    }

    //delete
    async deleteBlog(id) {
        return await Blog.findByIdAndDelete(id);
    }
}

module.exports = new BlogRepository();