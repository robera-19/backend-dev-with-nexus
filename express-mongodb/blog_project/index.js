const express = require('express');
const connectDB = require('./src/config/database');
const blogRouter = require('./src/router/blog.router');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/blogs", blogRouter);

try {
    connectDB();
    console.log("Database connected successfully");
} catch (error) {
    console.log("Error connecting to the database:", error.message);

}


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})