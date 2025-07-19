import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { LayoutDashboard,  FileText, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import logo from '../../img/logo_3.png'




const Sidebar = () => {

  const logout = useAuthStore((s) => s.logout)
  const link_style = 'text-left flex gap-3 text-[15px] font-normal '
  
  const paths = [
     { name: 'Dashboard', icon: LayoutDashboard, action:logout },
  {name: 'Profile', icon: User, action:logout },
  {name: 'Templates', icon: FileText, action:logout },
    
]
  return (
    <div className=' flex flex-col pl-2 pr-5 pt-5 pb-5   h-[100vh] gap-12 overflow-hidden '>
      <div className=''>
        <Image src={logo} alt=';' className='w-[10rem] ' />
      </div>
      <div className='flex flex-col  gap-2 '>
        <h1 className='font-semibold pl-4 '>Menu </h1>
        {paths.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.name} className={`${link_style} text-[#c0bdbd] h-[45px] w-[180px] hover:bg-[#25222F] hover:text-white rounded-[5px] pl-4 pt-3 group` } onClick={()=> p.action()}>
              <Icon className='text-[#C4B8A0] group-hover:text-[#7D5A9D]' />
              {p.name}
            </div>
          )
        })}
      </div>
      <div className={`${link_style} text-[#c0bdbd] h-[45px] w-[180px] hover:bg-[#25222F] hover:text-white rounded-[5px] pl-4 pt-3 group  mt-auto`} onClick={() => logout()}>
              <LogOut className='text-[#C4B8A0] group-hover:text-[#7D5A9D]' />
              <h1>Logout</h1>
            </div>
    </div>
  )
}

export default Sidebar
