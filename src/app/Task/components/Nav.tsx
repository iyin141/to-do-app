'use client'
import React from 'react'
import { useAuthStore } from '@/app/Components/Values'
import Filter from './Search'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';







const Nav = () => {
 
  const rehydrated = useAuthStore((s) => s.rehydrated); 
  const toggle = useAuthStore((s) => s.toggle)
  const toggle_2 = useAuthStore((s) => s.toggle_2)
  const name = useAuthStore((s) => s.name)
  const shortname = name[0] 
  
  if (!rehydrated) return null; 
  return (
    <div className={`${toggle || toggle_2 ? 'opacity-10' : ''} w-[100%] pt-5 pb-5 md:pl-2 `}>
      <div className="flex md:justify-between md:items-center w-full max-sm:flex-col max-sm:gap-3  " >
        <h1 className='font-normal text-[1rem] pt-1 tracking-wide text-[#C4B8A0] max-sm:hidden'>Dashboard</h1>
        <div className='flex gap-3' > 
          <Filter />
          <span className=' border-[#272727] border-1 border-r h-[1.8rem] mt-1'></span>
          <div className=''>
            <Chip avatar={<Avatar>{shortname}</Avatar>} sx={{ backgroundColor: '#161616', color: 'white', border: '1px solid #232323',paddingTop:'5px',paddingBottom:'5px' }} label={name} />
          </div>
        </div>
    </div> 
    </div>
  )
}

export default Nav