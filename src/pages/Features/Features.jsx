import React from 'react'
import Header from '../../components/FeatureSections/Header';
import {hero} from "../../assets/index";


const Features = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="block">
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full md:px-4 px-8">
            <Header />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features