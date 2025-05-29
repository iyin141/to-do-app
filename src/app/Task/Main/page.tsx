'use client'
import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { verify } from '@/app/Components/Send'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Display from '../components/Display'
import Form from '../components/Form'

const Main = () => {
  const toggle = useAuthStore((s) => s.toggle)
  const token = useAuthStore((s) => s.token)
  const logout = useAuthStore((s) => s.logout)
  const router = useRouter()
  const rehydrated = useAuthStore((s) => s.rehydrated)
  const name = useAuthStore((s) => s.name)
  useEffect(() => {
    if (!rehydrated) return;
  async function check() {
    console.log(token)
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
    <div className='relative pt-12 md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8 flex flex-col gap-12 justify-center items-center min-h-screen'>
       <div className={`${toggle ? 'z-20 absolute  text-center h-[100vh] w-[100%]  ' : 'hidden'}`}>
        <Form />
      </div>
      <div className={`${toggle ? ' pt-12 w-[100%] flex flex-col justify-center items-center z-10 absolute gap-[5rem]   opacity-10 ' : '  w-[100%] flex flex-col justify-center items-center gap-12 '}`}>
        <h1 className='font-extralight text-[1.2rem] tracking-wide text-[#607BFC]  '><span>Dashboard</span> <span  >/</span> <span className='font-medium text-black uppercase'>{name}</span></h1>
        <Display />
      </div>
    </div>
  )
}

export default Main