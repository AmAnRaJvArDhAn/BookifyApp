import React from 'react'

function Contact() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-3'>
     <div className='mt-16 items-center justify-center text-left mx-auto md:px-36 px-4'>
        <h1 className='text-4xl font-bold text-gray-700'>Contact Us</h1>
         <p className='text-xl text-gray-600 mt-4'>Got any questions? Want to share your thoughts? Feel free to reach out to us. We'd love to hear from you.</p>
        
        <div className=' flex-none sm:flex  md:space-x-56 mt-10'>
          <div>
            <div className='text-2xl font-bold text-gray-600'>Phone</div>
            <div className='mt-4 text-xl text-gray-500'>+918797446211</div>
          </div>
          <div className='mt-4 sm:mt-0'>
            <div className='text-2xl font-bold text-gray-600'>Email Address</div>
            <div className='mt-4 text-xl text-gray-500'>bookli.webby@gmail.com</div>
          </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Contact
