'use client'
import React, { useState } from 'react'
import Image from "next/image"
import logo_2 from '../../img/logo_3.png'
import { useAuthStore } from '@/app/Components/Values'
import Link from 'next/link'
import Search from './Search'
import { Josefin_Sans } from 'next/font/google'
import { Menu, X } from "lucide-react";


 const caprasimo = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
  })


const Nav = () => {
  const rehydrated = useAuthStore((s) => s.rehydrated); 
  const toggle = useAuthStore((s) => s.toggle)
  const toggle_2 = useAuthStore((s) => s.toggle_2)
  const name = useAuthStore((s) => s.name)
  const shortname = name[0] + name[name.length - 1]
  const [show, setshow] = useState(false)
  if (!rehydrated) return null; 
  return (
    <div className={`${toggle || toggle_2 ? 'opacity-10' : ''}`}>
       <div className="flex justify-between pb-5  items-center w-[100%]  md:gap-12 pt-5 md:pl-8  max-sm:pl-6 max-sm:pr-6  " >
      <div >
        <Link href='/'><Image src={logo_2} className="h-[20px] max-sm:h-[15px] w-auto " alt="" /></Link>
      </div>
        <div > 
           <Search />
        </div>
        <div className={`${caprasimo.className}`}>
            <span ><h1 className='uppercase p-1 pt-2 tracking-wider border-1  h-auto w-[38px] text-[1.1rem] text-center rounded-[100%]'>{shortname}</h1>  </span>
        </div>
        <div>
                     <button className='hidden max-sm:block' onClick={() => show ? setshow(false) : setshow(true)}>{show ? <X /> : <Menu />} </button>
        </div>
    </div> 
    </div>
  )
}

export default Nav