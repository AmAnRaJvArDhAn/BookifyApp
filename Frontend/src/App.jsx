import React from 'react'
import Home from './home/Home'
import {Route,Routes} from 'react-router-dom'
import Courses from './Courses/Courses'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <>
    <div className='bg-white min-h-screen '>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Course' element={<Courses/>}/>
         <Route path='/Contact' element={<Contacts/>}/>
         <Route path='/About' element={<Abouts/>}/>
         <Route path='/Sign Up' element={<SignUp/>}/>
      </Routes>  
    </div>
    </>
  )
}

export default App
