import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GenrePage = () => {
  const { genreName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksByGenre = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${genreName}`);
        setBooks(res.data.items || []);
      } catch (err) {
        console.error("Error fetching books for genre:", err);
      }
    };

    fetchBooksByGenre();
  }, [genreName]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">Genre: {genreName}</h2>

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

export default GenrePage;
