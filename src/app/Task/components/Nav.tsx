'use client'
import React from 'react'
import Image from "next/image"
import logo_2 from '../../img/logo_2.png'
import { Inter } from 'next/font/google'
import { useAuthStore } from '@/app/Components/Values'
import Link from 'next/link'

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


const Nav = () => {
  const logout = useAuthStore((s) => s.logout)
  const rehydrated = useAuthStore((s) => s.rehydrated); 
  const toggle = useAuthStore((s) => s.toggle)
  const toggle_2 = useAuthStore((s) => s.toggle_2)
  if (!rehydrated) return null; 
  return (
    <div className={`${toggle || toggle_2 ? 'opacity-10' : ''}`}>
       <div className="flex justify-between pb-5 items-center  gap-5 pt-5 md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8 max-sm:pb-8 shadow-sm " >
      <div >
        <Link href='/'><Image src={logo_2} className="h-[38px] w-auto " alt="" /></Link>
      </div>
      
     <span className={` ${inter.className} pt-2   font-bold tracking-wide`}> <button onClick={() => logout()} >Logout</button></span>
    </div> 
    </div>
  )
}

export default Nav