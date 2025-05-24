import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  description: String,
  price: Number,
  coverImage: String
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
