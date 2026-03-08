import Button from './Button'
import WhyUs from "@/public/Images/whyus.webp";
import Image from 'next/image';
import WhyUsCard from './WhyUsCard';
import { benefits, stats } from './MappingData';
import WhyUsStat from "./WhyUsStat";
import person1 from "@/public/Images/person1.png";
import person2 from "@/public/Images/person2.png";
import person3 from "@/public/Images/person3.png";


const Benefits = () => {
    const people = [
        { id: 1, image: person1 },
        { id: 2, image: person2 },
        { id: 3, image: person3 },
    ];
    return (
        <section id="benefits" className="w-full bg-white overflow-clip py-8 lg:py-15 font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-3 2xl:gap-9 mb-12">
                    <h2 className="text-3xl sm:text-[39px] 2xl:text-5xl font-medium max-w-70 sm:max-w-none tracking-tighter text-center text-neutral-900">Why People Pick Us</h2>
                    <p className="text-base 2xl:text-lg text-neutral-700 max-w-80 font-normal tracking-tight text-center sm:max-w-none">A trusted choice for safe, comfortable, and reliable travel across the UK</p>
                </div>
            </div>
            <div className='w-full max-w-360 mx-auto flex flex-col lg:flex-row justify-center items-center gap-7 px-3 mb-12'>
                <div className="w-full relative  max-w-120 order-2 h-125 rounded-3xl overflow-clip">
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white z-30 rounded-full"></span>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full  z-30 flex flex-col justify-center gap-3 items-center">


                        <div className="w-full flex justify-center items-center">
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
                        <span className='text-2xl tracking-tighter text-white w-full text-center'>Top Choice of Travellers Across UK</span>
                    </div>
                    <div className='absolute z-10 w-full bottom-0 h-30 bg-linear-to-t from-black/80 to-transparent'></div>
                    <Image
                        src={WhyUs}
                        className='object-center object-cover'
                        fill
                        sizes="(max-width: 640px) 100vw, 480px"
                        loading="lazy"
                        alt="Person getting out of Taxi Visual"
                    />
                </div>
                <div className='w-full max-w-150 xl:max-w-180 flex flex-col justify-center items-start gap-5'>
                    <div className='flex w-full flex-col justify-center items-center gap-6'>
                        {benefits.map((card, index) => (
                            <WhyUsCard key={index} card={card} index={index} showIcon={true} shownumber={false} />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-sm text-neutral-500 py-3 lg:py-5 mx-auto w-full font-normal text-center max-w-95 sm:max-w-none uppercase tracking-[6px] sm:tracking-[10px]">Our Stats & Achievements</p>

            <div className="max-w-360 mx-auto px-3 lg:px-6 py-10 md:py-15 grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-10 items-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`
        flex flex-col items-center
        ${index < 4 ? "block" : "hidden sm:block"}
      `}
                    >
                        <WhyUsStat stat={stat} />
                    </div>
                ))}
            </div>
            <div className='w-fit mx-auto'>
                <Button />
            </div>
        </section>
    )
}

export default Benefits