"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Card from './Components/Card'
import Button from './Components/Button';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Page = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='fixed bg-white top-0 w-full z-20 shadow-md'>
        <div className='container mx-auto flex justify-between items-center px-4 py-4'>
          <div className='items-center text-xl md:text-2xl font-bold'>
            <span>Co-efficient</span>
          </div>
          
          <div className='mx-auto hidden md:flex gap-10 text-black'>
            <Link href="" className='hover:text-blue-500 text-xl'>Features</Link>
            <Link href="#How-it-works" className='hover:text-blue-500 text-xl'>How-It-Works</Link>
            <Link href="#Pricing" className='hover:text-blue-500 text-xl'>Pricing</Link>
            <Link href="/" className='hover:text-blue-500 text-xl'>Settings</Link>
          </div>
          
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} size={25} className='md:hidden block' />
          ) : (
            <FiMenu onClick={() => setToggle(!toggle)} size={30} className='hover:text-blue-500 md:hidden block' />
          )}
        </div>
        
        <div className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/90 text-white top-[60px] ${toggle ? 'left-0' : 'left-[-100%]'}`}>
          <Link href="/" className='hover:text-blue-500 p-5 text-2xl'>Features</Link>
          <Link href="#How-it-works" className='hover:text-blue-500 p-5 text-2xl'>How-It-Works</Link>
          <Link href="#Pricing" className='hover:text-blue-500 p-5 text-2xl'>Pricing</Link>
          <Link href="/" className='hover:text-blue-500 p-5 text-2xl'>Settings</Link>
        </div>
      </div>
 
      <div className='bg-blue-950 h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
        <div className='container mx-auto px-4 z-10'>
          <div className='text-center text-white flex flex-col gap-[20px] md:gap-[40px]'>
            <div className='mx-auto text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif flex tracking tracking-wider'>
              <h4>Co-efficient</h4>
            </div>
            <div className='mx-auto bg-white h-[2px] w-[150px]'></div>
            <div>
              <h4>Streamline your PR workflow with</h4>
              <h4>GitHub and Slack integration</h4>
            </div>
            <div>
              <Button link="#" text="Get Started" />
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      <Card />
      <Footer />
    </>
  );
}

export default Page;



