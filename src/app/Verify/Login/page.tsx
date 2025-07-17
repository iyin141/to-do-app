"use client"
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form"
import { login } from "@/app/Components/Send"
import { Formdata } from "@/app/Components/Send"
import { useAuthStore } from "@/app/Components/Values"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Check } from "@/app/Components/Check"

import { Inter } from 'next/font/google'
import Link from "next/link";

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','700'],
})


const fields = ["Email", "Password"] as const;

const Login = () => {
  const [show, setshow] = useState(false)
   const setname = useAuthStore((s) => s.setname)
    const setuid = useAuthStore((s) => s.setUid)
  const settoken = useAuthStore((s) => s.setToken)
  const setcount = useAuthStore((s) => s.setcount)
  const router = useRouter()
  const [text, settext] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
   
  async function onsubmit(data: Formdata) {
    const result = await login(data)
     if (typeof result === 'string') {
      settext(result)
    }
    else {
      settext('')
      setuid(result?.uid)
      setname(result?.name)
       settoken(result?.value)
       setcount(0)
      router.push('/Task/Main')
    }
    reset();
  }


  return (
    <div className="flex flex-col">
      
      <div className={`${font.className} w-[100%] flex flex-col items-center justify-center pt-5  max-lg:justify-center xl:h-[100vh]`}>
        <div className="absolute">
          <Check />
      </div>

         
 
          <div className="flex flex-col   bg-[rgba(36,35,35,0.3)] border-[#232323] border-1  w-[30%] h-[80%] max-lg:w-[80%] pl-5 pr-5 pt-5 pb-5 max-lg:pb-10 rounded-[10px] text-[#828080]">
             <div className="text-[#cbc9c9] pb-10 flex gap-2 ">
          <h1 className="font-semibold text-[16px] mt-[1px]"><Link href='/'>To-Do</Link></h1>
           <span className="block border-r-1 max-lg:border-b-[1px] h-[15px] mt-[5px] border-white" ></span>
          <span className="text-[#828080] text-[0.8rem] font-light mt-1">Embrace Productivity</span>
        </div>

        <div className="text-[#b3aeae] pb-8 flex flex-col gap-2 text-center">
          <h1 className="font-semibold text-[2.1vw] max-lg:text-[1.5rem] ">Sign in</h1>
          <p className="text-[13px] font-semibold tracking-wide text-[#828080]">Currently Only supports pc and andriod</p>
        </div>

         <form onSubmit={handleSubmit(onsubmit)} className=" " >
          {fields.map((field) => (
           <div key={field} className="flex flex-col gap-3 pb-8 ">
              <div className="flex relative w-[100%] ">
                 <input className="font-light  text-white text-[0.8rem] tracking-wide  rounded-[5px] p-3 w-[100%] border-[#232323] border-1 " type={field === 'Email' ? 'text' : show ? 'text' : 'password'} {...register(field, { required: `${field} is required` })} placeholder={field} />
               <button className={`${field === 'Password' ? 'absolute pt-3  max-sm:pl-[88%] md:pl-[90%] lg:pl-[90%]  ' : 'hidden'}`} onClick={() => show ? setshow(false) : setshow(true)}> {show ? <Eye className="text-[#828080]" size={20} /> : <EyeOff className="text-[#828080]" size={20} />}</button>
             </div>
            {errors[field] && <p className="text-[#828080] text-[0.8rem] ">{errors[field].message}</p>}
           </div>
          ))}
          <p className=""> {text}</p>
        <button className="text-center bg-[white] text-black w-[100%]  pt-2 pb-2 rounded-[5px]" > Login </button>
      </form>
        
         <div className="flex gap-5  text-[0.8rem] font-semibold tracking-wide text-[#828080] mt-auto max-xl:mt-7 ">
          <h1 className="text-[#cbc9c9]">No Account Yet?</h1>
          <Link href='Signup/' className="underline">Register here</Link>
        </div>
      </div>
        </div>

     
     
    </div>
  )
}

export default Login