"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { ChevronLeft, ChevronRight } from "@boxicons/react"
import { useEffect, useState, useRef } from "react"
import ReviewCard from "./ReviewCard"

type Review = {
    id: number
    name: string
    rating: number
    review: string
    date: string
    avatar: string
}

export default function ReviewsCarousel() {

    const [reviews, setReviews] = useState<Review[]>([])
    const [loading, setLoading] = useState(true)

    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(
                    "https://my.api.mockaroo.com/reviews.json?key=520c4880"
                )
                const data = await res.json()
                setReviews(data)
            } catch (error) {
            } finally {
                setLoading(false)
            }
        }

        fetchReviews()
    }, [])

    // Loading state (same as before)
    if (loading)
        return (
            <div className="flex gap-4 overflow-hidden justify-center">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="shrink-0 w-[90%] max-w-100 h-65 bg-neutral-300 rounded-2xl animate-pulse"
                    />
                ))}
            </div>
        )

    return (
        <div className="relative  w-full">

            {/* Arrows */}
            <button
                ref={prevRef}
                aria-label="Scroll left"
                className="absolute border border-black/10 left-0 top-1/2 -translate-y-1/2 bg-white  cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-10 hover:bg-white/90 transition"
            >
                <ChevronLeft pack="filled" size="md" fill="#171717" />
            </button>

            <button
                ref={nextRef}
                aria-label="Scroll right"
                className="absolute border border-black/10 right-0 top-1/2 -translate-y-1/2 bg-white cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-10 hover:bg-white/90 transition"
            >
                <ChevronRight pack="filled" size="md" fill="#171717" />
            </button>

            <Swiper
                className="px-4! md:px-6!"
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerGroup={1}

                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: "auto" },
                    1024: { slidesPerView: "auto" },
                }}
            >
                {Array.isArray(reviews) ? (
                    reviews.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="w-full! sm:w-90! lg:w-100px!"
                        >
                            <ReviewCard item={item} />
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <p className="w-full flex justify-center items-center rounded-2xl h-65 bg-neutral-300">
                            Unable to load reviews
                        </p>
                    </SwiperSlide >
                )
                }
            </Swiper >
        </div >
    )
}