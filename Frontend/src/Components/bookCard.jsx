import React from 'react';

function BookCard({ item }){
    return (
        <>
        <div className="w-64 p-4 bg-white shadow-lg rounded-lg relative">
            <div className={`absolute top-2 left-2 px-2 py-1 rounded text-white text-xs ${item.condition === 'new' ? 'bg-orange-500' : 'bg-yellow-600'}`}>
                {item.condition === 'new' ? 'New' : 'Gently Used'} {item.discount}%
            </div>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold truncate">{item.title}</h3>
            <p className="text-sm text-gray-600">by {item.author}</p>
            <p className="mt-2 text-gray-800">
                <span className="line-through text-gray-500 mr-1">Rs. {item.oldPrice}</span>
                Rs. {item.price}
            </p>
            <p className="text-xs text-gray-500 mb-2">{item.format}</p>
            <div className="rating rating-sm">
                {Array(5).fill('').map((_, index) => (
                    <input
                        type="radio"
                        name={`rating-${item.id}`}
                        className="mask mask-star-2 bg-orange-400"
                        checked={index + 1 <= item.rating}
                        readOnly
                    />
                ))}
            </div>
            <button className="btn btn-primary btn-block mt-4">Add to cart</button>
        </div>
        </> 
    );
};

export default BookCard;
