import React from 'react'
import LocationCarousel from './LocationCarousel'

const Locations = () => {
  return (
        <section id='locations' className="w-full bg-white overflow-x-clip py-12 md:pb-20 font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-3 mb-12">
                <h2 className="text-[32px] sm:text-[39px] 2xl:text-5xl font-medium max-w-65 sm:max-w-none tracking-tighter text-center text-neutral-900">
                    We Serve 6 Major Airports
                </h2>
                <p className="text-base 2xl:text-lg max-w-80 sm:max-w-none text-neutral-700 text-center font-normal tracking-tight">Reliable transfers from the region's busiest terminals, always on time</p>
                </div>


            </div>
            <LocationCarousel/>
        </section>
  )
}

export default Locations