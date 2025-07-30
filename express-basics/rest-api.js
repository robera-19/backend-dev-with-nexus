const express = require("express")

const app = express()
const PORT = 3000

app.use(express.json())

let users = [
    { id: 1, name: "shambel", role: "admin" },
    { id: 2, name: "robera", role: "user" },
    { id: 3, name: "daniel", role: "user" }
]

let books = [
    { id: 1, name: "Title", description: "description", year: "1999", author: "Jackson" }
]

// /users = 
app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/users/:id", (req, res) => { // /users/1/3  /users/2 /users/3
    const id = req.params.id;
    const user = users.find((user) => user.id == id)

    if (!user) {
        return res.status(404).send("User not found")
    }

    res.send(user)
})

app.post("/users", (req, res) => {
    const { name, role } = req.body;
    if (!name || !role) {
        return res.status(400).send("You need name and role to create a user!")
    }

    const newUser = {
        id: Date.now(),
        name,
        role
    }

    users.push(newUser);
    res.status(201).send("Users created successfully")

})

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).send("The user to be updated is not in  the database")
    }
    const { name, role } = req.body

    user.name = name
    user.role = role


    res.status(201).json(
        {
            message: "success",
            updatedUsers: users,
            status: 203

        })

})

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.find((user) => user.id === id);

    if (index == -1) {
        return res.status(404).send("The user to be deleted is not in the database")
    }
    const deletedUser = users.splice(index, 1)[0]


    res.json({
        message: "user deleted successfully",
        deleteduser: deletedUser
    })


})
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).send("The user to be updated is not in  the database")
    }
    const { name, role } = req.body
    if (name) {
        user.name = name
    };
    if (role) {
        user.role = role
    }


    res.status(201).json(
        {
            message: "success",
            updatedUsers: users,
            status: 203

        })

})

app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`)
})



// for books
// const express = require("express");
// const app = express();
// const port = 8000;

// //? middleware
// app.use(express.json()); // read json file

// // fake database => to store something
// let books = [
//   {
//     id: 1,
//     title: "Harry Potter",
//     author: "Rowling",
//   },
//   {
//     id: 2,
//     title: "Clean Code",
//     author: "Robert",
//   },
// ];

// // localhost:8000
// // I want the user to know the list of books that i have
// // read => GET
// // resource => books
// app.get("/books", (request, response) => {
//   // as backend dev
//   response.json(books);
// });

// // create a new book
// app.post("/books", (request, response) => {
//   const userBook = request.body;
//   // title or author empty => Null, undefined, "", 0
//   if (!userBook.title || !userBook.author) {
//     response.status(400).json({
//       message: "You forgot author or Title",
//     });
//     return;
//   }
//   //   if ....
//   // try catch => recommended
//   // const {title, author} = request.body
//   const newId = books.length + 1;
//   const newBook = {
//     id: newId,
//     title: userBook.title,
//     author: userBook.author,
//   };
//   books.push(newBook);
//   //   201 => Created
//   console.log("Current book in my store", books);
//   response.status(201).json(newBook);
// });

// // todo Implement it
// app.put();
// app.patch();
// app.delete();
// app.listen(port, () => {
//   console.log(`Server listening to port ${port}`);
// });
// //