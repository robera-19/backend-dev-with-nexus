//business logic
const blogRepo = require('../repository/blog.repository');
class BlogService {
    //create
    async createBlog(data) {
        return await blogRepo.createBlog(data);
    }

    //read
    async getBlogs() {
        return await blogRepo.getBlogs();
    }

    async getBlogById(id) {
        return await blogRepo.getBlogById(id);
    }

    //update
    async updateBlog(id, data) {
        return await blogRepo.updateBlog(id, data);
    }

    //delete
    async deleteBlog(id) {
        return await blogRepo.deleteBlog(id);
    }
}
module.exports = new BlogService();