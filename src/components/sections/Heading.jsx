import React from 'react'
import Button from '../Button.jsx';

const Heading = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center py-20 gap-5'>
            <h2 className='font-semibold text-[40px]'>Heading</h2>
            <p className='mb-3'>As you can see, the website is still under development</p>
            <Button link="#" label="Button"></Button>
    </div>
  )
}

export default Heading