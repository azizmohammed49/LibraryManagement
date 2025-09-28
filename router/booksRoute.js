const express = require("express");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

const router = express.Router();

router.get("/allBooks", getBooks);
router.post("/createBook", createBook);
router.patch("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
module.exports = router;
