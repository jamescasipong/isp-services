import React from 'react'

const Button = ({link, label}) => {
  return (
    
    <button href={link} className='py-[14px] px-[24px] rounded-md bg-button text-white'>{label}</button>
  )
}

export default Button