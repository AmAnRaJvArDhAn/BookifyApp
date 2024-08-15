import React from 'react'
import banner from '../../src/b.png'
const Banner = () => {
    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 flex flex-col md:flex-row'>
                <div className='w-full md:1/2 mt-11 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-5xl font-bold text-black font-sans animate-slide-in-fromLeft'>Unlock a World of Knowledge- <span className='text-rose-700'>Download</span> Your Favourite Books</h1>
                        <p className='text-gray-900 text-xl animate-slide-in-fromLeft'>Discover endless stories, Novels, Poetries at Our website! With a simple click, your next great read is ready. <span className='font-bold'>Dive in and start exploring now!</span></p>
                        <label className="input input-bordered flex items-center gap-2 bg-gray-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow text-gray-600" placeholder="Enter you email to login" />
                    </label>
                    </div>
                    <button className="mt-6 btn btn-secondary bg-rose-700 border-none hover:bg-rose-800 text-white">Log in</button>
                    
                </div>
                <div className='w-full md:1/2'>
                   <img src={banner} alt="" className='animate-slide-in-fromRight ' />
                </div>
            </div>
        </>
    )
}

export default Banner
