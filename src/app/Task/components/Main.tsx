'use client'
import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { verify } from '@/app/Components/Send'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Display from '../components/Display'
import Form from '../components/Form'
import Edit from '../components/Edit'





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
    <div className=' w-[83%] pb-20   bg-[#0E0E0E] text-white border-[#181717] border-1 rounded-[10px]'>
      
      <div className='relative flex flex-col    min-h-screen'>
        <div className='flex w-[100%] justify-between pt-8 pl-8 pr-8'>
          <div className=''>
          <h1 className='text-white text-[1.8rem]'>Hi, {name} </h1>
          <p className='text-[0.9rem]'>Welcome back to your To-do dashboard</p>
        </div>
          <div className='flex gap-4'>
            <button className='  bg-[#1b1918]  h-[40px] w-[120px] pt-1 pb-2 pl-2 pr-2 text-center text-white rounded-[5px] ' onClick={() => { settoggle(true) }}> <span className='text-[1.3rem]'>+</span> Add Task</button>
          <button className='  bg-[#BDBDBD]  h-[40px] w-[120px] pt-1 pb-2 pl-2 pr-2 text-center text-black rounded-[5px] ' onClick={() => { settoggle(true)}}> <span className='text-[1.3rem]'>+</span> Add Task</button>
          </div>
        </div>
        
       <div className={`${toggle ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Form />
      </div>
      <div className={`${toggle_2 ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Edit />
      </div>
        <div className={`${toggle || toggle_2 ? ' hidden  opacity-10 ' : '  w-[100%] flex flex-col md:pl-8 md:pr-8 max-sm:pl-4 max-sm:pr-4 gap-8 '}`}>
        <Display />
      </div>
    </div>
    </div>
  )
}

export default Main