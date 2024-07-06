import React from 'react'

const Button = ({link, label}) => {
  return (
    
    <button href={link} className='button text-white'>{label}</button>
  )
}

export default Button