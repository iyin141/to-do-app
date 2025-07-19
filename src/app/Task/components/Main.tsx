'use client'
import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { verify } from '@/app/Components/Send'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Display from '../components/Display'
import Form from '../components/Form'
import Edit from '../components/Edit'
import Stat from './Stat'





const Main = () => {
    const settoggle = useAuthStore((s) => s.settoggle)
  const toggle_2 = useAuthStore((s) => s.toggle_2)
  const name = useAuthStore((s) => s.name)
  const toggle = useAuthStore((s) => s.toggle)
  const token = useAuthStore((s) => s.token)
  const logout = useAuthStore((s) => s.logout)
  const router = useRouter()
  const rehydrated = useAuthStore((s) => s.rehydrated)
  useEffect(() => {
    if (!rehydrated) return;
  async function check() {
   
    if (token !== '') {
    const result = await verify(token)
      if (result !== 'done') {
        router.push('/Verify/Login')
        logout()
    }
    } else {
      router.push('/Verify/Login')
      logout()
  }
  }
  check()
  },[token,rehydrated])
 

  return (
    <div className=' w-[100%]  bg-[#0A0908] text-[#C4B8A0] pb-20  border-[#1E1E1E] border-1 rounded-[10px] '>
      
      <div className='relative flex flex-col    min-h-screen'>
           <h1 className='font-normal text-[1rem] pt-3 tracking-wide text-[#C4B8A0] md:hidden text-center'>Dashboard</h1>
        <div className='flex  w-[100%] justify-between pt-8 pl-8 pr-8'>
          <div className=''>
          <h1 className='text-[#b3aeae] text-[1.8rem]'>Hi, {name} </h1>
          <p className='text-[1rem] font-light text-[#b3aeae]'>Welcome back to your To-do dashboard!</p>
        </div>
          <div className='flex gap-4 max-sm:hidden'>
            <button className='  bg-[#17161A]  h-[40px] w-[120px] pt-1 pb-2 pl-2 pr-2 text-center text-[#b3aeae] rounded-[5px] ' onClick={() => { settoggle(true) }}> <span className='text-[1.3rem]'>+</span> Add Task</button>
          </div>
        </div>
        
       <div className={`${toggle ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Form />
      </div>
      <div className={`${toggle_2 ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Edit />
      </div>
        <div className={`${toggle || toggle_2 ? ' hidden  opacity-10 ' : '  w-[100%] flex flex-col md:pl-8 md:pr-8 max-sm:pl-4 max-sm:pr-4 pt-5 '}`}>
          <Stat />
          <Display />
      </div>
    </div>
    </div>
  )
}

export default Main