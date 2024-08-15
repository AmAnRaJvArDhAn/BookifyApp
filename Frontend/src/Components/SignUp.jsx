import React from 'react'
import Login from '../Components/Login'

function SignUp() {
    return (
        <>
            <div id="my_modal_3" className="flex h-screen justify-center py-2 bg-gradient-to-br from-rose-300 via-rose-50 to-rose-0">
                <div className="modal-box bg-white min-h-screen">
                    <form method="dialog">
                        <a className="absolute right-6 top-6 bg-white text-gray-700" href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
                                <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </form>
                    <div className='text-left'>
                        <h1 className="font-bold text-3xl text-gray-800">Sign Up</h1>
                        <br />

                        <div className='mt-2'>
                            <h2 className='text-gray-600 text-xl font-thin' >First name</h2>
                            <input type="email" placeholder="" className='bg-rose-50  rounded-btn text-gray-800 outline-gray-600 font-light mt-2 px-3 h-8 w-4/5' />
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-gray-600 text-xl font-thin' >Last name</h2>
                            <input type="email" placeholder="" className='bg-rose-50  rounded-btn text-gray-800 outline-gray-600 font-light mt-2 px-3 h-8 w-4/5' />
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-gray-600 text-xl font-thin' >Email</h2>
                            <input type="email" placeholder="Enter your email" className='bg-rose-50  rounded-btn text-gray-800 outline-gray-600 font-light mt-2 px-3 h-8 w-4/5' />
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-gray-600 text-xl font-thin'>Password</h2>
                            <input type="Password" className='bg-rose-50 rounded-btn text-gray-800 outline-gray-600 font-thin mt-2 h-8 w-4/5' />
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-gray-600 text-xl font-thin'>Confirm Password</h3>
                            <input type="Password" className='bg-rose-50 rounded-btn text-gray-800 outline-gray-600 font-thin mt-2 h-8 w-4/5' />
                        </div>
                        <div className='flex ml-4 mt-6'>
                            <div className='btn bg-rose-700 border-none hover:bg-rose-800 text-white'>Sign Up</div>
                            <div className='ml-3 text-gray-600 hover:text-gray-800 mt-4 px-20 ' onClick={() => document.getElementById('my_modal_3')} >Already have an Account?
                               <Login/>
                                <a className='text-blue-600 font-thin underline hover:cursor-pointer active:text-rose-400' >Log In
                                </a>
                            </div>





                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp
