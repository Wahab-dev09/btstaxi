import React from 'react'
import CarsCarousel from './CarsCarousel'

const Fleet = () => {
  return (
        <section className="w-full overflow-x-clip py-12 lg:py-15 bg-white font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-2 mb-12">
                <h2 className="text-[25px] sm:text-[39px] 2xl:text-5xl font-medium tracking-tighter text-center text-neutral-900">
                    Smooth Rides Every Time
                </h2>
                <p className="text-base 2xl:text-lg max-w-80 sm:max-w-none text-center text-neutral-700 font-normal tracking-tight">Choose from our comfortable fleet for a smooth, hassle-free travel</p>
                </div>


            </div>
            <CarsCarousel/>
        </section>
  )
}

export default Fleet