import React from 'react'
import {Switch} from "antd";
import {plans} from "../../constants";
import Button from '../Button';


const Header = () => {

    
  return (
    <div className='w-full justify-center items-center flex flex-1 flex-col'>
        <h1 className='font-bold sm:text-6xl text-[40px] mb-5 sm:text-start text-center sm:mt-40 mt-10'>Pricing page title</h1>

        <p className='mb-5 sm:max-w-[650px] sm:text-center text-justify sm:text-[24px] text-[18px] text-third'>
            And a subheading describing your pricing plans, too
        </p>

            <Switch></Switch>

            <div className='w-full flex flex-row gap-10 justify-center items-center mt-10 p-10'>
                {plans.map((p) => (
                    <div className='shadow-2xl p-10 rounded-md flex-1 flex flex-col' key={p.id}>
                        <p>{p.name}</p>
                        <div className='flex flex-row gap-2'>
                            <h1>{p.prices}</h1>
                            <p>{p.deadline}</p>
                        </div>
                        
                        <ul className=''>
                            {p.features.map((f) => (
                                <li key={f.id}>{f.f1}<br />
                                {f.f2}<br />
                                {f.f3}<br />
                                {f.f4}<br /></li>
                            ))}
                        </ul>
                        <Button className='w-full' link="" label="sd"></Button>
                    </div>
                ))}
            </div>
        
    </div>
  )
}


export default Header;
