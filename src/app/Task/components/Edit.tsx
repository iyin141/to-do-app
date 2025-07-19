"use client"
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { EditTask, Formdata } from "@/app/Components/Send"
import { useAuthStore } from "@/app/Components/Values";
import { X } from 'lucide-react';

const fields = ["Task", "Date","Category","Priority"] as const;

const Edit = () => {
  const settask_edit = useAuthStore((s) => s.setTaskEdit)
    const setdate_Edit = useAuthStore((s) => s.setDateEdit)
  const task_edit = useAuthStore((s) => s.task_edit)
  const date_edit = useAuthStore((s) => s.date_edit)
  const settoggle_2 = useAuthStore((s) => s.settoggle_2)
  const setcount = useAuthStore((s) => s.setcount)
  const Category = useAuthStore((s) => s.Category)
  const priority = useAuthStore((s) => s.Priority)
  const id = useAuthStore((s) => s.id)
  const uid = useAuthStore((s) => s.uid)
   const now = new Date();
  const formatDateTime = (date: Date) => {
    return date.toISOString().slice(0, 16);
  };
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
  useEffect(() => {
  reset({
    Task: task_edit,
    Date: date_edit,
    Category: Category,
    Priority:priority
  });
}, [task_edit, date_edit, reset]);


 
  async function onsubmit(data: Formdata) {
    data.id = id;
    data.Uid = uid;
    const result = await EditTask(data)
    console.log(result)
    setcount(0)
    reset()
    setdate_Edit('')
    settask_edit('')
    settoggle_2(false)
  }
  return (
    <div className="pl-12 pr-12  pb-6 flex flex-col  items-center  gap-5 bg-black">
      <div className=" flex flex-col gap-5 pt-2 pl-7 pr-7 pb-8 bg-[rgba(36,35,35,0.3)] border-[#232323] border-1 shadow-xl rounded-[5px] w-[100%] md:w-[60%] lg:w-[40%] xl:w-[35%] ">
         <button className="pl-[98%]" onClick={() => settoggle_2(false)}><X /></button>
        <div className="pb-3 text-white">
          <h1 className="font-medium text-[1.2rem] pb-2">Edit your task</h1>
          <p className=" text-[0.8rem] ">Enter your new Task and Date here</p>
        </div>
        <form onSubmit={handleSubmit(onsubmit)} >
          {fields.map((field) => (
           <div key={field} className="flex flex-col gap-3 pb-8">
            <label className="font-bold text-[0.8rem] tracking-wide" htmlFor={field}>{field}</label>
           <input className="font-bold text-[0.8rem] tracking-wide border-1 p-3 w-[100%] rounded-[5px]"
              type={
                field === 'Date' ? 'datetime-local' :
                field === 'Priority' ? 'number' :
                'text'
              }
              placeholder={field === "Task" ? "Task" : field}
              min={field === 'Date' ? formatDateTime(now) : undefined}
              {...register(field, {
                required: `${field} is required`,
                ...(field === 'Priority' && {
                  min: { value: 1, message: 'Minimum is 1' },
                  max: { value: 5, message: 'Maximum is 5' },
                })
              })}/>
            {errors[field] && <p>{errors[field].message}</p>}
           </div>
          ))}
          <button className="text-center text-black bg-white w-[100%]  pt-2 pb-2 rounded-[5px]" >Change</button>
        </form>
      </div>
     </div>
  )
}

export default Edit