"use client";
import { useRef } from "react";
import Image from "next/image";
import { airports } from "./LocationsData";
import { ChevronLeft, ChevronRight } from "@boxicons/react";
import Button from './Button'

export default function AirportsCarousel() {
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
                {airports.map((airport, index) => (
                    <div key={index} className="snap-center group shrink-0 w-full sm:w-87.5 h-100 relative rounded-2xl overflow-hidden">
                        <div className='absolute z-10 w-full bottom-0 h-60 bg-linear-to-t from-black/80 to-transparent'></div>
                        <span className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white z-30 rounded-full"></span>

                        <div className="w-full flex flex-col justify-center items-center absolute bottom-4 gap-3 z-30 ">
                            <h3 className="text-lg text-white text-center tracking-tighter font-semibold translate-y-0 lg:translate-y-14 group-hover:translate-y-0 duration-200">{airport.name}</h3>
                            <div className="translate-y-0 lg:translate-y-14 group-hover:translate-y-0 duration-150 opacity-100 lg:opacity-0 group-hover:opacity-100">
                            <Button text="Book this Ride"/>
                            </div>
                        </div>
                        <Image src={airport.image} alt={airport.name} fill
                            className="object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}