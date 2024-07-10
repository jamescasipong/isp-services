import React from 'react'
import Home from '../../components/sections/Home';
import Heading from '../../components/sections/Heading';
import Footer from '../../components/sections/Footer';


const HomeMain = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      
      
      
      <div className='block'>
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full  md:px-4 px-8">
              <Home></Home>
          </div>
        </div>

        <div className="flex justify-center items-start bg-bg mt-20">
          <div className="xl:max-w-[1280px] w-full  md:px-4 px-4">
              <Heading></Heading>
          </div>
        </div>
        </div>

        
      
    </div>
  )
}

export default HomeMain