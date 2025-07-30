//to connect with database
//we use commonjs
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/blog_project");
        console.log("MongoDB connected successfully:");

    } catch (error) {
        console.log("Error connecting to the database:", error.message);
    }

}
module.exports = connectDB;