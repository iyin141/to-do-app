import React, { useEffect } from 'react'
import { useAuthStore } from '@/app/Components/Values'
import { Formdata } from '@/app/Components/Send'

function calctime(Due:string) {
  const today = new Date()
  const targetDate = new Date(Due)
  const diffTime = targetDate.getTime() - today.getTime()
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
  return daysLeft
}

const Calc = () => {
    const task = useAuthStore((s) => s.tasks_2)
      const rehyrdated = useAuthStore((s) => s.rehydrated)
    const settaskmissed = useAuthStore((s) => s.settask_missed)
    const count = useAuthStore((s) => s.count)
    const topcategory = useAuthStore((s) => s.settopcategory)
    const settask_month = useAuthStore((s) => s.settask_month)
    useEffect(() => {
        function call() {
  let totalMissed = 0;
  let totalMonth = 0;
  const categoryCount: { [key: string]: number } = {};

  task.forEach((t: Formdata) => {
    const timeLeft = calctime(t.Date);

    if (timeLeft < 0) totalMissed += 1;
    if (timeLeft <= 30) totalMonth += 1;

    categoryCount[t.Category] = (categoryCount[t.Category] || 0) + 1;
  });


  settaskmissed(totalMissed);
  settask_month(totalMonth);

  let highestCount = 0;
  let top = '';
  for (const category in categoryCount) {
    if (categoryCount[category] > highestCount) {
      highestCount = categoryCount[category];
      top = category;
    }
  }
  topcategory(top);
}
call()
    },[rehyrdated,count])
  return (
      <div>
        
    </div>
  )
}

export default Calc