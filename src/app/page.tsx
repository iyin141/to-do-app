import { Inter } from 'next/font/google'
import Nav from "./Nav/page";
import Link from 'next/link'

  const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional: for CSS variable usage
})


const Home = () => {

  return (
    <div className={` ${inter.className} bg-[url('./img/hero.png')] bg-contain bg-no-repeat h-[100vh]  bg-right  `}>
      <Nav />
      <div className="w-[55%] pt-12 pl-12 pr-12   flex flex-col gap-6">
        <h1 className="font-extrabold text-[4.3rem] leading-[4.5rem]"> Track & manage <span className="underline text-[#326EF7]">your tasks</span> easily</h1>
        <p className='text-[#5E6282] leading-8 text-[0.9rem] font-light'>Embark on a productivity journey like never before with our revolutionary to-do app! Experience a seamless way to organize your life, where managing tasks becomes effortless and enjoyable..✨</p>
        <Link href='/Login' className='mt-1 pt-1 pb-1 flex flex-col text-[1.2rem] justify-center items-center pl-8 pr-8 bg-[#326EF7] h-[50px] text-center rounded-[6px]  tracking-wide w-[160px] text-white' >Sign up</Link>
      </div>
   </div>
  )
}

export default Home