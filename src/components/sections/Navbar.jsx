import React from 'react'
import {navLinks} from "../../constants";
import Button from '../Button';

const Navbar = () => {
  return (
    <section id='navbar' className='flex justify-between w-full py-6 items-center'> 
        <div>
            <h2 className='text-black font-medium'>iNTFibeR</h2>
        </div>

        <div className='flex flex-row gap-5'>
            {navLinks.map((nL) =>
            (
                <ul key={nL.id} className=''>
                    <li className='text-black cursor-pointer font-medium'>{nL.title}</li>
                </ul>
            ))}
        </div>
    </section>
  )
}

export default Navbar