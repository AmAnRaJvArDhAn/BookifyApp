import React from 'react'

function Cards({ items }) {
    return (
        <>
            <div className='px-8'>
                <div className="card bg-rose-100 w-80 shadow-xl hover:scale-95 cursor-pointer transition-transform duration-300 active:translate-y-3">
                    <figure>
                        <img
                            src={items.image}
                            alt=" "
                            className="w-80 h-80  " />
                    </figure>
                    <div className="card-body text-rose-900">
                        <h2 className="card-title">
                            {items.name}
                            <div className="badge bg-green-500 text-white border-none">{items.category}</div>
                        </h2>
                        <p>{items.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline h-8">₹{items.price}</div>
                            <div className="badge w-16 h-10 bg-rose-700 text-white hover:bg-rose-900 cursor-pointer">View</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
