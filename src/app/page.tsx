import { Inter } from 'next/font/google'
import Nav from "./Nav/page";
import Link from 'next/link'
import Image from 'next/image';
import hero_3 from "../../src/app/img/hero_3.png"

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


const Home = () => {

  return (
    <div className={` ${inter.className}  xl:bg-[url('./img/hero.png')] md:bg-[url('./img/hero_2.png')] xl:bg-contain bg-cover  bg-no-repeat xl:h-[100vh]  bg-top xl:bg-right max-sm:h-[80%]    `}>
      <Nav />
      <div className="md:w-[60%] lg:pt-12 pt-8 md:pl-12 md:pr-12 pb-12 max-sm:pl-8 max-sm:pr-8 max-sm:pt-12   flex flex-col  md:gap-8 gap-12 max-sm:items-center max-sm:text-center max-sm:justify-center">
        <h1 className="font-extrabold xl:text-7xl lg:text-[3.2rem] md:text-[2.3rem] text-[2.3rem] lg:leading-[4.5rem]"> Track & manage <span className="underline text-[#326EF7]">your tasks</span> easily</h1>
        <p className='text-[#5E6282] lg:leading-8 md:leading-5   max-md:text-[0.7rem]  max-sm:text-[1rem]  max-sm:leading-[30px] font-light'>Embark on a productivity journey like never before with our revolutionary to-do app! Experience a seamless way to organize your life, where managing tasks becomes effortless and enjoyable..✨</p>
        <Link href='/Verify/Signup' className='mt-1  pt-1 pb-1 flex flex-col lg:text-[1.2rem] justify-center items-center pl-6 pr-6 bg-[#326EF7]  h-[50px] text-center rounded-[6px]  tracking-wide w-[180px] text-white' >Get Started</Link>
      </div>
      <footer><Image src={hero_3} className='md:hidden h-[40vh]' alt='' /></footer>
   </div>
  )
}

export default Home