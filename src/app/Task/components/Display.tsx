import React from 'react'
import { useAuthStore } from '@/app/Components/Values'

const Display = () => {
  const settoggle = useAuthStore((s) => s.settoggle)
  return (
    <div className='flex flex-col  w-[70%] gap-5'>
      <h1 className='text-[1.2rem] font-bold text-[#607BFC]   '>Recents</h1>
      <div className='  shadow-md bg-[#fcfcfc] h-[90vh] border-1 border-[#F3EFEE]  pt-8 pl-8 pr-8 pb-12'>
        <div className='flex gap-12 justify-between'>
          <h1 className='pt-2' >Tasks due :</h1>
          <button className=' h-[40px] bg-[#393433] w-[70px] text-center text-white rounded-[10px] ' onClick={()=> settoggle(true)}>Add</button>
        </div>
    </div>
    </div>
  )
}

export default Display