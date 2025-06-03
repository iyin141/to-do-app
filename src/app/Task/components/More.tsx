import React, { useState } from 'react'
import { MoreVertical } from "lucide-react";
import { useAuthStore } from '@/app/Components/Values';
import { RemoveTask } from '@/app/Components/Send';


type Values = {
  id: string,
  Task: string,
  Date:string
}

const More: React.FC<Values> = ({ id, Task, Date }) => {
  const settoggle_2 = useAuthStore((s) => s.settoggle_2)
  const settask_edit = useAuthStore((s) => s.setTaskEdit)
  const setdate_Edit = useAuthStore((s) => s.setDateEdit)
  const setid = useAuthStore((s) => s.setId)
const setcount = useAuthStore((s) => s.setcount)
const uid = useAuthStore((s) => s.uid)
const toggle_3 = useAuthStore((s) => s.toggle_3)
const settoggle_3 = useAuthStore((s) => s.settoggle_3)
const [Display, setDisplay] = useState(false)

  async function del(uid: string, id: string) {
    const result = await RemoveTask(uid, id);
    console.log(result)
    setcount(0)
  }
  return (
      <div className='w-[5%] flex flex-col' onClick={()=> settoggle_3(true)} >
          <button onClick={() =>  Display ? setDisplay(false) : setDisplay(true) }><MoreVertical /></button>
          <div className={`${toggle_3 ? 'pl-4' : 'hidden'}`}  >
              <div className={`${Display ? ' w-[65px] p-2 bg-[#E6E3E3] h-[60px] text-[1rem] flex flex-col  font-light   shadow-md  absolute' : 'hidden'}`}>
          <h1 onClick={() => { setdate_Edit(Date); settask_edit(Task); setid(id); settoggle_2(true) }}>EdIt</h1>
               <h1 onClick={() => { del(uid,id)  }}>Delete</h1>
              </div>
          </div>
    </div>
  )
}

export default More