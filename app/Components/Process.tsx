import React from 'react'
import Button from './Button'
import Proce from "@/public/Images/Process.webp";
import Image from 'next/image';
import WhyUsCard from './WhyUsCard';
import { process } from './WhyUsData';

const Process = () => {
    return (
        <section className="w-full bg-white overflow-clip py-12 lg:py-15 font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-6 2xl:gap-9 mb-12">
                    <h2 className="text-[32px] sm:text-[39px] 2xl:text-5xl font-medium max-w-60 sm:max-w-none tracking-tighter text-center text-neutral-900">
                        Book Your Ride in <span className='bg-neutral-900 text-yellow px-5 py-2.5 rounded-lg leading-19 sm:leading-none'>3 Easy Steps</span>
                    </h2>
                    <p className="text-base 2xl:text-lg text-neutral-700 font-normal tracking-tight text-center max-w-95 sm:max-w-none">From booking to pickup, we make your airport transfer hassle-free and reliable</p>
                </div>
            </div>
            <div className='w-full max-w-360 mx-auto flex flex-col lg:flex-row justify-center items-center gap-7 px-3 mb-8'>
                <div className="w-full relative  max-w-120 h-125 order-2 lg:-order-2 rounded-3xl overflow-clip">
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white z-30 rounded-full"></span>
                    <span className='absolute bottom-12 text-2xl tracking-tighter z-20 text-white w-full text-center'>Book in Seconds, Ride in Comfort</span>
                    <span className='absolute bottom-5 text-sm z-20 text-white/60 w-full text-center'>Serving Hundreds of Passengers Daily</span>
                    <div className='absolute z-10 w-full bottom-0 h-30 bg-linear-to-t from-black/80 to-transparent'></div>
                    <Image
                        src={Proce}
                        className='object-center object-cover'
                        fill
                        alt="Customer"
                    />
                </div>
                <div className='w-full max-w-150 xl:max-w-180 flex flex-col justify-center items-start gap-5'>
                    <div className='flex w-full flex-col justify-center items-center gap-6'>
                        {process.map((card, index) => (
                            <WhyUsCard key={index} card={card} index={index} showIcon={false}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-fit mx-auto'>
                <Button />
            </div>
        </section>
    )
}

export default Process