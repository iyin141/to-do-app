import React, { useEffect  } from 'react'
import { useAuthStore } from './Values'
import { verify } from './Send'
import { useRouter } from 'next/navigation'

export const Check = () => {
    const router = useRouter()
    const token = useAuthStore((s) => s.token)
    const rehydrate = useAuthStore((s) => s.rehydrated)
    useEffect(() => {
        async function run() {
            if (!rehydrate) return ; 
        const result = await verify(token)
            if (result === 'done') {
            router.push('/Task/Main')
        }
        }
        run()
    },[token,rehydrate])
  return (
    <div></div>
  )
}
