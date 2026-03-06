'use client'
import { Envelope, Phone } from '@boxicons/react'
import Image from 'next/image'
import Logo from "@/public/Images/logo.svg";
import { navLinks, handleSmoothScroll } from './NavData';
import React from 'react'

const Footer = () => {
    const legalLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy"];
    return (
        <footer className='w-full pt-13'>
            <div className='w-[90%] max-w-350 mx-auto flex flex-col md:flex-row justify-start gap-15 md:gap-0 md:justify-between items-center'>
                <div>
                    <div className='flex justify-center md:justify-start items-center gap-5 mb-5'>
                        <Image src={Logo} width={60} height={60} alt='Logo' />
                        <h2 className='text-white text-[38px] sm:text-[44px] lg:text-[49px] xl:text-55xl font-bold tracking-tighter'>BTSTAXI</h2>
                    </div>
                    <p className='text-base 2xl:text-lg text-white/65 text-center md:text-left font-light max-w-80'>Reliable airport transfers across 6 major airports, booked in minutes</p>
                    <div className='flex flex-col justify-start items-center md:items-start gap-5 mt-8'>
                        <div className='flex justify-center items-center cursor-pointer group hover:bg-white/4 gap-3 bg-white/2 text-white border border-white/5 px-3 py-2 rounded-full'>
                            <Envelope pack="filled" fill='#FFDB63' size='base'/>
                            <span className='text-white/50 group-hover:text-white/80 font-normal tracking-wide text-sm 2xl:text-base'>contact@airporttransfer.com</span>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer group hover:bg-white/4 gap-3 bg-white/2 text-white border border-white/5 px-3 py-2 rounded-full'>
                            <Phone pack='filled' fill='#FFDB63' size='base'/>
                            <span className='text-white/50 group-hover:text-white/80 font-normal tracking-wide text-sm 2xl:text-base'>+44 7700 900123</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-start gap-12'>
                    <div className='flex flex-col justify-start items-center md:items-end gap-5'>
                        <span className='text-white/80 tracking-tight text-base 2xl:text-lg hover:text-white font-medium'>Navigation</span>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className='text-white/50 tracking-tight text-sm cursor-pointer 2xl:text-base hover:text-white'>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className='flex flex-col justify-start items-center md:items-end gap-5'>
                        <span className='text-white/80 tracking-tight text-base 2xl:text-lg hover:text-white font-medium'>Legals</span>
                        {legalLinks.map((link, index) => (
                            <span key={index} className='text-white/50 tracking-tight text-sm cursor-pointer 2xl:text-base hover:text-white'>
                                {link}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
            <p className='text-center pb-5 pt-13 text-sm 2xl:text-base text-white/60 tracking-tight'> © 2026 Airport Transfers. All rights reserved</p>
        </footer>
    )
}

export default Footer