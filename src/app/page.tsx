'use client'
import { Inter } from 'next/font/google'
import Nav from "./Components/Nav/page";
import { useEffect } from 'react';
import { useAuthStore } from './Components/Values';
import { verify } from './Components/Send';
import Main from './Components/Hero/page';
import About from './Components/About/About';
import Template from './Components/Template/Template';

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})





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
    <div className={` ${inter.className}  overflow-x-hidden bg-[#FFFFFF]`}>
      <div className='  pb-12 flex flex-col w-[100%] gap-[8rem]  '>
        <Nav />
        <div className='w-[99%]  flex justify-center lg:pt-[8%] md:pt-[12%]   '>
          <Main />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Template />
        </div>
      </div> 
   </div>
  )
}

export default Home