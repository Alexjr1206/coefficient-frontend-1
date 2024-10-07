import React from 'react'
import Button5 from './Button5'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-100 min-h-[200px] '>
        <div className='container mx-auto'>
            <span className='flex flex-col items-center mb-10 '>
                <div className='text-4xl font-mono font-bold mt-12 mb-4'>Sign up today.</div>
                <div className='text-white'>
                    <Button5 link="#" text="Get Started" />
                </div>
            </span>
        </div>
    </footer>
  )
}

export default Footer
