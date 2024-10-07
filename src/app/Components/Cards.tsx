import React from 'react'
import Button from './Button'

const Cards = ({ image, title }) => {
  return (
    <div className='mx-auto  rounded-xl overflow-hidden group hover:scale-105 hover:shadow-md duration-300'>
      <img src={image} alt="/" className=' max-w-full h-auto md:h-auto'/> 

    </div>
  )
}

export default Cards