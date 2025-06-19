import React from 'react'
import { Raleway } from 'next/font/google'
import { LuShoppingCart, LuDumbbell, LuPlane} from 'react-icons/lu';
import { TbRun } from 'react-icons/tb';

const caprasimo = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

const Categories = [{ name: 'Gym', color: 'text-[#BFA75B]', icon: LuDumbbell , hover:'hover:bg-[#BFA75B]' },
  { name: 'Shopping', color: 'text-[#40E0D0]', icon: LuShoppingCart, hover:'hover:bg-[#40E0D0]' },
  { name: 'Flight', color: 'text-[#008080]', icon: LuPlane, hover:'hover:bg-[#008080]' },
  { name: 'Lifestyle', color: 'text-[#50C878]', icon: TbRun, hover:'hover:bg-[#50C878]'  },
  
]

const Rec = () => {
  return (
    <div className={`${caprasimo.className} `}>
      <h1 className={` font-semibold text-[1.1rem] pb-12`}>Recommend Categories</h1>
      <div className='flex md:gap-6 max-sm:gap-2  max-sm:justify-center max-sm:flex-wrap'>
        {Categories.map((cat) => {
          const Icon = cat.icon
          return (
            <div key={cat.name} className={` ${cat.hover} ' max-sm:mt-2 group flex pt-3 pb-3 pl-4 border-1 border-[#c2c5c7] w-[25vw] max-sm:w-[35vw] rounded-[10px] gap-2 '`}>
             <Icon className={`${cat.color} group-hover:text-white `} size={21} /> 
            <h1>{cat.name}</h1>
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Rec