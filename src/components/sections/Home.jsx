import React from 'react'
import Button from '../Button';
import {image} from '../../assets/index.js';
import {heading} from '../../constants/index.js';

const Home = () => {
  return (
    <section id="home" className='flex w-full justify-center items-center flex-col gap-y-20'>
        <div className='flex-col flex flex-1 items-center justify-center w-full py-10 mt-40 '>
            <h1 className='font-bold text-6xl mb-5 sm:text-start text-center '>Welcome to iNTFibeR</h1>
            <p className='mb-5 description max-w-[600px] text-center'>iNTFiber is an ISP service provider in the Philippines that provides one of the fastest internet in the country.
            </p>
            <Button link="#" label="Join Now!"></Button>
        </div>

        <div className='flex w-full flex-row flex-wrap-reverse sm:gap-[20px] gap-0'>
            <div className='flex-1 flex justify-center items-start flex-col'>
                <h4 className='font-bold text-[40px] md:mt-0 mt-5'>Heading</h4>
                <p className='text-[24px] text-third mb-5'>A subheading for this section, as long or as <br className='md:block hidden'/> short as you like</p>
                <Button link="#" label="Button"></Button>
            </div>
            <img className='flex-1 w-[100%] h-[100%]' src={image} alt="" />
        </div>

        <div className='flex w-full flex-row flex-wrap sm:gap-[20px] gap-0'>
            <img className='flex-1 w-[100%] h-[100%]' src={image} alt="" />
            <div className='flex-1 flex justify-center items-start flex-col md:ml-[100px] ml-0 md:mt-0 mt-5'>
                <h4 className='font-bold text-[40px]'>Heading</h4>
                <p className='text-[24px] text-third mb-5'>A subheading for this section, as long or as short as you like</p>
                <Button link="#" label="Button"></Button>
            </div>
        </div>

        <div className='w-full flex flex-col gap-5 px-5 py-5'>
            <div>
                <h2 className='font-semibold text-[40px]'>Heading</h2>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-x-40 gap-x-12 sm:gap-y-10 gap-y-10 w-full'>
                {heading.map((h) => (
                    <div className='flex flex-col justify-center gap-3'>
                        <img src={h.logo} className='w-[24px]  h-[28px] object-contain' alt={h.logo} />
                        <h4 className=''>{h.title}</h4>
                        <p className='md:max-w-[450px] w-auto h-auto'>{h.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col w-full items-center justify-center py-20 gap-3 bg-bg'>
            <h2 className='font-semibold text-[40px]'>Heading</h2>
            <p>Plus a subheading for your site’s footer</p>
            <Button link="#" label="Button"></Button>
        </div>
    </section>
  )
}

export default Home