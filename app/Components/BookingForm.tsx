"use client";
import { useState } from "react";
export default function BookingForm() {
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        airport: "",
        pickupDate: "",
        pickupTime: "",
        duration: "2",
        passengers: "1",
        luggage: "1",
    });

    const [submitted, setSubmitted] = useState(false);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Change button text
        setSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-125 mx-auto border border-white/4 text-white rounded-2xl p-4 py-7 sm:p-6 md:p-8 flex flex-col gap-5 shadow-xl">
            {/* Pickup Location */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Pickup Location</label>
                <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="Enter pickup location" className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required />
            </div>
            {/* To Location */}
            <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Dropoff Location</label>
                <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder="Enter Dropoff location" className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required />
            </div>

            {/* Pickup Date */}
            <div className="flex flex-col gap-2">
                <label htmlFor="pickupDate" className="text-sm text-white/70">Pickup Date</label>
                <input id="pickupDate" type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="bg-neutral-800 w-full border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required />
            </div>

            {/* Pickup Time */}
            <div className="flex flex-col gap-2">
                <label htmlFor="pickupTime" className="text-sm text-white/70">Pickup Time</label>
                <input id="pickupTime" type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="bg-neutral-800 w-full border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition" required />
            </div>

            {/* Passengers */}
            <div className="flex flex-col gap-2">
                <label htmlFor="passengers" className="text-sm text-white/70">Passengers</label>
                <select id="passengers" name="passengers" value={formData.passengers} onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? "Passenger" : "Passengers"}</option>
                    ))}
                </select>
            </div>
            {/* Luggage */}
            <div className="flex flex-col gap-2">
                <label htmlFor="luggage" className="text-sm text-white/70">Luggage</label>
                <select id="luggage" name="luggage" value={formData.luggage} onChange={handleChange}
                    className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow transition">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 12, 16].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? "bag" : "bags"}</option>
                    ))}
                </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className=" mt-3 bg-yellow cursor-pointer text-neutral-900 rounded-xl py-3 font-medium hover:bg-yellow-200 transition">
                {submitted ? "Booked! Check your inbox" : "Book Your Ride"}
            </button>
        </form>
    );
}