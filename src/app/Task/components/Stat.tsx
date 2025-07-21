
import React from 'react'
import { Montserrat } from 'next/font/google'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';
import { useAuthStore } from '@/app/Components/Values';

 



const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','600','700','800','900'],
})
const Stat = () => {
  const task = useAuthStore((s) => s.tasks_2)
  const task_missed = useAuthStore((s) => s.task_missed)
  const topcategory = useAuthStore((s) => s.topcategory)
  const task_month = useAuthStore((s) => s.task_month)
  const info = [
  { header: 'All Tasks set', value:task.length ,icon:AssignmentOutlinedIcon },
  { header: 'Total tasks missed', value: task_missed,icon:DoDisturbOutlinedIcon },
  { header: 'Frequent Category', value:topcategory ,icon:PieChartOutlineIcon },
  {header:'Tasks this month',value:task_month,icon:CalendarTodayOutlinedIcon}
]
  return (
    <div className={` ${font.className} flex justify-between gap-2 max-sm:flex-wrap`}>
      {info.map((i) => {    
   
        return (
        <div key={i.header} className='w-[23%] max-sm:w-[48%] max-sm:mt-3 bg-[#161616] hover:bg-[#25222F] rounded-[5px] pt-3  h-[100px] flex flex-col items-center gap-2'>
          <div className='text-[1rem] font-semibold flex gap-3'>{i.header}  </div>
          <h2 className='text-[1.8rem] font-bold'>{i.value}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Stat