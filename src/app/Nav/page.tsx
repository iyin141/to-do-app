import React from 'react'
import Image from "next/image"
import logo from '../img/logo_2.png'
import Link from "next/link"
import { Inter } from 'next/font/google'

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
  })
const link_style = 'flex flex-col w-[90px] rounded-[5px] h-[35px]  text-center justify-center'


const Nav = () => {
  return (
     <div className="flex justify-between  md:pt-4 md:pb-3 pt-5  bg-[#F5F7FA] border-b-1 border-[#e7e7e7] md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8 max-sm:pb-5  " >
      <div className={`  ${inter.className} flex  `}>
        <Image src={logo} className="w-[30px] h-[30px] " alt="" />
        <h1 className='font-bold text-[1.2rem] text-[#263238]'>To-Do </h1>
      </div>
      <div className='font-extralight h-[30px] flex flex-col justify-center max-sm:hidden  '><p>Embark on a productivity journey  with to-do app!</p></div>
      <div className='flex justify-between gap-5 '>
        <span className={` ${inter.className} ${link_style} text-[#4CAF4F] hover:text-white hover:bg-[#4CAF4F]  `}> <Link href='/Verify/Login' >Login</Link></span>
       <span className={` ${inter.className} ${link_style} hover:text-[#4CAF4F] text-white bg-[#4CAF4F] hover:bg-[#F5F7FA]  ` }> <Link href='/Verify/Signup' >Sign up</Link></span>
      </div>
    </div> 
  )
}

export default Nav