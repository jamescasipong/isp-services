import React from 'react'
import Button from '../Button.jsx';

const Heading = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center py-20 gap-5'>
            <h2 className='font-semibold text-[40px]'>Heading</h2>
            <p className='mb-3 text-center max-w-[600px] h-auto'>James here, I'm still working on developing the website, iNTFibeR. I've used random materials and the same labels on every division.</p>
            <Button link="#" label="Button"></Button>
    </div>
  )
}

export default Heading