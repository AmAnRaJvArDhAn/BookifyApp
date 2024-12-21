import React from 'react'
import Navbar from '../Components/Navbar'
import Booklists from '../Components/Booklists'
import Footer from '../Components/Footer'

function Genrelist1() {
    return (
      <>
        <Navbar activeSection="Course" />
        <Booklists />
        <Footer/>
      </>
    )
  }
  
export default Genrelist1
  