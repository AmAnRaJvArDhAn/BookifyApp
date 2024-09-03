import React from 'react'
import banner from '../../src/sahil.jpg'
import banner1 from '../../src/rupi.jpg'
const Article = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 '>
        <div className='mt-14 items-center justify-center text-center'>
          <h1 className='text-xl text-gray-400 font-sans'>Loved by +100 Students</h1>
          
        </div>
        <div className='mt-14 bg-slate-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 h-32 font-sans text-gray-600 p-3 sm:p-4 md:p-6 box-border flex rounded-2xl shadow-lg shadow-rose-100'>
              <img src={banner} className='w-28 h-24 rounded-2xl mr-5' alt="" />
              <span>I like Bookify because it's easy to use and simple, and we  always find awesome books. No junk Books. Every single Book is a gem!</span>
        </div>
        <div className='mt-14 ml-auto mb-9 bg-slate-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 h-32 font-sans text-gray-600 p-3 sm:p-4 md:p-6 box-border flex rounded-2xl shadow-lg shadow-rose-100'>
              <img src={banner1} className='w-32 h-24 rounded-2xl mr-5' alt="" />
              <span>I like Bookify because it's easy to use and simple, and we  always find awesome books. No junk Books. Every single Book is a gem!</span>
        </div>

        <div>
            <h2 className='text-gray-600 text-2xl mb-8'>Your #1 Book source</h2>
            <p className='font-sans text-gray-400 mb-8'>My top book source is a comprehensive, ever-expanding digital library that includes a diverse range of literature, academic texts, and reference materials. It allows me to pull from multiple authoritative books, ensuring accurate and well-rounded responses across various topics.</p>
        </div>
        
    </div>
    </>
  )
}

export default Article
