import React from 'react'

const Button = ({link, label}) => {
  return (
    
    <button href={link} className='button text-white sm:text-[16px] text-[14px]'>{label}</button>
  )
}

export default Button