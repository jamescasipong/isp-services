import React from 'react'
import Button from '../Button';

const Home = () => {
  return (
    <section className='flex w-full justify-center items-center flex-col'>
        <div className='flex-col flex flex-1 items-center justify-center w-full py-10 mt-40'>
            <h1 className='font-bold text-6xl mb-5'>Landing page title</h1>
            <p className='mb-5 text-third'>And a subheading describing your site, too</p>
            <Button link="#" label="Get Started!"></Button>
        </div>

        <div>

        </div>
    </section>
  )
}

export default Home