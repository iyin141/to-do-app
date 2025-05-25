import React from 'react'
import Image from "next/image"
import logo from '../img/logo.png'
import Link from "next/link"
import { Inter } from 'next/font/google'

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


const Nav = () => {
  return (
     <div className="flex justify-between  gap-5 pt-10 md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8 max-sm:pb-8" >
      <div>
          <Image src={logo} className="w-[80px] " alt=""/>
      </div>
     <span className={` ${inter.className}   flex flex-col text-[0.9rem] justify-center items-center pl-10 pr-10 max-sm:pl-6 max-sm:pr-6 bg-white max-sm:bg-[#326EF7] max-sm:text-white h-[40px] max-sm:h-[30px] text-center rounded-[5px] font-bold tracking-wide`}> <Link href='/Verify/Login' >Login</Link></span>
    </div> 
  )
}

export default Nav