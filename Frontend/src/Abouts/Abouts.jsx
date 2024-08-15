import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About from '../Components/About'

function Abouts() {
  return (
    <>
        <Navbar activeSection="About" />
        <div className='min-h-screen'>
          <About/>
        </div>
        <Footer/>
    </>
  )
}

export default Abouts
