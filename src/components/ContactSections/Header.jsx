import React from 'react'



const Header = () => {
    
  return (
    <div className='w-full justify-center items-center flex flex-1 flex-col'>
        <h1 className='font-bold sm:text-6xl text-[40px] mb-5 sm:text-start text-center sm:mt-40 mt-10'>Pricing page title</h1>

        <p className='mb-5 sm:max-w-[650px] sm:text-center text-justify sm:text-[24px] text-[18px] text-third'>
            And a subheading describing your pricing plans, too
        </p>
        
    </div>
  )
}

export default Header