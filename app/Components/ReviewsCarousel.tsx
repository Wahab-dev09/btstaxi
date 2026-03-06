"use client"
import { ChevronLeft, ChevronRight, Star } from "@boxicons/react"
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
    const containerRef = useRef<HTMLDivElement>(null)

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

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.offsetWidth * 0.9
            containerRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            })
        }
    }

    // Placeholder cards while loading
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
        <div className="relative">
            {/* Arrows */}
            <button
                onClick={() => scroll("left")}
                  aria-label="Scroll left"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-white cursor-pointer text-white rounded-full w-12 h-12 flex justify-center items-center z-10 hover:bg-white/90 transition"
            >
                <ChevronLeft pack="filled" size="md" fill="#171717" />
            </button>
            <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-white cursor-pointer text-white rounded-full w-12 h-12 flex justify-center items-center z-10 hover:bg-white/90 transition"
            >
                <ChevronRight pack="filled" size="md" fill="#171717" />
            </button>

            <div className="relative overflow-x-hidden">
                <div
                    ref={containerRef}
                    className="flex scrollbar-hidden gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                >
                    {Array.isArray(reviews) ? (
                        reviews.map((item) => (
                            <ReviewCard key={item.id} item={item} />
                        ))
                    ) : (
                        <p className="w-[90%] mx-auto flex justify-center items-center rounded-2xl animate-pulse h-65 bg-neutral-300">Unable to load reviews</p>
                    )}
                </div>
            </div>
        </div>
    )
}