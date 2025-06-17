import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/app/Components/Values'

type shape = {
    item: string
}


const Search = () => {
    const { register, watch } = useForm<shape>()
    const result = watch("item","")
    const setsearch = useAuthStore((s) => s.setsearch)

    useEffect(() => {
        setsearch(result)
   })
    
  return (
      <div>
          <form action="" >
              <input type="text" placeholder='Filter Tasks' {...register('item')} className='border-[1.5px] border-[#f3f0f0] bg-white h-[2rem] p-2 rounded-[10px] font-light w-[50vw] mx-auto text-[0.9rem]' />
          </form>

    </div>
  )
}

export default Search