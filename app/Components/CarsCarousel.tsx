"use client";
import { useRef } from "react";
import Image from "next/image";
import { cars } from "./LocationsData";
import { C, ChevronLeft, ChevronRight, Luggage, User } from "@boxicons/react";
import Button from './Button'

export default function CarsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const firstCard = container.querySelector("div");

        if (!firstCard) return;

        const cardWidth = firstCard.clientWidth;
        const gap = 24; // gap-6 = 24px
        const scrollAmount = cardWidth + gap;

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-[92%] max-w-360 mx-auto py-4 relative">
            {/* Arrows */}
            <button onClick={() => scroll("left")} className="absolute cursor-pointer active:scale-95 left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"><ChevronLeft size="md" /></button>
            <button onClick={() => scroll("right")} className="absolute cursor-pointer active:scale-95 right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"><ChevronRight size="md" /></button>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden"
            >
                {cars.map((airport, index) => (
                    <div key={index} className="snap-center group shrink-0 w-full sm:w-87.5 h-100 relative rounded-2xl overflow-hidden bg-neutral-200 flex justify-center items-center">
                        {/* <div className='absolute z-10 w-full bottom-0 h-60 bg-linear-to-t from-black/80 to-transparent'></div> */}
                        <span className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white z-30 rounded-full"></span>
                        <div className="absolute top-4 left-4 flex flex-col justify-center items-center gap-3">
                        <div className="p-1 pr-2 rounded-md text-sm 2xl:text-base bg-neutral-800 text-white flex justify-center items-center gap-2"><User pack="filled" fill="#FFDB63" width={18} height={18}/><span>{airport.passengers}</span></div>
                        <div className="p-1 pr-2 rounded-md text-sm 2xl:text-base bg-neutral-800 text-white flex justify-center items-center gap-2"><Luggage pack="filled" fill="#FFDB63" width={18} height={18}/><span>{airport.luggage}</span></div>
                        </div>

                        <div className="w-full flex flex-col justify-center items-center absolute bottom-3 gap-1 z-30 ">
                            <h3 className="text-lg text-neutral-800 text-center tracking-tighter font-semibold">{airport.name}</h3>
                            <p className="text-sm 2xl:text-base h-11 text-neutral-700 w-[90%] text-center font-medium tracking-tight">{airport.description}</p>
                        </div>
                        <Image src={airport.image} alt={airport.name} width={320} height={220}
                            className="object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}