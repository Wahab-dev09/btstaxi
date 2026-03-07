"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Image from "next/image";
import { airports } from "./MappingData";
import { ChevronLeft, ChevronRight } from "@boxicons/react";
import Button from './Button';

export default function AirportsCarousel() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="w-[92%] max-w-360 mx-auto py-4 relative">

            {/* Custom Arrows */}
            <button
                ref={prevRef}
                aria-label="Scroll left"
                className="absolute cursor-pointer border border-black/10 active:scale-95 left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
            >
                <ChevronLeft size="md" />
            </button>

            <button
                ref={nextRef}
                aria-label="Scroll right"
                className="absolute cursor-pointer border border-black/10 active:scale-95 right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
            >
                <ChevronRight size="md" />
            </button>

            <Swiper
                modules={[Navigation]}
  slidesPerView="auto"  // let Swiper size slides automatically
  spaceBetween={35}      // actual gap now works
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {airports.map((airport, index) => (
                    <SwiperSlide key={index}>
                        <div className="snap-center group shrink-0 w-full h-100 relative rounded-2xl overflow-hidden">
                            <div className='absolute z-10 w-full bottom-0 h-60 bg-linear-to-t from-black/80 to-transparent'></div>
                            <span className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white z-30 rounded-full"></span>

                            <div className="w-full flex flex-col justify-center items-center absolute bottom-4 gap-3 z-30">
                                <h3 className="text-lg text-white text-center tracking-tighter font-semibold translate-y-0 lg:translate-y-14 group-hover:translate-y-0 duration-200">
                                    {airport.name}
                                </h3>
                                <div className="translate-y-0 lg:translate-y-14 group-hover:translate-y-0 duration-150 opacity-100 lg:opacity-0 group-hover:opacity-100">
                                    <Button text="Book this Ride" />
                                </div>
                            </div>

                            <Image
                                src={airport.image}
                                alt={airport.name}
                                fill
                                loading="lazy"
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}