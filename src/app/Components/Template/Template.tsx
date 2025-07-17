import React from 'react'
import Link from 'next/link'
import { useAuthStore } from '../Values'



const info = [{ percent: '90', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
  { percent: '92', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
  { percent: '96', task: 'Get stuff later today', date: '2025-05-3T14:27' },
  { percent: '95', task: 'Go to the gym', date: '2025-08-23T14:07' },
]

const Template = () => {
  
  const settask = useAuthStore((s => s.setTempTask))
  const setdate = useAuthStore((s) => s.setTempDate)
  const token = useAuthStore((s) => s.token)

  return (
      <div className='w-[100%] pl-[5%] pr-[5%] flex flex-col gap-12'>
          <h1 className='font-semibold text-[2.2rem] max-sm:text-center'>Templates</h1>
          <div className='w-[100%]  gap-8 items-center justify-center  flex flex-wrap '>
        {info.map((info) => (
          <div key={info.percent} className='md:w-[28%] max-sm:w-[75%]     mt-5 shadow-md p-4 h-[250px] justify-center pb-4 rounded-[10px] flex flex-col gap-6 bg-[#0F0F0F] text-[#8e8a8a]'>
            <h1><span className='text-white font-semibold text-[2rem]'>{info.percent}</span> <span className=''>% of users have this task</span></h1>
            <h2 className='text-[1.2rem] max-sm:text-[1rem]  font-bold'>{info.task}</h2>
            <p className=' text-[1rem] font-light'>{info.date}</p>
            <button className='self-start pt-4  hover:text-black hover:mt-1 text-[1rem]' onClick={() => { setdate(info.date); settask(info.task) } }><Link href={token == '' ? 'Verify/Signup' : 'Verify/Login'}>Add now</Link></button>
          </div>
             ))}
          </div>
    </div>
  )
}

export default Template