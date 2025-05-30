"use client"
import { useForm } from "react-hook-form"
import logo_2 from "../../img/logo_2.png"
import Image from "next/image"
import Link from "next/link"
import { login } from "@/app/Components/Send"
import { Formdata } from "@/app/Components/Send"
import { useAuthStore } from "@/app/Components/Values"
import { useRouter } from 'next/navigation'
import { useState } from "react"

const fields = ["Email", "Password"] as const;

const Login = () => {
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
    <div className="pl-12 pr-12 pt-6 pb-6 flex flex-col justify-center items-center  gap-5 ">
      <div className="pb-3">
        <Link href="/"><Image src={logo_2} className="w-[4rem]" alt="" /></Link>
      </div>
      <div className=" flex flex-col gap-5 pt-7 pl-7 pr-7 pb-8 border-t-2 border-[#607BFC] shadow-xl rounded-[5px] w-[100%] md:w-[60%] lg:w-[40%] xl:w-[35%] ">
        <h1 className="font-light text-[1rem]"><span className="text-[#607BFC]">Home</span> / Login</h1>
        <div className="pb-3">
          <h1 className="font-medium text-[1.2rem] pb-2">Login</h1>
          <p className=" text-[0.8rem] text-[#5E6282]">Input your email and password.</p>
        </div>
        <form onSubmit={handleSubmit(onsubmit)} >
          {fields.map((field) => (
           <div key={field} className="flex flex-col gap-3 pb-8">
            <label className="font-bold text-[0.8rem] tracking-wide" htmlFor={field}>{field}</label>
            <input className="font-bold text-[0.8rem] tracking-wide border-1 p-3 w-[100%] rounded-[5px]"  type='text' {...register(field, { required: `${field} is required` })}   placeholder={field === "Email" ? "Email" : "Click to show password"} />
            {errors[field] && <p>{errors[field].message}</p>}
           </div>
          ))}
          <p className="pb-5"> {text}</p>
          <button className="text-center bg-[#4475F2] text-white w-[100%]  pt-2 pb-2 rounded-[5px]" > Login </button>
        </form>
      </div>
      <div>
        <p className="pt-3"><span className="text-[0.8rem] text-[#5E6282]">Don&apos;t Have an Account</span> <Link className=" underline text-[0.8rem] text-[#4475F2] " href='/Verify/Signup'>Create an account</Link> </p>
      </div>
     </div>
  )
}

export default Login