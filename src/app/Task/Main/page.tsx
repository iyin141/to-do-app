'use client'
import { useAuthStore } from '@/app/Components/Values'
import React from 'react'
import { verify } from '@/app/Components/Send'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Main = () => {
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
        router.push('/')
        logout()
    }
    } else {
      router.push('/')
      logout()
  }
  }
  check()
  },[token])
 

  return (
    <div className='pt-10 md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8'>
      <div>
        <h1 className='font-extralight text-[1.2rem] tracking-wide text-[#5E6282] '><span>Dashboard</span> <span  >/</span> <span className='font-medium text-black uppercase'>{name}</span></h1>
      </div>
    </div>
  )
}

export default Main