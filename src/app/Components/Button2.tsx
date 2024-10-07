import React from 'react'

const Button = ({link, text}) => {
  return (
    <a href={link} className='btn bg-red-600 hover:bg-gray-800 '>{text}</a>
  )
}

export default Button   