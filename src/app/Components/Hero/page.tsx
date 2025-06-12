import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';




const Main = () => {
  return (

    <div >
      <style >
        {`
         @keyframes bounce-slow {
            0%, 100% {
              transform: translatex(5%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translatex(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }

          .bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
         `}
       </style>
      <div className='overflow-x-hidden flex flex-col md:pt-[8.5%]  items-center bg-[url("/img/hero_2.png")] pb-12    bg-cover  bg-top w-[72vw] max-sm:w-[100vw]'>
        <div className='flex flex-col  text-center justify-center'>
          <h1 className='text-[#582066] pb-3' >Seamless experience</h1>
          <h1 className=' mx-auto text-[6vw] max-sm:text-[2.5rem] text-black font-medium  text-center lg:leading-20 md:pb-8 max-sm:pb-4 w-[85%]'>Track & manage your tasks easily and organized </h1>
          <p className='mx-auto w-[85%] text-[1.2rem]  font-light text-[#919090] pb-8'>Experience a seamless way to organizing your life becomes effortless and enjoyable..✨Boost productivity, stay motivated.</p>
          <Link  href='Verify/Signup' className='bounce-slow flex gap-1 rounded-[10px]  mx-auto justify-center bg-[#582066] pl-5 pr-4 pt-3 pb-3'><span className='text-white font-light text-[1.2rem]'>Get started</span> <ArrowRight color='white' className="w-6 h-6 pt-2" /></Link>
        </div>
      </div>
    </div>
  )
}
export default Main