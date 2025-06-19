'use client'
import React, { useState } from 'react'
import Image from "next/image"
import logo_2 from '../../img/logo_3.png'
import { useAuthStore } from '@/app/Components/Values'
import Link from 'next/link'
import Search from './Search'
import { Josefin_Sans } from 'next/font/google'
import { LayoutGrid } from "lucide-react";
import { Files } from "lucide-react";
import { LogOut } from "lucide-react";

 const caprasimo = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
  })


const Nav = () => {
   const logout = useAuthStore((s) => s.logout)
    const link_style = 'text-left flex gap-3 text-[#7c7e85]'
  const rehydrated = useAuthStore((s) => s.rehydrated); 
  const toggle = useAuthStore((s) => s.toggle)
  const toggle_2 = useAuthStore((s) => s.toggle_2)
  const name = useAuthStore((s) => s.name)
  const shortname = name[0] + name[name.length - 1]
  const [show, setshow] = useState(false)

  if (!rehydrated) return null; 
  return (
    <div className={`${toggle || toggle_2 ? 'opacity-10' : ''}`}>
       <div className="flex justify-between pb-5  items-center w-[100%]  md:gap-12 pt-5 md:pl-8 md:pr-8  max-sm:pb-12  " >
     <div className={`${show ? 'flex flex-col gap-6 self-start pt-3 pl-4 pb-2 mt-10 absolute bg-white w-[100%] ' : 'hidden'} md:hidden`}>
            <button className={`${link_style}`}> <span><LayoutGrid /></span> <span>Dashboard</span></button>
            <button className={`${link_style}`}> <span><Files /></span> <span>Templates</span></button>
            <button className={`${link_style}`} onClick={()=> logout()}> <span><LogOut /></span> <span>Logout</span></button>
      </div>
        <div >
        <Link href='/'><Image src={logo_2} className="w-[5rem] max-sm:w-[4rem] pl-4 " alt="" /></Link>
      </div>
        <div > 
           <Search />
        </div>
        <div className={`${caprasimo.className} pr-6` } onClick={() => show ? setshow(false) : setshow(true)}>
            <span ><h1 className='uppercase p-1 pt-2 tracking-wider border-1  h-auto w-[38px] text-[1.1rem] max-sm:text-[0.9rem] max-sm:w-[35px] text-center rounded-[100%]'>{shortname}</h1>  </span>
        </div>
    </div> 
    </div>
  )
}

export default Nav