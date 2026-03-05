'use client'
import React from 'react'
import Button from './Button'
import { MedalStarAlt, Star } from '@boxicons/react'
import Image from 'next/image'
import person1 from "@/public/Images/person1.png";
import person2 from "@/public/Images/person2.png";
import person3 from "@/public/Images/person3.png";
import dynamic from "next/dynamic";

const MarqueeServices = dynamic(() => import("./Marquee"), {
  ssr: false,
    loading: () => <div className="h-12" />,
});

const Hero = () => {
    const stars = Array.from({ length: 5 });
    const people = [
        { id: 1, image: person1 },
        { id: 2, image: person2 },
        { id: 3, image: person3 },
    ];
    return (
        <section className='w-full max-w-360 pb-18 flex flex-col justify-start items-center px-3 gap-5 xl:gap-6 mt-40'>
            <div className='w-fit bg-white/2 px-5 rounded-full py-2.5 border border-white/5 flex justify-center items-center gap-3 lg:mb-2'>
                <MedalStarAlt fill='#FFDB63' />
                <span className='text-white/90 text-sm 2xl:text-base font-light'>10+ Years of Reliable Airport Transfers</span>
            </div>
            <h1 className='text-white text-[42px] sm:text-5xl lg:text-[54px] xl:text-6xl 2xl:text-7xl font-medium tracking-tight text-center leading-14 lg:leading-17 xl:leading-19 2xl:leading-22 max-w-125 sm:max-w-150 xl:max-w-170 2xl:max-w-200'><span className='text-yellow'>On-Time </span>Taxi Transfers to London's Airports</h1>
            <p className='text-base 2xl:text-lg text-white/85 text-center font-light max-w-110 2xl:max-w-140'>Reliable transfers from across the UK to London’s major airports with transparent fares and 24/7 availability</p>
            <div className='w-full flex flex-col md:flex-row justify-center items-center mt-3 lg:mt-6 gap-9'>
                <Button />
                <div className='w-fit flex justify-center items-center gap-3'>
                    <div className='flex justify-center items-center'>
                        {people.map((person, index) => (
                                <Image
                                key={person.id}
                                className={`rounded-full border border-white ${index !== 0 ? "-ml-3" : ""}`}
                                    src={person.image}
                                    width={36}
                                    height={36}
                                    alt="Customer"
                                />
                        ))}
                        <span className='bg-yellow w-9 h-9 overflow-clip rounded-full border border-white -ml-3 text-neutral-950 text-xs font-medium flex justify-center items-center'>1.5K</span>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <div className='flex justify-start items-center gap-0.5'>
                            {stars.map((_, index) => (
                                <Star key={index} pack="filled" size="xs" fill="#ffdb63" />
                            ))}
                        </div>
                        <span className='text-xs text-white 2xl:text-base font-light'>From 1.5K reviews</span>
                    </div>
                </div>
            </div>
            <div className='mt-8 w-full flex flex-col justify-center items-center gap-8'>
                <span className='text-sm 2xl:text-base text-white/40 text-center'>Trusted by Our Customers Across UK</span>
                <MarqueeServices duration={40} reverse={false} />

            </div>
        </section>
    )
}

export default Hero