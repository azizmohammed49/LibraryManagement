const authorModel = require("../models/author");

const getAuthors = async (req, res) => {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = new authorModel(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await authorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!author) {
      return res.status(400).json({ message: "Author not found" });
    } else {
      res.status(200).json(author);
    }
  } catch (error) {
    res.status(400).json({ message: error.messate });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await authorModel.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    } else {
      await author.deleteOne();
      res.status(200).json({ message: "Author deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAuthors, createAuthor, updateAuthor, deleteAuthor };
