"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Image from "next/image";
import { cars } from "./MappingData";
import { Luggage, User, ChevronLeft, ChevronRight } from "@boxicons/react";

export default function CarsCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-[92%] max-w-360 mx-auto py-4 relative">

      {/* Custom Arrows */}
      <button
        ref={prevRef}
        aria-label="Scroll left"
        className="absolute cursor-pointer active:scale-95 left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
      >
        <ChevronLeft size="md" />
      </button>

      <button
        ref={nextRef}
        aria-label="Scroll right"
        className="absolute cursor-pointer active:scale-95 right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2"
      >
        <ChevronRight size="md" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
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
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="group w-full h-100 relative rounded-2xl overflow-hidden bg-neutral-200 flex justify-center items-center">

              <span className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white z-30 rounded-full"></span>

              <div className="absolute top-4 left-4 flex flex-col gap-3">
                <div className="p-1 pr-2 rounded-md text-sm bg-neutral-800 text-white flex items-center gap-2">
                  <User pack="filled" fill="#FFDB63" width={18} height={18} />
                  <span>{car.passengers}</span>
                </div>

                <div className="p-1 pr-2 rounded-md text-sm bg-neutral-800 text-white flex items-center gap-2">
                  <Luggage pack="filled" fill="#FFDB63" width={18} height={18} />
                  <span>{car.luggage}</span>
                </div>
              </div>

              <div className="absolute bottom-3 text-center w-full px-4">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {car.name}
                </h3>

                <p className="text-sm text-neutral-700">
                  {car.description}
                </p>
              </div>

              <Image
                src={car.image}
                alt={car.name}
                width={320}
                height={220}
                className="object-cover h-auto"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}