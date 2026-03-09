'use client'
import React from 'react'
import Button from './Button'
import gsap from "gsap";
import { useEffect, useRef } from "react";
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
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reset all elements to their initial state first
        gsap.set([headingRef.current, textRef.current, buttonRef.current], {
            y: 0,
            opacity: 1,
            scale: 1,
            clearProps: "all"
        })

        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

        tl.from(headingRef.current, {
            y: 60,
            opacity: 0,
            duration: 0.9,
        })
            .from(textRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(buttonRef.current, { y: 30, opacity: 0, scale: 0.98, duration: 0.5 }, "-=0.5")
            .from(gsap.utils.toArray(starsRef.current?.children ?? []),
                { opacity: 0, scale: 0.5, stagger: 0.12, duration: 0.3 });

        return () => {
            tl.kill()
        }
    }, []);
    return (
        <section className='w-full relative bg-neutral-900 pb-15 lg:pb-18 flex flex-col justify-start items-center px-3 gap-5 xl:gap-6 pt-40'>
            <div className='w-fit bg-white/2 px-5 rounded-full py-2.5 border border-white/5 flex justify-center items-center gap-3 lg:mb-2'>
                <MedalStarAlt fill='#FFDB63' />
                <span className='text-white/90 text-sm 2xl:text-base font-light'>Trusted Choice of UK Travellers</span>
            </div>
            <h1 ref={headingRef} className='text-white text-[32px] sm:text-5xl lg:text-[54px] xl:text-6xl 2xl:text-7xl font-medium tracking-tighter text-center leading-12 sm:leading-15 lg:leading-17 xl:leading-19 2xl:leading-22 max-w-115 sm:max-w-170 xl:max-w-190 2xl:max-w-220'><span className='text-yellow'>Bright Travel Solutions </span>for Transport Across the UK</h1>
            <p ref={textRef} className='text-base 2xl:text-lg text-white/85 text-center font-light max-w-110'>Comfortable and reliable transport across the UK with clear pricing and 24/7 service</p>
            <div className='w-full flex flex-col md:flex-row justify-center items-center mt-3 lg:mt-6 gap-9'>
                <div ref={buttonRef}>

                    <Button />
                </div>
                <div className='w-fit flex justify-center items-center gap-3'>
                    <div className='flex justify-center items-center'>
                        {people.map((person, index) => (
                            <Image
                                key={person.id}
                                className={`rounded-full border border-white ${index !== 0 ? "-ml-3" : ""}`}
                                src={person.image}
                                loading="lazy"
                                width={36}
                                height={36}
                                alt={`Customer ${person.id}`}
                            />
                        ))}
                        <span className='bg-yellow w-9 h-9 overflow-clip rounded-full border border-white -ml-3 text-neutral-950 text-xs font-medium flex justify-center items-center'>1.5K</span>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <div ref={starsRef} className='flex justify-start items-center gap-0.5'>
                            {stars.map((_, index) => (
                                <Star key={index} pack="filled" size="xs" fill="#ffdb63" />
                            ))}
                        </div>
                        <span className='text-xs text-white 2xl:text-base font-light'>From 1.5K reviews</span>
                    </div>
                </div>
            </div>
            <div className='mt-8 w-full flex flex-col justify-center items-center gap-8'>
                <span className='text-sm 2xl:text-base text-white/50 text-center'>Trusted by Our Customers Across UK</span>
                <MarqueeServices duration={40} reverse={false} />

            </div>
        </section>
    )
}

export default Hero