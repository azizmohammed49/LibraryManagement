const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: String,
    birthdate: Date,
  },
  { timestamps: true }
);

authorSchema.pre("findOneAndDelete", async function (next) {
  const authorId = this.getQuery()["_id"];
  const Book = require("./book");
  await Book.deleteMany({ author: authorId });
  next();
});
module.exports = mongoose.model("Author", authorSchema);
