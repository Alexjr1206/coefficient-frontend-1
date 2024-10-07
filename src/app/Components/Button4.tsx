import React from 'react'

const Button = ({link, text}) => {
  return (
    <a href={link} className='btn #F200 hover:bg-gray-800'>{text}</a>
  )
}

export default Button   