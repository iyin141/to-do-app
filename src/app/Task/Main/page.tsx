'use client'
import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { verify } from '@/app/Components/Send'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Display from '../components/Display'
import Form from '../components/Form'
import Edit from '../components/Edit'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Rec from '../components/Rec'


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
    <div className='  flex gap-[8px] bg-[#F6F7F9] '>
      <div className='w-[18%] bg-white shadow-sm max-lg:hidden '>
        <Sidebar />
      </div>
      <div className='relative lg:w-[82%] md:w-[100%] max-sm:w-[100%] bg-[#F6F7F9] flex flex-col md:gap-12   min-h-screen'>
      <div>
        <Nav />
      </div>
       <div className={`${toggle ? 'z-20 absolute  text-center h-[100vh] w-[100%] bg-[#fcfcfc]  ' : 'hidden'}`}>
        <Form />
      </div>
      <div className={`${toggle_2 ? 'z-20 absolute  text-center h-[100vh] w-[100%] bg-[#fcfcfc]  ' : 'hidden'}`}>
        <Edit />
      </div>
        <div className={`${toggle || toggle_2 ? ' hidden  opacity-10 ' : '  w-[100%] flex flex-col md:pl-12 md:pr-12 max-sm:pl-4 max-sm:pr-4 gap-8 '}`}>
        <Rec />
        <Display />
      </div>
    </div>
    </div>
  )
}

export default Main