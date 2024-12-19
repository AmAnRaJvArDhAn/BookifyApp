import React from 'react'
import list from '../../src/list.json'
import Cards from './Cards'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 '>
        <div className='mt-14 items-center justify-center text-center '>
          <h1 className='text-4xl font-sans font-semibold text-gray-900 md:text-4xl '>
            Your Next Read is <span className='text-rose-700'>Here! :</span>
          </h1>
        </div>
        <div className='mt-4 items-center justify-center text-center'>
           <p className='text-2xl font-sans  text-gray-700 md:text-2xl  '>
             Explore a carefully curated selection of books tailored to a variety of interests.
           </p>
        </div>
         <div className='mt-4 items-center justify-center text-center '>
          <a href="/"><button className='bg-rose-700 text-white rou px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-rose-800 active:translate-y-0.5 transition-transform duration-200'>Back</button></a>
         </div>

         <div className=' mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
              list.map((item) => (
                <Cards key={item.id} items={item} />
              ))
            }
         </div>
      </div>
    </>
  )
}

export default Course
