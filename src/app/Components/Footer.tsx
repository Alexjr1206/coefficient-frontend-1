import React from 'react'
import Button3 from './Button3'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-500 min-h-[300px] md:h-[200px]'>
        <div className='container mx-auto'>
            <span className='flex flex-col items-center mb-16 '>
                <div className='text-4xl font-mono font-bold mt-24 mb-2'>Sign up today.</div>
                <div className='text-white'>
                    <Button3 link="#" text="Get Started" />
                </div>
            </span>
        </div>
    </footer>
  )
}

export default Footer
