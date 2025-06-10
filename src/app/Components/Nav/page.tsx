import React from 'react'
import Image from "next/image"
import logo from '../../img/logo_3.png'
import Link from "next/link"
import { Inter } from 'next/font/google'
import { LogIn } from 'lucide-react';

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
  })
const link_style = 'flex  w-[90px] rounded-[5px] h-[33px] pt-1  text-center justify-center'


const Nav = () => {
  return (
    <div className={`${inter.className} flex flex-col gap-3 w-[100%] text-[#363C46] z-10 bg-[#FFFFFF] fixed shadow-md `}>
      <div>
        <p className='font-semibold text-center'>Embark on a productivity and time-management journey with to-do app!</p>
      </div>
      <span className='w-[100vw] border-b  border-[#E6E7E9]'></span>
      <div className='flex pl-12 pr-12 justify-between '>
        <div>
          <Image src={logo} alt='' className='w-[4rem]' />
        </div>
        <div className='flex gap-12 pt-2'>
          <a href="#">Templates</a>
          <a href="#">Sponsors</a>
          <Link href='Verify/Signup'> Sign up</Link>
        </div>
        <div className=' pt-1'>
             <Link href='Verify/Login' className={`${link_style} bg-[#e9ebf1] `}> <span>Login</span> <span className='pt-1 pl-1'><LogIn size={15} /></span></Link>
        </div>
      </div>
      <span className='w-[100vw] border-b  border-[#E6E7E9]'></span>
     </div>
  )
}

export default Nav