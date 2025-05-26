import axios from 'axios';

export const searchBooksFromGoogle = async (req, res) => {
  const query = req.query.q || 'harry potter';

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books from Google Books API' });
  }
};
export const getBooksByGenre = async (req, res) => {
  const genre = req.params.genre;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`);
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books by genre from Google Books API' });
  }
};