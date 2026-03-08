import React from 'react'
import Button from './Button'
import { MedalStarAlt, Star } from '@boxicons/react'
import Image from 'next/image'
import person1 from "@/public/Images/person1.png";
import person2 from "@/public/Images/person2.png";
import person3 from "@/public/Images/person3.png";
import BookingForm from './BookingForm';

const CTA = () => {
    const stars = Array.from({ length: 5 });
    const people = [
        { id: 1, image: person1 },
        { id: 2, image: person2 },
        { id: 3, image: person3 },
    ];
    return (
        <section className='w-full bg-white'>
            <div className='w-[95%] max-w-350 mx-auto px-3 bg-neutral-900 py-20 rounded-4xl flex flex-col justify-center items-center gap-5'>
                <h2 className='text-white text-[32px] sm:text-[44px] lg:text-[49px] xl:text-55xl 2xl:text-6xl font-medium tracking-tight text-center leading-11 lg:leading-15 xl:leading-16 2xl:leading-19 max-w-100 sm:max-w-120 xl:max-w-130 2xl:max-w-170'><span className='text-yellow'>No waiting </span>No last minute stress</h2>

                <p className='text-base 2xl:text-lg text-white/85 text-center font-light max-w-100'>Quick and reliable transport across the UK, ready when you need it</p>

                <BookingForm/>
            </div>
        </section>
    )
}

export default CTA