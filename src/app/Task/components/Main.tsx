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
  
  const toggle_2 = useAuthStore((s) => s.toggle_2)
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
      
      <div className='relative flex flex-col md:gap-12   min-h-screen'>
       <div className={`${toggle ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Form />
      </div>
      <div className={`${toggle_2 ? 'z-20 absolute  text-center h-[100vh] w-[100%]   ' : 'hidden'}`}>
        <Edit />
      </div>
        <div className={`${toggle || toggle_2 ? ' hidden  opacity-10 ' : '  w-[100%] flex flex-col md:pl-12 md:pr-12 max-sm:pl-4 max-sm:pr-4 gap-8 '}`}>
        <Display />
      </div>
    </div>
    </div>
  )
}

export default Main