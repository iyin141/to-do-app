import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/app/Components/Values'

type shape = {
    item: string
}


const Search = () => {
    const { register, watch } = useForm<shape>()
    const result = watch("item","")
    const setsearch = useAuthStore((s) => s.setsearch)

    setsearch(result)
    
  return (
      <div>
          <form action="">
              <input type="text" placeholder='Search for items here ' {...register('item')} className='border-1 border-[#e6e3e3] p-2 rounded-[5px] font-light w-[100%] text-[0.9rem]' />
          </form>

    </div>
  )
}

export default Search