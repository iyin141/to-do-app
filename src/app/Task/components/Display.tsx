import React, {  useEffect } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { FetchTask } from '@/app/Components/Send'
import More from './More'
import Search from './Search'


const Display = () => {
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const task_style = 'grid grid-cols-[95%_10%] border-b-1 pb-4 border-[#e6e3e3] gap-5   pr-2 '
  const search = useAuthStore((s) => s.search)
  const settoggle_3 = useAuthStore((s) => s.settoggle_3)
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
    <div className='flex flex-col  w-[70%] gap-5 pb-5' >
      <h1 className='text-[1.2rem] font-bold text-[#607BFC]   '>Recents</h1>
      <div className=' flex flex-col gap-12  shadow-md bg-[#fcfcfc] h-contain border-1 border-[#F3EFEE]  pt-8 pl-8 pr-8 pb-12 overflow-hidden'>
        <div className='pl-[90%]'>
          <button className=' h-[40px] bg-[#393433] w-[70px] text-center text-white rounded-[10px] ' onClick={() => { settoggle(true)}}>Add</button>
        </div>
        <div>
          <Search />
        </div>
        <div className='flex flex-col gap-12'>
          {task.map((t) => (
            <div key={t.id} className={ `${[...clean(String(t.Task))].some(char => clean(search).includes(char)) ? task_style : search === '' ? task_style : 'hidden'}`}>
              <div className='flex justify-between flex-wrap gap-5 text-center pt-1   ' onClick={()=> settoggle_3(false)}>
                <h1>Task: {t.Task}</h1>
                <h1>Due: {t.Date}</h1>
              </div>
              <div>
                   <More />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Display