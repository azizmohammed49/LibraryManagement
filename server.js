const express = require("express");
const { connectDB } = require("./db");
const authorRoute = require("./router/authorRoute");
const booksRoute = require("./router/booksRoute");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library Management System API");
});

app.use("/api/authors", authorRoute);
app.use("/api/books", booksRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
