import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | BTSCARS',
    description: 'Read the terms and conditions governing your use of BTSCARS services.',
}

export default function TermsOfUsePage() {
    return (
        <div className="w-[90%] max-w-4xl mx-auto py-16 text-white/80">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">Terms & Conditions</h1>
            <p className="text-white/40 text-sm mb-12">Last updated: January 2026</p>

            <div className="space-y-10 text-base leading-relaxed font-light">

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using BTSCARS services provided by Bright Travel Solutions Ltd, you agree to be bound by these Terms & Conditions.
                        If you do not agree to all terms stated here, you must not use our services. We reserve the right to update these terms at any time,
                        and your continued use of our services constitutes acceptance of any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. Booking & Confirmation</h2>
                    <p>
                        All bookings are subject to availability. A booking is confirmed only upon receipt of a written confirmation from us via email.
                        You are responsible for ensuring that all booking details provided are accurate, including pick-up address, destination, date, time, and passenger count.
                        BTSCARS will not be liable for any loss arising from inaccurate booking information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. Payment</h2>
                    <p className="mb-3">
                        Payments are processed securely through our payment provider. Full payment is required at the time of booking unless otherwise agreed in writing.
                        All prices are inclusive of VAT where applicable.
                    </p>
                    <p>
                        BTSCARS reserves the right to revise prices at any time. Any price changes will not affect bookings already confirmed.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Cancellations & Amendments</h2>
                    <p className="mb-3">
                        You may cancel or amend your booking in accordance with our Refund Policy. Cancellations must be submitted in writing to <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com" className="text-yellow hover:underline"> btsminicabs@gmail.com </a>.
                    </p>
                    <p>
                        BTSCARS reserves the right to cancel or modify a booking in exceptional circumstances such as severe weather, vehicle breakdown, or force majeure.
                        In such cases, we will make every effort to offer an alternative or provide a full refund.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">5. Passenger Conduct</h2>
                    <p>
                        Passengers are expected to behave in a respectful manner toward drivers and other passengers. BTSCARS reserves the right to refuse service or terminate
                        a journey without refund if a passenger engages in abusive, threatening, or disruptive behaviour. Passengers are responsible for any damage caused to the vehicle during a journey.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">6. Waiting Time & Flight Monitoring</h2>
                    <p>
                        For airport pick-ups, we monitor your flight and adjust the driver's arrival accordingly at no extra charge.
                        A complimentary waiting period of up to 60 minutes after landing is included for airport collections.
                        For non-airport pick-ups, a 15-minute grace period applies. Waiting time beyond these limits may incur additional charges.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">7. Liability</h2>
                    <p className="mb-3">
                        BTSCARS shall not be liable for any delay, loss, or damage caused by circumstances beyond our reasonable control, including but not limited to:
                        traffic conditions, road closures, extreme weather, or acts of God.
                    </p>
                    <p>
                        Our maximum liability for any claim arising from a booking shall not exceed the total fare paid for that booking.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">8. Lost Property</h2>
                    <p>
                        BTSCARS is not responsible for items left in vehicles. If you believe you have left an item, please contact us as soon as possible and we will do our best to assist.
                        We may charge an administration or delivery fee to return found property.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
                    <p>
                        These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales.
                        Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
                    <p>
                        For questions regarding these Terms & Conditions, please contact us:<br />
                        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com" className="text-yellow hover:underline"> btsminicabs@gmail.com </a><br />
                        Bright Travel Solutions Ltd, United Kingdom
                    </p>
                </section>

            </div>
        </div>
    )
}