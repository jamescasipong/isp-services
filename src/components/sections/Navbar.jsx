import React from 'react'
import {navLinks} from "../../constants";




const Navbar = () => {
  return (

    <section id='navbar' className=' flex justify-between w-full py-5 items-center'> 
        <div>
            <h2 className='text-black font-medium text-[24px] sm:px-0'>OptiNet</h2>
        </div>

        <div className='flex-row gap-10 sm:flex hidden'>
            {navLinks.map((nL) =>
            (
                <ul key={nL.id} className='flex items-center'>
                    <li className={`text-black cursor-pointer font-medium navtext hover:text-orange-500 ${nL.id}`}><a href={`#${nL.id} `}>{nL.title}</a></li>
                </ul>
                
            ))}

            <button className='button text-white text-[18px]'>Sign Up</button>

            
        </div>
    </section>

  )
}

export default Navbar