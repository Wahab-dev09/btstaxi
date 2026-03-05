import React from 'react'
import CarsCarousel from './CarsCarousel'

const Cars = () => {
  return (
        <section className="w-full overflow-x-clip py-12 lg:py-15 bg-white font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-3 mb-12">
                <h2 className="text-[32px] sm:text-[39px] 2xl:text-5xl font-medium max-w-65 sm:max-w-none tracking-tighter text-center text-neutral-900">
                    Travel With Ease, Arrive Relaxed
                </h2>
                <p className="text-base 2xl:text-lg text-center text-neutral-700 font-normal tracking-tight">Choose from our comfortable fleet for a smooth, hassle-free airport transfer</p>
                </div>


            </div>
            <CarsCarousel/>
        </section>
  )
}

export default Cars