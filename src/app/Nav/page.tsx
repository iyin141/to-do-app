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
     <div className="flex justify-between  gap-5 pt-10 pl-12 pr-12">
      <div>
          <Image src={logo} className="w-[80px] " alt=""/>
      </div>
     <span className={` ${inter.className} mt-1 pt-1 pb-1 flex flex-col text-[0.9rem] justify-center items-center pl-10 pr-10 bg-white h-[40px] text-center rounded-[10px] font-bold tracking-wide`}> <Link href='/Verify/Login' >Login</Link></span>
    </div> 
  )
}

export default Nav