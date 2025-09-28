const booksModel = require("../models/book");

const getBooks = async (req, res) => {
  try {
    const books = await booksModel.find().populate("authorId");
    //  const books = await booksModel
    //   .find()
    //   .populate({ path: "author", strictPopulate: true });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = new booksModel(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await booksModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await booksModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    } else {
      res.status(200).json({ message: "Book deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getBooks, createBook, updateBook, deleteBook };
