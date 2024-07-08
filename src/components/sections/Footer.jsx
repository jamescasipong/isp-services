import React from 'react'
import {facebook, instagram, linkedin, youtube} from "../../assets/index.js";
import {footer} from "../../constants/index.js";

const Footer = () => {
  return (
    <footer className='flex w-full sm:flex-row flex-col justify-center items-start sm:py-16 py-10 sm:px-10 px-2'>
        <div className='flex-1 flex flex-col gap-20'>
            <h3>Site Name</h3>

            <div className='flex-1 flex flex-row gap-5 items-center'>
                <a href="#"><img src={facebook} alt="facebook" className='object-contain'/></a>
                <a href="#"><img src={instagram} alt="instagram" className='object-contain' /></a>
                <a href="#"><img src={youtube} alt="youtube" className='object-contain' /></a>
                <a href="#"><img src={linkedin} alt="linkedin" className='object-contain' /></a>
            </div>
        </div>

        <div className='flex-1 flex-wrap flex justify-between w-full md:mr-36 m-0 sm:mt-0 mt-3'>
            {footer.map((f) => (
                <div key={f.key} className='flex flex-col'>
                   <h4 className='sm:mt-0 mt-5 font-medium' >{f.title}</h4>

                   <a href={`#${f.id}`}><ul className='flex flex-col gap-2 mt-2'>
                      {f.links.map((link) => (
                        <li className='text-third' key={link.id}><a href={link.links}>{link.name}</a></li>
                      ))}
                   </ul></a>
                </div>
            ))}
        </div>
    </footer>
  )
}

export default Footer