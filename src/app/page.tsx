'use client'
import { Inter } from 'next/font/google'
import Nav from "./Nav/page";
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';
import { useAuthStore } from './Components/Values';
import { verify } from './Components/Send';
import guy from "../app/img/guy.png"

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})

const link_style = 'flex flex-col w-[130px] rounded-[5px] h-[55px]  text-center justify-center'
const animation = ` @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(-15%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }

          .bounce-slow {
            animation: bounce-slow 2s infinite;
          }`



const Home = () => {
  const logout = useAuthStore((s) => s.logout)
  const token = useAuthStore((s) => s.token)
  useEffect(() => {
   async function run() {
     const result = await verify(token)
     if (result !== 'done' || token === '') {
       logout()
       console.log(token)
     }
   }
     run()
}, [token]);

  return (
    <div className={` ${inter.className} `}>
      <style>
        {`${animation} `}
      </style>


      <div className=' bg-[#ABBED1] pb-12 flex flex-col  w-[100%] gap-12 '>
        <Nav />
        <div  className='md:pt-12 flex  max-sm:justify-center max-sm:flex-col-reverse gap-12 md:pl-12 md:pr-12 max-sm:pl-8 max-sm:pr-8 max-sm:pb-8  '>
          <div className='md:w-[55%] flex flex-col gap-8'>
            <h1 className='text-[5vw] max-sm:text-[10vw] font-semibold xl:leading-[76px] md:leading-[50px]'> <span className='text-[#4D4D4D]'>Track & manage your</span>  <span className='text-[#4CAF4F]'>tasks easily</span></h1>
            <p className='text-[#717171] font-light'>Experience a seamless way to organinzing your life becomes effortless and enjoyable..✨</p>
            <Link href='/Verify/Signup' className={` ${link_style} text-white bg-[#4CAF4F]  `}>Get started</Link>
          </div>
          <div className='bounce-slow w-[45%] max-sm:hidden'>
            <Image src={guy} className='w-[80%]' alt='' />
          </div>
        </div>
      </div>
     
      
   </div>
  )
}

export default Home