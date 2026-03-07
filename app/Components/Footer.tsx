'use client'
import { Envelope, Mobile, Phone, Telegram } from '@boxicons/react'
import Image from 'next/image'
import Logo from "@/public/Images/logo.svg";
import { navLinks, handleSmoothScroll } from './NavData';
import Link from 'next/link';

const Footer = () => {
    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-of-use" },
        { name: "Refund Policy", href: "/refund-policy" },
    ];
    const contacts = [
        {
            type: "Email",
            icon: Envelope,
            value: "contact@airporttransfer.com",
        },
        {
            type: "Phone Number",
            icon: Mobile,
            value: "+447368877853",
        },
        {
            type: "Landline Number",
            icon: Phone,
            value: "+442039166364",
        },
    ];
    return (
        <footer className='w-full pt-13 bg-neutral-900 font-dm-sans'>
            <div className='w-[90%] max-w-350 mx-auto flex flex-col md:flex-row justify-start gap-15 md:gap-0 md:justify-between items-center md:items-start'>
                <div>
                    <div className='flex justify-center md:justify-start items-center gap-5 mb-5'>
                        <Image src={Logo} width={60} height={60} alt='BtsTaxi Logo' />
                        <h2 className='text-white text-[38px] sm:text-[44px] lg:text-[49px] xl:text-55xl font-bold tracking-tighter'>BTSCARS</h2>
                    </div>
                    <p className='text-base 2xl:text-lg text-white/65 text-center md:text-left font-light max-w-80'>Reliable airport transfers across 6 major airports, booked in minutes</p>
                    <div className='flex flex-col justify-start items-center md:items-start gap-5 mt-8'>
                        {contacts.map((contact, index) => {
                            const IconComponent = contact.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex justify-center items-center cursor-pointer group hover:bg-white/4 gap-3 bg-white/2 text-white border border-white/5 px-3 py-2 rounded-full"
                                >
                                    <IconComponent pack="filled" fill="#FFDB63" size="sm" />
                                    <span className="text-white/80 font-normal tracking-wide text-sm 2xl:text-base">
                                        {contact.type}
                                    </span>
                                    <span className="text-white/50  group-hover:text-white/80 font-normal tracking-wide text-sm 2xl:text-base">
                                        {contact.value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-full flex justify-center md:justify-between md:pl-40 md:pt-10 items-start gap-12'>
                    <div className='flex flex-col justify-start items-center md:items-start gap-5'>
                        <span className='text-white/80 tracking-tight text-base 2xl:text-lg hover:text-white font-medium'>Navigation</span>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className='text-white/50 tracking-tight text-sm cursor-pointer 2xl:text-base hover:text-white'>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className='flex flex-col justify-start items-center md:items-start gap-5'>
                        <span className='text-white/80 tracking-tight text-base 2xl:text-lg hover:text-white font-medium'>Legals</span>
                        {legalLinks.map((link, index) => (
                            <Link key={index} href={link.href} className='text-white/50 tracking-tight text-sm cursor-pointer 2xl:text-base hover:text-white'>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <p className='text-center pb-5 pt-13 text-sm 2xl:text-base text-white/60 tracking-tight'> © 2026 Airport Transfers. All rights reserved</p>
        </footer>
    )
}

export default Footer