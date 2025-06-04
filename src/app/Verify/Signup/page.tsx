"use client"
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form"
import logo_2 from "../../img/logo_2.png"
import Image from "next/image"
import Link from "next/link"
import { Create } from "@/app/Components/Send"
import { useState } from "react"
import { useAuthStore } from "@/app/Components/Values"
import { useRouter } from 'next/navigation'
import { Formdata } from "@/app/Components/Send"

const fields = ["Firstname","Lastname","Email", "Password"] as const;

const Signup = () => {
   const [show, setshow] = useState(false)
  const setname = useAuthStore((s) => s.setname)
  const setuid = useAuthStore((s) => s.setUid)
  const settoken = useAuthStore((s) => s.setToken)
  const router = useRouter()
  const setcount = useAuthStore((s) => s.setcount)
  const [text, settext] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Formdata>();
  async function onsubmit(data: Formdata) {
    settext('')
    const result = await Create(data)
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
    <div className="md:pl-12 md:pr-12 pt-6 pb-6 flex flex-col justify-center items-center  gap-5  ">
      <div className="pb-3">
        <Link href="/"><Image src={logo_2} className="w-[4rem]" alt="" /></Link>
      </div>
      <div className=" flex flex-col gap-5 pt-7 pl-7 pr-7 pb-7 border-t-2 border-[#607BFC] shadow-xl rounded-[5px] lg:w-[55%] md:w-[65%]">
        <h1 className="font-light text-[1rem]"><span className="text-[#607BFC]">Home</span> / Sign up</h1>
        <div className="pb-3">
          <h1 className="font-medium text-[1.2rem] pb-2">Create an Account</h1>
          <p className=" text-[0.8rem] text-[#5E6282]">Register your user info in the form below</p>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}  >
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-6 pb-8  " >
            {fields.map((field) => (
           <div key={field} className="flex flex-col gap-3 pb-5">
            <label className="font-bold text-[0.8rem] tracking-wide" htmlFor={field}>{field}</label>
            <div className="flex relative w-[100%]">
                <input className=" text-[0.8rem] tracking-wide border-1 p-3 w-[100%] rounded-[3px]" type={field === "Password" ? show ? 'text' : "password" : field === "Email" ? "email" : 'text'} {...register(field, { required: `${field} is required` })} placeholder={field === "Email" ? "Email" : "Click to show password"}  />
                <button className={`${field === 'Password' ? 'absolute pt-3  max-sm:pl-[85%] md:pl-[90%] lg:pl-[86%] ' : 'hidden'}`} onClick={() => show ? setshow(false) : setshow(true)}> {show ? <Eye /> : <EyeOff />}</button>
            </div>
            {errors[field] && <p>{errors[field].message}</p>}
           </div>
          ))}
          </div>
          <p className="pb-5"> {text}</p>
          <button className="text-center bg-[#4475F2] text-white w-[100%] pt-2 pb-2 rounded-[5px]" > Create Account </button>
        </form>
      </div>
      <div>
        <p className="pt-3"><span className="text-[0.8rem] text-[#5E6282]">Already Have an Account</span> <Link className=" underline text-[0.8rem] text-[#4475F2] " href='/Verify/Login'>Login here</Link> </p>
      </div>
     </div>
  )
}

export default Signup