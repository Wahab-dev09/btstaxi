'use client'

import { ChevronDown } from '@boxicons/react';
import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

const FAQ = () => {

    const [faqclicked, setfaqclicked] = useState<number | null>(null);
    const refs = useRef<Array<HTMLParagraphElement | null>>([]);

    const faqs = [
        {
            id: 1,
            question: "How do I book an airport transfer?",
            answer:
                "You can book your ride in minutes by selecting your airport, pickup location, and preferred time through our booking form.",
        },
        {
            id: 2,
            question: "Which airports do you cover?",
            answer:
                "We currently provide reliable airport transfers across 6 major London airports from all over the UK, ensuring timely pickups and drop-offs",
        },
        {
            id: 3,
            question: "What happens if my flight is delayed?",
            answer:
                "Our drivers monitor flight schedules in real time, so if your flight is delayed your pickup time will automatically adjust.",
        },
        {
            id: 4,
            question: "Can I cancel or change my booking?",
            answer:
                "Yes, you can modify or cancel your booking before your scheduled pickup time through our booking confirmation.",
        },
        {
            id: 5,
            question: "Are your drivers professional and verified?",
            answer:
                "Yes. All drivers are experienced, background-checked, and trained to ensure a safe and comfortable airport transfer.",
        },
    ];

    useEffect(() => {
        faqs.forEach((faq, index) => {
            const el = refs.current[index];

            if (!el) return;

            if (faqclicked === faq.id) {
                gsap.to(el, { height: "auto", duration: 0.4, ease: "power2.inOut" });
            } else {
                gsap.to(el, { height: 0, duration: 0.4, ease: "power2.inOut" });
            }
        });
    }, [faqclicked]);

    return (
        <section className="w-full bg-white py-16 md:py-19 font-dm-sans">
            <div className="max-w-360 mx-auto px-3">
                {/* Header */}
                <div className="w-full flex flex-col justify-center items-center gap-6 2xl:gap-9 mb-12">
                    <h2 className="text-[32px] sm:text-[39px] 2xl:text-5xl font-medium max-w-60 sm:max-w-none tracking-tighter text-center text-neutral-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base 2xl:text-lg max-w-80 sm:max-w-none text-neutral-700 font-normal tracking-tight text-center">
                        Quick answers to the most common questions about our service
                    </p>
                </div>

                {/* FAQ List */}
                <div className="w-full max-w-200 mx-auto flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} onClick={() => setfaqclicked(faqclicked === faq.id ? null : faq.id)} className={`w-full overflow-hidden tracking-tight max-w-200 px-5 py-5 bg-neutral-200 hover:bg-blue/10 border-2 border-blue-200/5 rounded-2xl font-manrope text-lg flex flex-col justify-start items-start duration-400 ${faqclicked === faq.id ? 'gap-7.5 bg-blue text-white' : 'gap-0'} cursor-pointer bg-grey`}>
                            <div className="w-full flex justify-between items-center">
                                <p className="font-semibold text-base 2xl:text-lg text-neutral-800 w-[85%]">{faq.question}</p>
                                <ChevronDown className={`text-neutral-800 duration-300 ${faqclicked === faq.id ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            <p ref={(el) => { refs.current[index] = el }} className={`text-neutral-800/80 font-medium w-[90%] overflow-hidden text-base 2xl:text-lg transition-[max-height] duration-300 ease-in-out`}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;