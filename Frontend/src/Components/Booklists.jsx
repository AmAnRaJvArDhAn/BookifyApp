import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Bookcards from './Bookcards';

function Booklists() {
  const { Genreid } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenreBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/googlebooks/genre/${Genreid}`);
        setBooks(res.data.books || []);  // Adjust this based on your backend's response shape
      } catch (err) {
        console.error("Error fetching books by genre:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreBooks();
  }, [Genreid]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-3">
      <div className="mt-4 items-center justify-center text-center">
        <a href="/Course">
          <button className="bg-rose-700 text-white px-4 py-2 rounded-xl hover:bg-rose-800 transition-transform duration-200">
            Back
          </button>
        </a>
      </div>

      <h1 className="text-4xl ml-9 font-bold text-gray-700 capitalize mt-5">
        {Genreid} <span className="font-thin">ebooks</span>
      </h1>

      {loading ? (
        <p className="text-center mt-12 text-xl">Loading books...</p>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.length > 0 ? (
            books.map((book, idx) => <Bookcards key={idx} item={book} />)
          ) : (
            <p className="text-center col-span-3 text-lg text-gray-500">No books found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Booklists;
