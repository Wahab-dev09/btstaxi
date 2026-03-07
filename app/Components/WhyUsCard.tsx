import React, { memo } from 'react';
import Image from 'next/image';
import type { Card } from './MappingData';


interface WhyUsCardProps {
  card: Card;
  index: number;
  showIcon?: boolean; // 👈 optional prop
  shownumber?: boolean; // 👈 optional prop
}

const WhyUsCard = memo(
  ({ card, index, showIcon = true, shownumber = true }: WhyUsCardProps) => {
    const Icon = card.image; // 👈 extract component

    return (
      <div className="w-full font-dm-sans group hover:scale-102 duration-200 flex justify-between py-5 sm:py-7.5 rounded-3xl px-3 sm:px-7.5 items-center bg-neutral-200">

        <div className="flex justify-center items-center gap-5 lg:gap-7 tracking-tighter">

          <div className="w-13 h-11.5 bg-neutral-900/90 lg:bg-neutral-900/10 group-hover:bg-neutral-900/90 rounded-xl text-yellow lg:text-neutral-700 group-hover:text-yellow font-medium flex justify-center items-center text-xl duration-100 gap-2">

            {shownumber && <span>{index + 1}</span>}

            {showIcon && <Icon className="w-6 h-6 md:w-8 md:h-8" pack='filled'/>}

          </div>

          <div className="w-full">
            <p className="text-xl font-semibold">{card.title}</p>
            <p className="text-base 2xl:text-lg font-medium mt-2 text-neutral-700">
              {card.tagline}
            </p>
          </div>

        </div>

        <span className="w-3 h-3 hidden sm:flex bg-white rounded-full"></span>
      </div>
    );
  }
);

WhyUsCard.displayName = "WhyUsCard";
export default WhyUsCard;
