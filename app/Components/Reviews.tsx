"use client"
import ReviewsCarousel from "./ReviewsCarousel"


export default function Reviews() {

    return (
        <section className="w-full bg-white overflow-x-clip py-11 lg:py-15 font-dm-sans relative">
            <div className="max-w-360 mx-auto px-3 relative">
                <div className="w-full flex flex-col justify-center items-center gap-3 mb-12">
                <h2 className="text-[32px] sm:text-[39px] 2xl:text-5xl font-medium max-w-65 sm:max-w-none tracking-tighter text-center text-neutral-900">
                    Top Rated Choice on Google
                </h2>
                <p className="text-base 2xl:text-lg text-neutral-700 font-normal text-center tracking-tight">Trusted by thousands of passengers for reliable airport rides across the UK</p>
                </div>

                <ReviewsCarousel />
            </div>
        </section>
    )
}