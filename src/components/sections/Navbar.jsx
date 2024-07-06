import React from 'react'
import {navLinks} from "../../constants";

const Navbar = () => {
  return (
    <div className='flex flex-row gap-5'>
        {navLinks.map((nL) =>
        (
            <ul key={nL.id} className=''>
                <li>{nL.title}</li>
            </ul>
        ))}
    </div>
  )
}

export default Navbar