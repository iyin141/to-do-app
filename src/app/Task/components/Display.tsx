import React, {  useEffect,useState } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { FetchTask} from '@/app/Components/Send'
import More from './More'
import Extra from './Extra'



import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/table'

function calctime(Due:string) {
  const today = new Date()
const targetDate = new Date(Due)
  const diffTime = targetDate.getTime() - today.getTime()
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return daysLeft
}

const Display = () => {
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const [show, setshow] = useState(false)
  const search = useAuthStore((s) => s.search)
  const uid = useAuthStore((s) => s.uid)
  const settask_2 = useAuthStore((s) => s.settasks_2)
  const task = useAuthStore((s) => s.tasks_2)
  const count = useAuthStore((s) => s.count)
  const setcount = useAuthStore((s) => s.setcount)
  const rehyrdated = useAuthStore((s) => s.rehydrated)
      const settoggle = useAuthStore((s) => s.settoggle)

  
  useEffect(() => {
    if (rehyrdated) {
      async function call() {
        const result = await FetchTask(uid)
        if (result !== 'no data') {
          settask_2(result)
          setcount(1)
          setshow(false)
        } else {
          setcount(1)
          settask_2([])
          setshow(true)
         }   
  }
  call()
    }
 
  }, [uid, count,rehyrdated])
  

  return (
    
    <div className='flex flex-col pl-3 pr-3 xl:w-[100%]  lg:w-[100%] max-lg:w-[100%] gap-5 pb-5 bg-[#161616] rounded-[5px] mt-5 ' >
      <Extra />
      <div className=' flex flex-col gap-3   h-contain   pb-12 overflow-hidden'>
        <div className='flex justify-between pr-2'>
          <h1 className='pl-2 text-[#c0bdbd] font-semibold text-[1.2rem] max-sm:pt-3'>All Tasks</h1>
          <h1 className='text-[2rem] md:hidden' onClick={() => { settoggle(true) }}>+</h1>
       </div>
      <TableContainer>
  <Table variant='simple' className='w-full text-white'>
    <Thead>
      <Tr className='text-[#c0bdbd] ' >
        <Th className='text-left px-6 py-4 font-normal w-[30%]'>Task</Th>
        <Th className='text-left px-6 py-4 font-normal w-[25%]'>Category</Th>
        <Th className='text-left px-6 py-4 font-normal w-[20%]'>Date Due</Th>
        <Th className='text-left px-6 py-4 font-normal w-[20%]'>Priority</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      {task.map((t) => {
        const ti = calctime(t.Date)
       return (
      <Tr key={t.id} className={ `${[...clean(String(t.Task))].some(char => clean(search).includes(char)) ? '' : search === '' ? '': 'hidden'} `} >
           <Td className='text-left px-6 py-4 w-1/4'>{t.Task}</Td>
           <Td className='text-left px-6 py-4 w-1/4'>{t.Category}</Td>
           <Td className='text-left px-6 py-4 w-1/4'><span className={`${ti === 0 || ti < 0 ? 'hidden' : ''}`}>{ti} </span> {ti === 0 ? 'Today' : ti < 0 ? 'Task expired' : 'Days left'}</Td>
          <Td className='text-left px-6 py-4 w-1/4'>{t.Priority === '1' ? 'Low' :  t.Priority === '2' ? 'Meduim' : 'High'}</Td>
           <Td className='pt-1 pr-2'>
              <More id={t.id} Task={t.Task } Date={t.Date} Category={t.Category} Priority={t.Priority} />
           </Td>
           
      </Tr>
      )
    }
      )}
    </Tbody>
  </Table>
</TableContainer>


        <p className={`${show ? 'text-center font-light text-[1.2rem]' : 'hidden'}`}>Add a task to display here</p>
      </div>
    </div>
    
  )
}

export default Display