const express = require("express");
const {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorsController");

const router = express.Router();
router.get("/allAuthors", getAuthors);
router.post("/createAuthor", createAuthor);
router.patch("/updateAuthor/:id", updateAuthor);
router.delete("/deleteAuthor/:id", deleteAuthor);
module.exports = router;
