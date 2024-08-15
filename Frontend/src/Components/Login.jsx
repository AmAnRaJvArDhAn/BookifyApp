import React from 'react'

function Login() {
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="absolute right-6 top-6 bg-white text-gray-700">✕</button>
                    </form>
                    <div className='text-left'>
                        <h1 className="font-bold text-3xl text-gray-800">Log in</h1>
                        <br />
                        <div className='mt-4'>
                            <h2 className='text-gray-600 text-xl font-thin' >Email</h2>
                            <input type="email" placeholder="Enter your email" className='bg-rose-50  rounded-btn text-gray-800 outline-gray-600 font-light mt-2 px-3 h-8 w-2/3' />
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-gray-600 text-xl font-thin'>Password</h2>
                            <input type="Password" className='bg-rose-50 rounded-btn text-gray-800 outline-gray-600 font-thin mt-2 h-8 w-2/3' />
                        </div>
                       <div className='flex ml-4 mt-6'>
                           <div className='btn bg-rose-700 border-none hover:bg-rose-800 text-white'>Log In</div>
                           <div className='ml-4 text-gray-600 hover:text-gray-800 mt-4 px-20'>Not Registered? <a href="/Sign Up" className='text-blue-600 font-thin underline active:text-rose-400'>Sign Up</a></div>
                       </div>
                    </div>

                </div>
            </dialog>
        </>
    )
}

export default Login
