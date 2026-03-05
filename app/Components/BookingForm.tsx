"use client";

import { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        from: "",
        pickupDate: "",
        pickupTime: "",
        duration: "2",
        passengers: "1",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Change button text
        setSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-125 mx-auto border border-white/4 text-white rounded-2xl p-4 py-7 sm:p-6 md:p-8 flex flex-col gap-5 shadow-xl">
            {/* From Location */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">
                    From Location
                </label>
                <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required
                />
            </div>

            {/* Pickup Date */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">
                    Pickup Date
                </label>
                <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required
                />
            </div>

            {/* Pickup Time */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">
                    Pickup Time
                </label>
                <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required
                />
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">
                    Pickup In (Hours After Booking)
                </label>
                <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition">
                    {[...Array(23)].map((_, i) => {
                        const hour = i + 2; // 2hrs to 24hrs
                        return (
                            <option key={hour} value={hour}>
                                {hour} Hours
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* Passengers */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">
                    Passengers
                </label>
                <select name="passengers" value={formData.passengers} onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                            {num} {num === 1 ? "Passenger" : "Passengers"}
                        </option>
                    ))}
                </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className=" mt-3 bg-yellow cursor-pointer text-neutral-900 rounded-xl py-3 font-medium hover:bg-yellow-200 transition">
                {submitted ? "Booked! Check your inbox" : "See Prices"}
            </button>
        </form>
    );
}