import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBooks from '../Components/SearchBooks'
import Footer from '../Components/Footer'


function Searchbook() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen '>
         <SearchBooks/>
      </div>
      <Footer/>
    </>
  )
}

export default Searchbook
