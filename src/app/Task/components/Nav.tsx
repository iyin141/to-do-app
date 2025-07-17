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
    <div className={`${toggle || toggle_2 ? 'opacity-10' : ''} w-[100%] pt-5 pb-5`}>
      <div className="flex justify-between items-center w-full px-4  " >
        <h1 className='font-normal text-[1rem] pt-1 tracking-wide'>Dashboard</h1>
        <div className='flex gap-3' > 
          <Filter />
          <span className='bg-white border-1 border-r h-[1.8rem] mt-1'></span>
          <div className=''>
            <Chip avatar={<Avatar>{shortname}</Avatar>} sx={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }} label={name} />
          </div>
        </div>
    </div> 
    </div>
  )
}

export default Nav