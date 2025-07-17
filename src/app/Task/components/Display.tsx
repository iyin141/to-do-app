import React, {  useEffect,useState } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { FetchTask} from '@/app/Components/Send'
import More from './More'
import Extra from './Extra'
import { LuClock } from 'react-icons/lu';

function calctime(Due:string) {
  const today = new Date()
const targetDate = new Date(Due)
  const diffTime = targetDate.getTime() - today.getTime()
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return daysLeft
}

const Display = () => {
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const task_style = ' grid max-sm:grid-cols-[85%_10%] grid-cols-[94%_10%]  bg-[#262626] p-5 rounded-[10px] shadow-sm border-[#e6e3e3] gap-5    pr-2 '
  const [show, setshow] = useState(false)
  const search = useAuthStore((s) => s.search)
  const settoggle_3 = useAuthStore((s) => s.settoggle_3)
  const uid = useAuthStore((s) => s.uid)
  const settask_2 = useAuthStore((s) => s.settasks_2)
  const task = useAuthStore((s) => s.tasks_2)
  const count = useAuthStore((s) => s.count)
  const setcount = useAuthStore((s) => s.setcount)
  const rehyrdated = useAuthStore((s) => s.rehydrated)

  
  useEffect(() => {
    if (rehyrdated) {
      async function call() {
        const result = await FetchTask(uid)
        if (result !== 'no data') {
          settask_2(result)
          setcount(1)
          setshow(false)
        } else {
          setcount(1)
          settask_2([])
          setshow(true)
         }   
  }
  call()
    }
 
  }, [uid, count,rehyrdated])
  

  return (
    
    <div className='flex flex-col  xl:w-[100%] lg:w-[100%] max-lg:w-[100%] gap-5 pb-5 ' >
      <Extra />
      <div className=' flex flex-col gap-12   h-contain    pt-8  pb-12 overflow-hidden'>
        
        <div className={`flex flex-col gap-8`}>
          {task.map((t) => {
            const ti = calctime(t.Date)
            return (
            <div key={t.id} className={ `${[...clean(String(t.Task))].some(char => clean(search).includes(char)) ? task_style : search === '' ? task_style : 'hidden'} `}>
              <div className='flex justify-between flex-wrap md:gap-5  max-sm:gap-3 text-center pt-1  ' onClick={()=> settoggle_3(false)}>
                  <h1 className='flex flex-col text-left max-lg:w-[100%]'><span className='text-[1.2rem] font-semibold'>{t.Task}</span> <span className='font-light text-[0.8rem]'>{t.Category}</span> </h1>
                <h1 className='flex gap-2 pt-3'> <LuClock size={20} className='pt-[1px]'  /><span className={`${ti === 0 || ti < 0 ? 'hidden' : ''}`}>{ti} </span> {ti === 0 ? 'Today' : ti < 0 ? 'Task expired' : 'Days left'}</h1>
                <h1 className='text-white font-bold text-[1.2rem]'>{t.Priority === '1' ? 'Low' :  t.Priority === '2' ? 'Meduim' : 'High'}</h1>
              </div>
              <div>
                   <More id={t.id} Task={t.Task } Date={t.Date} Category={t.Category} Priority={t.Priority} />
              </div>
            </div>
          )
          } )}
        </div>
        <p className={`${show ? 'text-center font-light text-[1.2rem]' : 'hidden'}`}>Add a task to display here</p>
      </div>
    </div>
    
  )
}

export default Display