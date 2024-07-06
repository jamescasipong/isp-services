import React from 'react'
import Button from '../Button';
import {image} from '../../assets/index.js';

const Home = () => {
  return (
    <section id="home" className='flex w-full justify-center items-center flex-col gap-y-20'>
        <div className='flex-col flex flex-1 items-center justify-center w-full py-10 mt-40 '>
            <h1 className='font-bold text-6xl mb-5'>Welcome to iNTFibeR</h1>
            <p className='mb-5 description max-w-[600px] text-center'>iNTFiber is an ISP service provider in the Philippines that provides one of the fastest internet in the country.
            </p>
            <Button link="#" label="Join Now!"></Button>
        </div>

        <div className='flex w-full flex-row flex-wrap-reverse sm:gap-[20px] gap-0'>
            <div className='flex-1 flex justify-center items-start flex-col'>
                <h4 className='font-bold text-[40px]'>Heading</h4>
                <p className='text-[24px] text-third mb-5'>A subheading for this section, as long or as <br className='sm:block hidden'/> short as you like</p>
                <Button link="#" label="Button"></Button>
            </div>
            <img className='flex-1' src={image} alt="" />
        </div>

        <div className='flex w-full flex-row flex-wrap sm:gap-[20px] gap-0'>
            <img className='flex-1 w-[100%] h-[100%]' src={image} alt="" />
            <div className='flex-1 flex  justify-center items-start flex-col md:ml-[40px] ml-0'>
                <h4 className='font-bold text-[40px]'>Heading</h4>
                <p className='text-[24px] text-third mb-5'>A subheading for this section, as long or as short as you like</p>
                <Button link="#" label="Button"></Button>
            </div>
        </div>
    </section>
  )
}

export default Home