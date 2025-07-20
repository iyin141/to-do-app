
import React from 'react'


const Five = () => {
  return (
      <div className='bg-black pl-[5%] pr-[5%] pt-[5%] pb-[5%] text-white flex flex-col gap-12'>
          <div className='flex justify-between max-lg:flex-col max-lg:gap-6'>
              <div className='w-[50%] max-lg:w-[100%] flex flex-col lg:items-start max-lg:text-center max-sm:items-start'>
                  <h1 className='font-semibold text-[2vw] pb-1 max-lg:text-[3vw] max-sm:text-[5vw]'>Subscribe to our newletter</h1>

              </div>
              <div className='w-[50%] max-lg:w-[100%] flex flex-col lg:items-end mx-auto gap-2'>
                  <div className='flex max-sm:flex-col gap-2'>
                      <input type="text" placeholder='Enter your email ' className='bg-[#252424] pt-3 pb-3 pl-5 pr-5 w-[20rem] max-lg:w-[100%]  rounded-[5px]' />
                     <button className=' bg-[#1F152D] text-white pt-2 pb-2 pl-5 pr-5 rounded-[5px] font-medium'>Subscribe</button>
                  </div>
               <p className='font-normal text-[#b3aeae] pt-2 max-lg:text-center'>Take your first step towards your American dream!</p>
              </div>
      </div>
      <span className="block h-[1px] w-full bg-gradient-to-r from-black via-[#8e8a8a] to-black" />
      <div className='flex justify-between max-sm:flex-col-reverse max-sm:justify-center max-sm:text-center max-sm:gap-6'>
        <div className='flex flex-col gap-2 text-[#b3aeae] '>
            <h1>+1-774-373-4206</h1>
            <h1>info@veripass.org</h1>
          <h1 className='flex flex-col gap-2'>14160 Dallas Parkway,<span>Dallas Texas 75254.</span></h1>
        </div>
        <div className='flex justify-between w-[35%] max-sm:w-[100%] max-sm:flex-col max-sm:gap-7'>
          <div>
            <div className='flex flex-col gap-2 text-[#b3aeae] md:text-end'>
              <h1 className='pb-2 text-[#8e8a8a]'>Quick Naviagtion</h1>
            <h1>How it works</h1>
            <h1>Why choose us?</h1>
              <h1>Pricing</h1>
              <h1>FAQs</h1>
        </div>
          </div>
          <div>
            <div className='flex flex-col gap-2 text-[#b3aeae] md:text-end'>
              <h1 className='pb-2 text-[#8e8a8a]'>Company</h1>
            <h1>Testimonials</h1>
            <h1>Contact us?</h1>
          </div>
          </div>
        </div>
      </div>
      <div className='text-[#b3aeae] w-[100%] justify-between flex pt-3 w max-sm:flex-col max-sm:text-center max-sm:gap-2'>
        <h1>© 2024 – All rights reserved.</h1>
        <h1 className='flex gap-3 max-sm:mx-auto'><span>Terms of use</span> <span>Privacy policy</span></h1>
      </div>
      <span className="w-full block border-b-[1px] border-[#524f4f]" />
   
    </div>
  )
}

export default Five