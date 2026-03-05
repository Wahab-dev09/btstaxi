import React from 'react'
import { navLinks, handleSmoothScroll } from './NavData'; // ✅ shared import
import Button from './Button';


const MobileDropDown = () => {
  return (
    <div className="flex flex-col px-2 pb-4 justify-center lg:hidden text-white font-plus-jakarta tracking-tight text-base font-medium 2xl:text-lg">
      {navLinks.slice(0, 4).map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.href)}
          className="py-4 h-full"
        >
          {link.name}
        </a>
      ))}
      <div className='mt-3'>
                <Button/>
      </div>
    </div>
  )
}

export default MobileDropDown