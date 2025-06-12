import React from 'react'
import Link from 'next/link'



const info = [{ percent: '90', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
  { percent: '92', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
  { percent: '96', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
  { percent: '95', task: 'Get food this afternoon', date: '2025-08-23T14:07' },
]

const Template = () => {
  return (
      <div className='w-[100%] pl-[5%] pr-[5%] flex flex-col gap-12'>
          <h1 className='font-semibold text-[2.2rem] max-sm:text-center'>Templates</h1>
          <div className='w-[100%]  gap-8 items-center justify-center  flex flex-wrap '>
        {info.map((info) => (
          <div key={info.percent} className='md:w-[28%] max-sm:w-[75%]   border-1 border-[#d3d1d1] mt-5 shadow-md p-4 h-[250px] justify-center pb-4 rounded-[10px] flex flex-col gap-6'>
            <h1><span className='text-[#582066] font-semibold text-[2rem]'>{info.percent}</span> <span className='text-[#919090]'>% of users have this task</span></h1>
            <h2 className='text-[1.2rem] max-sm:text-[1rem] text-[#363C46] font-bold'>{info.task}</h2>
            <p className='text-[#9a9ca0] text-[1rem] font-light'>{info.date}</p>
            <button className='self-start pt-4 text-[#9a9ca0] hover:text-black hover:mt-1 text-[1rem]'><Link href='Verify/Signup'>Add now</Link></button>
          </div>
             ))}
          </div>
    </div>
  )
}

export default Template