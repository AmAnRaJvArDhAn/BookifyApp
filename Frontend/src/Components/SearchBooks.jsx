import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(res.data.items || []);
    } catch (err) {
      setError('Failed to fetch books. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 Search Books</h2>

      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter book name..."
          className="border rounded p-2 w-2/3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading books...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
              <img
                src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x195.png?text=No+Image'}
                alt={info.title}
                className="w-full h-60 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="text-sm text-gray-600">{info.authors?.join(', ') || 'Unknown Author'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBooks;
