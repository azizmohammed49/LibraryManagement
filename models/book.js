const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: String,
    publishedYear: Number,
    authorId: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    ratings: [Number],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
