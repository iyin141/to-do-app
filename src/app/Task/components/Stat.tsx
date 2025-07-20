
import React from 'react'
import { Montserrat } from 'next/font/google'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';


 

const info = [
  { header: 'All Tasks set', value: '2',icon:AssignmentOutlinedIcon },
  { header: 'Total tasks missed', value: '3',icon:DoDisturbOutlinedIcon },
  { header: 'Frequent Category', value: '4',icon:PieChartOutlineIcon },
  {header:'Tasks this month',value:'5',icon:CalendarTodayOutlinedIcon}
]

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','600','700','800','900'],
})
const Stat = () => {
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