import React, { useState } from 'react'
import { MoreVertical } from "lucide-react";
import { useAuthStore } from '@/app/Components/Values';

const More = () => {
const toggle_3 = useAuthStore((s) => s.toggle_3)
const settoggle_3 = useAuthStore((s) => s.settoggle_3)
const [Display, setDisplay] = useState(false)

  return (
      <div className='w-[5%] flex flex-col' onClick={()=> settoggle_3(true)} >
          <button onClick={() =>  Display ? setDisplay(false) : setDisplay(true) }><MoreVertical /></button>
          <div className={`${toggle_3 ? 'pl-4' : 'hidden'}`}  >
              <div className={`${Display ? ' w-[50px] p-2 bg-[#E6E3E3] h-[50px] text-[0.8rem] flex flex-col  font-light   shadow-md  absolute' : 'hidden'}`}>
              <h1>Edit</h1>
              <h1>Delete</h1>
              </div>
          </div>
    </div>
  )
}

export default More