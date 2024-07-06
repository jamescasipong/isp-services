import React from 'react'
import {navLinks} from "../../constants";


const Navbar = () => {
  return (
    <section id='navbar' className='flex justify-between w-full py-5 items-center'> 
        <div>
            <h2 className='text-black font-medium text-[24px] sm:px-0'>iNTFibeR</h2>
        </div>

        <div className='flex-row gap-10 sm:flex hidden'>
            {navLinks.map((nL) =>
            (
                <ul key={nL.id} className='flex items-center'>
                    <li id={nL.id} className='text-black cursor-pointer font-medium navtext hover:text-orange-500'><a href={`#${nL.id}`}>{nL.title}</a></li>
                </ul>
            ))}
        </div>
    </section>
  )
}

export default Navbar