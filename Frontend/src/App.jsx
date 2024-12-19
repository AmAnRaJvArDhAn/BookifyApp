import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import SignUp from './Components/SignUp'
import Genrelist1 from './Genrelist/Genrelist1'

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

          </Routes>

      </div>
    </>
  )
}

export default App
