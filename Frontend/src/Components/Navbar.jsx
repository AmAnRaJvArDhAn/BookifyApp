import React, { useEffect } from 'react'
import { useState } from 'react'
import Login from '../Components/Login'

const Navbar = ({activeSection}) => {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setSticky(true)
      else setSticky(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const navItems = (
    <>
      <li className={`hover:text-rose-600 active:text-rose-700 ${activeSection === 'Home' ? 'underline text-rose-600' : ''}`}><a href='/'>Home</a></li>
      <li className={`hover:text-rose-600 active:text-rose-700 ${activeSection === 'Course' ? 'underline text-rose-600' : ''}`}><a href='/Course'>Books</a></li>
      <li className={`hover:text-rose-600 active:text-rose-700 ${activeSection === 'Contact' ? 'underline text-rose-600' : ''}`}><a href='/Contact'>Contact</a></li>
      <li className={`hover:text-rose-600 active:text-rose-700 ${activeSection === 'About' ? 'underline text-rose-600' : ''}`}><a href='/About'>About</a></li>
    </>
  );
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-3 bg-white ${sticky ? "sticky top-0 z-50 shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""
        }`}>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rose-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-white text-rose-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="hover:cursor-pointer" href='/'><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="70%" 
               height="auto" 
               viewBox="0 0 724 202" 
              preserveAspectRatio="xMidYMid meet">
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
                fill="#be123c" stroke="none">
                <path d="M418 1764 c-5 -4 -8 -35 -8 -68 l0 -61 -52 0 -53 0 -3 -57 -3 -56
-47 -9 -47 -8 -3 -623 c-1 -397 1 -630 8 -642 9 -17 24 -18 252 -13 222 5 255
3 383 -18 184 -31 326 -31 510 0 128 21 161 23 382 18 168 -3 244 -2 252 6 8
8 11 196 11 639 0 527 -2 629 -14 634 -7 3 -30 6 -50 7 -38 2 -37 -1 -40 82
l-1 40 -47 3 -48 3 0 52 c0 78 -4 81 -103 74 -151 -11 -373 -79 -517 -161
l-75 -42 -103 52 c-115 58 -207 93 -331 124 -90 23 -241 37 -253 24z"/>
                <path d="M5044 1697 c-11 -30 1 -51 34 -61 58 -16 65 -38 53 -168 -5 -62 -15
-183 -21 -268 -18 -246 -31 -364 -41 -377 -6 -6 -32 -13 -57 -15 -42 -3 -47
-5 -47 -28 0 -30 21 -34 206 -44 111 -5 128 -4 133 10 8 22 0 32 -40 49 -33
13 -34 16 -34 67 0 51 15 177 22 183 9 9 105 -18 116 -32 18 -25 74 -204 68
-219 -3 -7 -15 -14 -28 -16 -24 -3 -36 -34 -20 -50 6 -6 84 -16 174 -24 89 -8
186 -19 213 -23 28 -5 91 -14 140 -21 50 -6 98 -15 107 -20 9 -5 45 -14 80
-20 35 -5 108 -21 162 -34 104 -25 120 -25 131 1 7 20 -4 32 -58 58 -41 20
-42 21 -42 70 1 46 79 433 90 444 3 2 28 -1 56 -7 57 -13 79 -5 79 29 0 17
-26 29 -95 41 -27 5 -24 57 7 135 31 79 94 121 138 93 12 -8 11 -13 -7 -38
-34 -46 -37 -74 -13 -105 16 -21 30 -27 59 -27 49 0 75 20 90 69 9 33 9 47 -3
75 -31 75 -165 124 -260 96 -65 -19 -150 -112 -174 -191 -19 -61 -21 -64 -49
-60 -65 9 -68 8 -68 -24 0 -27 4 -31 43 -39 35 -7 41 -12 37 -27 -4 -11 -26
-118 -50 -240 -24 -121 -46 -223 -49 -227 -4 -3 -28 -9 -54 -12 -44 -5 -97 11
-124 38 -8 8 8 131 52 415 16 101 19 141 11 151 -7 8 -45 16 -94 20 -155 13
-142 14 -145 -17 -3 -23 2 -29 27 -38 44 -16 52 -50 36 -161 -7 -51 -18 -140
-25 -198 -20 -157 -17 -153 -100 -148 -93 5 -107 20 -155 168 -29 86 -47 124
-72 151 l-34 36 37 54 c62 89 88 109 146 109 42 0 71 20 66 46 -4 22 -35 28
-215 39 l-123 7 0 -30 c0 -27 4 -31 39 -37 22 -3 46 -12 55 -18 15 -11 14 -16
-4 -53 -12 -23 -36 -59 -54 -79 -29 -34 -38 -39 -90 -43 l-58 -5 6 59 c16 141
43 509 39 521 -4 9 -31 13 -102 13 -53 0 -106 3 -118 6 -15 4 -25 1 -29 -9z"/>
                <path d="M5921 1581 c-62 -58 -26 -161 56 -161 49 0 93 45 93 95 0 27 -8 44
-29 66 -39 38 -79 38 -120 0z"/>
                <path d="M4527 1409 c-92 -22 -176 -90 -225 -184 -24 -44 -27 -61 -27 -150 0
-117 17 -165 85 -239 57 -62 96 -84 174 -100 115 -25 228 12 304 98 121 138
119 340 -4 476 -80 89 -195 126 -307 99z m142 -86 c14 -11 41 -47 59 -81 43
-80 53 -192 28 -292 -22 -85 -51 -126 -103 -146 -80 -31 -142 -2 -179 83 -68
152 -39 378 56 441 41 28 97 25 139 -5z"/>
                <path d="M2940 1399 c-36 -4 -87 -14 -115 -22 -27 -8 -111 -30 -185 -50 -231
-62 -225 -60 -225 -87 0 -25 1 -25 72 -22 61 2 73 0 81 -15 5 -10 30 -94 55
-188 25 -93 62 -228 82 -300 21 -76 35 -147 33 -170 -3 -39 -4 -40 -60 -58
-61 -20 -74 -35 -54 -62 12 -17 17 -17 82 4 38 12 134 37 214 56 272 66 350
97 431 172 86 79 109 163 70 248 -39 84 -112 126 -222 127 l-70 0 42 36 c70
60 88 144 50 228 -40 87 -133 121 -281 103z m79 -92 c42 -21 64 -62 69 -125 5
-75 -13 -113 -73 -148 -25 -14 -76 -34 -113 -44 -37 -10 -74 -21 -83 -24 -13
-6 -23 19 -58 150 -23 86 -41 158 -39 160 2 1 35 12 73 23 80 22 189 27 224 8z
m182 -370 c73 -49 93 -161 40 -234 -41 -57 -208 -133 -293 -133 -35 0 -41 4
-52 33 -18 43 -79 287 -74 293 3 2 54 17 114 33 138 37 218 40 265 8z"/>
                <path d="M3748 1345 c-90 -25 -170 -94 -211 -184 -31 -67 -30 -225 2 -296 43
-96 133 -166 249 -196 47 -11 61 -11 120 5 98 26 179 86 217 161 28 55 30 66
30 169 -1 95 -4 118 -23 157 -48 98 -120 160 -215 185 -63 17 -107 16 -169 -1z
m142 -83 c34 -26 65 -73 91 -140 32 -83 32 -228 0 -295 -32 -65 -62 -87 -122
-87 -42 0 -55 5 -89 36 -101 91 -137 298 -74 429 15 33 49 64 84 78 25 10 83
-1 110 -21z"/>
                <path d="M6543 1183 c-20 -7 -16 -24 12 -53 23 -24 26 -40 39 -181 8 -84 18
-197 21 -249 3 -52 10 -126 16 -163 l9 -68 -55 -74 c-48 -66 -95 -109 -95 -88
0 4 9 30 21 58 16 40 18 56 10 77 -21 55 -103 48 -133 -12 -51 -101 18 -214
119 -195 51 9 102 67 228 255 60 91 128 188 151 215 22 28 49 64 59 80 48 75
121 159 152 171 27 12 33 20 33 44 0 17 -6 32 -12 34 -7 2 -50 16 -94 30 -84
27 -108 26 -119 -1 -7 -19 1 -29 45 -51 19 -9 35 -22 37 -27 2 -6 -46 -82
-106 -168 l-109 -157 -8 97 c-4 54 -8 143 -8 198 l-1 100 35 0 c43 0 60 10 60
35 0 14 -11 22 -42 30 -24 6 -85 24 -136 41 -94 29 -107 32 -129 22z"/>
              </g>
            </svg> </a>
          </div>
          <div className="navbar-end space-x-6 ">
            <div className="navbar-center hidden lg:flex">
              <ul className="flex space-x-6 text-gray-600 font-medium px-1">
                {navItems}
              </ul>
            </div>
            <div className='hidden md:block'>
              <label className="input input-bordered border-rose-700 flex items-center gap-2 bg-white ">
                <input type="text" className="grow text-gray-500 " placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-rose-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-rose-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className='btn bg-rose-700 border-none hover:bg-rose-800'onClick={() => document.getElementById('my_modal_3').showModal()}>
                <Login/>
              <a className="text-white px-3 py-2">Log in</a>
            </div>
            
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar
