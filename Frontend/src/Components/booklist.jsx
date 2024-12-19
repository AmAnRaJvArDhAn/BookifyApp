import React from 'react'
import { useParams } from "react-router-dom";
import list from '../../src/list.json'
import Bookcard from './Bookcard'

function Booklist() {
  const { Genreid } = useParams();
  const genre = list.find((item) => item.id === parseInt(Genreid));
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 '>
        <div className='mt-4 items-center justify-center text-center '>
          <a href="/Course"><button className='bg-rose-700 text-white rou px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-rose-800 active:translate-y-0.5 transition-transform duration-200'>Back</button></a>
        </div>
        <h1 className='text-4x2 ml-9 font-sans font-bold text-gray-700 md:text-4xl '>
          {genre?.name} <span className='font-thin'>ebooks <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
            <path d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></span>
        </h1>
        <div className=' mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {genre?.books.map((book) => (
            <Bookcard key={book.id} item={book} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Booklist
