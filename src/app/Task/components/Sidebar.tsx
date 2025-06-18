import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import { LayoutGrid } from "lucide-react";
import { Files } from "lucide-react";
import { LogOut } from "lucide-react";



const caprasimo = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

const Sidebar = () => {
  const name = useAuthStore((s) => s.name)
  const logout = useAuthStore((s) => s.logout)
  const link_style = 'text-left flex gap-3 text-[#7c7e85]'
  return (
    <div className='pt-6 pl-5 pr-5 flex flex-col gap-12'>
      <h1 className={`${caprasimo.className} tracking-wide  text-[1.3rem] text-center border-b-1 border-[#e0e1e4] pb-2`}>
        <span><h4 className='capitalize'>{name}</h4></span>
      </h1>
      <div className='flex flex-col gap-6 self-start pt-3'>
        <h1 className='font-medium text-[0.9rem] text-[#a3a5a8]'>Menu</h1>
        <button className={`${link_style}`}> <span><LayoutGrid /></span> <span>Dashboard</span></button>
        <button className={`${link_style}`}> <span><Files /></span> <span>Templates</span></button>
        <button className={`${link_style}`} onClick={()=> logout()}> <span><LogOut /></span> <span>Logout</span></button>
      </div>
    </div>
  )
}

export default Sidebar
