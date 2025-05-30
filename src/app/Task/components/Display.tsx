import React, { useEffect } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { FetchTask } from '@/app/Components/Send'
import { MoreVertical } from "lucide-react";

const Display = () => {
  
  const settoggle = useAuthStore((s) => s.settoggle)
  const uid = useAuthStore((s) => s.uid)
  const settask_2 = useAuthStore((s) => s.settasks_2)
  const task = useAuthStore((s) => s.tasks_2)
  const count = useAuthStore((s) => s.count)
  const setcount = useAuthStore((s) => s.setcount)
  useEffect(() => {
    if (count === 0) {
      async function call() {
    const result = await FetchTask(uid)
        if (result !== 'no data') {
      settask_2(result)
      setcount(1)
    }
  }
  call()
   }
  }, [uid, count])
  

  return (
    <div className='flex flex-col  w-[70%] gap-5 pb-5'>
      <h1 className='text-[1.2rem] font-bold text-[#607BFC]   '>Recents</h1>
      <div className=' flex flex-col gap-12  shadow-md bg-[#fcfcfc] h-[90vh] border-1 border-[#F3EFEE]  pt-8 pl-8 pr-8 pb-12'>
        <div className='pl-[90%]'>
          <button className=' h-[40px] bg-[#393433] w-[70px] text-center text-white rounded-[10px] ' onClick={() => { settoggle(true)}}>Add</button>
        </div>
          {task.map((t) => (
            <div key={t.id} className=' flex justify-between border-b-1 pb-5 border-[#e6e3e3] gap-4  pr-2 '>
              <div className='flex justify-around flex-wrap gap-5 text-center pt-1 w-[75%] '>
                <h1>{t.Task}</h1>
                <h1>{t.Date}</h1>
              </div>
              <div className='w-[5%] flex flex-col'>
                   <button><MoreVertical /></button>
              </div>
            </div>
          ))}
    </div>
    </div>
  )
}

export default Display