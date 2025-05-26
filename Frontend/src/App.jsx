import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import SignUp from './Components/SignUp'
import Genrelist1 from './Genrelist/Genrelist1'
import Searchbook from './Searchbook/Searchbook'

const App = () => {
  return (
    <>
      <div className='bg-white min-h-screen '>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Course' element={<Courses />} />
            <Route path='/Contact' element={<Contacts />} />
            <Route path='/About' element={<Abouts />} />
            <Route path='/Sign Up' element={<SignUp />} />
            <Route path="/Course/:Genreid" element={<Genrelist1 />} />
            <Route path='/search' element={<Searchbook />} />
            {/* <Route path="/genre/:genreName" element={<GenrePage />} /> */}
          </Routes>

      </div>
    </>
  )
}

export default App
