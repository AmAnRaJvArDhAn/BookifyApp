import React from 'react';

function Bookcards({ item }) {
  console.log("Book item:", item);

  const volumeInfo = item.volumeInfo || {};
  const title = volumeInfo.title || "No title";
  const authors = volumeInfo.authors?.join(', ') || "Unknown Author";
  const image = volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150";
  const price = Math.floor(Math.random() * 500 + 100); // Just a fallback price

  return (
    <div className="px-10">
      <div className="card bg-white shadow-md border border-gray-200 rounded-md hover:scale-95 transition-transform duration-300 cursor-pointer">
        <figure className="p-14 pt-6">
          <img
            src={image}
            alt={title}
            className="w-full h-54 shadow-2xl shadow-black"
          />
        </figure>
        <div className="card-body px-5 pb-4">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            by {authors}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-rose-700 font-semibold text-lg">
              ₹{price}
            </span>
            <button className="px-3 py-1 text-sm bg-rose-700 text-white rounded-2xl hover:bg-rose-900">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookcards;
