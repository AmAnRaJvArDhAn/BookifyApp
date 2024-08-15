import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function Contacts() {
  return (
    <>
      <Navbar activeSection="Contact" />
      <div className='min-h-96'>
       <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default Contacts
