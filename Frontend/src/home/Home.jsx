import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Freebook from '../Components/Freebook'
import Article from '../Components/Article'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar activeSection="Home" />
    <div className='min-h-screen bg-gradient-to-br from-rose-200 via-rose-50 to-rose-0'>
      <Banner/>
    </div>
    <Freebook/>
    <div className='min-h-96'>
      <Article/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
