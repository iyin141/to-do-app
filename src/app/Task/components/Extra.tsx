import React, { useEffect, useRef } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { Formdata, NewTask } from '@/app/Components/Send'

const Extra = () => {
    const setcount = useAuthStore((s) => s.setcount)
    const temptask = useAuthStore((s) => s.temp_task)
    const settemptask = useAuthStore((s) => s.setTempTask)
    const tempdate = useAuthStore((s) => s.temp_date)
    const settempdate = useAuthStore((s) => s.setTempDate)
    const uid = useAuthStore((s) => s.uid) 
    const rehyrdated = useAuthStore((s) => s.rehydrated)
     const hasSubmitted = useRef(false)
    useEffect(() => {
           if (!rehyrdated || temptask === '' || tempdate === '' || hasSubmitted.current) return;
    
    hasSubmitted.current = true;
        async function call() {
    const data: Formdata = {
            Firstname: "",
            Lastname: "",
            Email: "",
            Password: "",
            id: '',
            Task: temptask,
            Date: tempdate,
            Uid: uid,
        }
          const result = await NewTask(data) 
          if (result.message !== '') {
          setcount(1)
                data.Task = ''
            data.Date = ''
            settempdate('')
            settemptask('')
            }
            
        }
        call()
        
    
    }, [rehyrdated, temptask, tempdate])
  return (
      <div>
         
    </div>
  )
}

export default Extra