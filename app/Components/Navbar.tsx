'use client'
import React, { useState } from 'react'
import Logo from "@/public/Images/logo.svg";

import dynamic from 'next/dynamic';
const MobileDropDown = dynamic(() => import('./MobileDropDown'), { ssr: false });


import { navLinks, handleSmoothScroll } from './NavData';
import Link from 'next/link';
import Button from './Button';
import { Menu } from '@boxicons/react';
import Image from 'next/image';


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation"
      className={`w-full fixed z-50 px-3 bg-neutral-900 overflow-hidden duration-300 ${menuOpen ? 'max-h-95' : 'max-h-16.25 lg:max-h-20.5 '}
  `}
    >
      {/* Desktop Nav */}
      <div className="w-full max-w-360 mx-auto border-b border-b-white/4 h-16.25 lg:h-20.5 flex justify-between items-center">
        <div className='flex opacity-100 justify-start items-center gap-12 lg:w-70'>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Go to homepage">
            <Image className='h-auto' width={30} height={30} src={Logo} loading='lazy' alt='BtsTaxi Logo' />
            <span className={`text-base font-bold lg:text-lg 2xl:text-xl font-boldonse text-white uppercase`}>BTSTAXI</span>
          </Link>

        </div>
        <div className="hidden lg:flex sm:gap-7.5 lg:gap-15 justify-center items-center select-none text-sm 2xl:text-base text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-white hover:-translate-y-0.5 duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:rounded-sm">
              {link.name}
            </a>
          ))}
        </div>


        <div className="hidden lg:flex sm:gap-7.5 lg:w-70 justify-end items-center select-none text-sm lg:text-sm 2xl:text-base font-normal text-neutral-700 tracking-tight">
          <Button/>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6.25 lg:hidden">
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((prev) => !prev)}>
            <Menu fill='white'/>
          </button>
        </div>
      </div>
      <MobileDropDown />

    </nav >
  );
};

export default Navbar;
