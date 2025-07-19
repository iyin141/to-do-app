'use client'
import React, { useState } from 'react'
import Image from "next/image"
import logo from '../../img/logo_3.png'
import Link from "next/link"
import { Menu, X } from "lucide-react";
import { Inter } from 'next/font/google'
import { LogIn } from 'lucide-react';

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
  })


const link_style = 'flex  w-[90px] rounded-[5px] h-[33px] pt-1  text-center justify-center k'
const resstyle = 'max-sm:border-b-1 max-sm:border-[#CFD0D2]   max-sm:mx-auto max-sm:text-center max-sm:pb-2 max-sm:pt-1'
const middile = 'flex gap-12 pt-2 max-sm:flex-col max-sm:gap-4 max-sm:w-[100%] max-sm:items-center max-sm:pb-4 max-sm:border-1 max-sm:border-[#c9c7c7] max-sm:mt-12  max-sm:z-10 max-sm:absolute bg-black'

const Nav = () => {
  const [show, setshow] = useState(false)
  return (
    <div className={`${inter.className} flex flex-col gap-3 w-[100%] text-[#8e8a8a] z-10 bg-blac md:fixed shadow-md bg-black  `}>
      <div>
        <p className='font-semibold text-center max-sm:[0.7rem] max-sm:font-light pt-1'>Embark on a productivity and time-management journey with to-do app!</p>
      </div>
      <span className="block h-[1px] w-full bg-gradient-to-r from-black via-[#535151] to-black" />
      <div className='flex pl-12 pr-12 max-sm:pl-0 max-sm:pr-4 justify-between '>
        <div>
          <Image src={logo} alt='' className='w-[7.5rem] pt-2 max-sm:pl-4 max-sm:w-[5.2rem]' />
        </div>
        <div className={`${middile} ${show ? '' : 'max-sm:hidden'}`}>
          <a href="#" className={`${resstyle}`}>Templates</a>
          <a href="#" className={`${resstyle}`}>About</a>
          <Link href='Verify/Signup' className={`${resstyle}`}> Sign up</Link>
        </div>
        <div className=' pt-1 flex gap-5'>
          <Link href='Verify/Login' className={`${link_style} bg-[#e9ebf1] text-black `}> <span>Login</span> <span className='pt-1 pl-1'><LogIn size={15} /></span></Link>
          <button className='hidden max-sm:block' onClick={() => show ? setshow(false) : setshow(true)}>{show ? <X /> : <Menu />} </button>
        </div>
      </div>
           <span className="block h-[1px] w-full border-b border-[#535151]" />
     </div>
  )
}

export default Nav