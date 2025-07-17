import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/app/Components/Values'
import { Search} from 'lucide-react'

type shape = {
    item: string
}


const Filter = () => {
    const { register, watch } = useForm<shape>()
    const result = watch("item","")
    const setsearch = useAuthStore((s) => s.setsearch)

    useEffect(() => {
        setsearch(result)
   })
    
  return (
      <div>
          <form action="" className='flex bg-[#232323]   h-[2rem]  rounded-[40px] pr-2'>
              <input type="text" placeholder='Search for Tasks' {...register('item')} className='pt-4 pb-4 pl-4 pr-4 font-light max-sm:w-[100%] w-[12vw] mx-auto text-[0.9rem] focus:outline-none focus:ring-0' />
              <span className='  pt-2 '><Search size={18} className='text-[#919180]' /></span>
          </form>

    </div>
  )
}

export default Filter