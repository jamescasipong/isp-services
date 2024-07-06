import React from 'react'
import Button from '../Button.jsx';

const Heading = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center py-20 gap-5'>
            <h2 className='font-semibold text-[40px]'>Heading</h2>
            <p className='mb-3 sm:text-center text-justify max-w-[600px] h-auto'>James here, I'm still working on developing the website, iNTFibeR. I've used the same materials and labels on every division. However, I'll start working on that as well as the server and database once I've finished developing the entire front-end of the website. Thank you!</p>
            <Button link="#" label="Button"></Button>
    </div>
  )
}

export default Heading