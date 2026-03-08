import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Refund Policy | BTSCARS',
    description: 'Understand our refund and cancellation policy for BTSCARS bookings.',
}

export default function RefundPolicyPage() {
    return (
        <div className="w-[90%] max-w-4xl mx-auto py-16 text-white/80">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">Refund Policy</h1>
            <p className="text-white/40 text-sm mb-12">Last updated: January 2026</p>

            <div className="space-y-10 text-base leading-relaxed font-light">

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
                    <p>
                        At BTSCARS, we understand that plans change. This Refund Policy outlines the conditions under which cancellations and refunds are processed.
                        By making a booking with us, you agree to the terms set out below.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. Cancellation by You</h2>
                    <p className="mb-4">The following cancellation schedule applies to all bookings:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 pr-6 text-white font-semibold">Notice Period</th>
                                    <th className="text-left py-3 text-white font-semibold">Refund</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/60">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 pr-6">More than 48 hours before journey</td>
                                    <td className="py-3 text-green-400 font-medium">100% full refund</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 pr-6">24 – 48 hours before journey</td>
                                    <td className="py-3 text-yellow-400 font-medium">50% refund</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 pr-6">Less than 24 hours before journey</td>
                                    <td className="py-3 text-red-400 font-medium">No refund</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-6">No-show</td>
                                    <td className="py-3 text-red-400 font-medium">No refund</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. How to Cancel</h2>
                    <p>
                        All cancellation requests must be submitted in writing by emailing <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com" className="text-yellow hover:underline"> btsminicabs@gmail.com </a> with your booking reference number.
                        Cancellations are not accepted by phone. The cancellation time is recorded as the time we receive your written request.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Refund Processing</h2>
                    <p>
                        Approved refunds are processed within 5–10 business days of the cancellation confirmation.
                        Refunds are issued to the original payment method used at the time of booking. We are not responsible for any delays caused by your bank or card provider.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">5. Cancellation by BTSCARS</h2>
                    <p>
                        In the rare event that BTSCARS must cancel your booking due to circumstances within our control, you will receive a full refund within 5 business days.
                        We will make every reasonable effort to notify you as early as possible and offer an alternative vehicle or rescheduled booking where possible.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">6. Non-Refundable Items</h2>
                    <p className="mb-3">The following charges are non-refundable under any circumstances:</p>
                    <p>Waiting time charges already incurred</p>
                    <p>Additional stops or detours already completed</p>
                    <p>Tolls, parking, or congestion charges already paid on your behalf</p>
                    <p>Booking amendment fees</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">7. Force Majeure</h2>
                    <p>
                        BTSCARS will not be held liable for cancellations caused by events outside our reasonable control, including but not limited to severe weather,
                        natural disasters, civil unrest, or government action. In such cases, we will work with you to rebook your journey or issue credit where possible.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">8. Disputes</h2>
                    <p>
                        If you are unhappy with a refund decision, please contact us directly at  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com" target="_blank" rel="noopener noreferrer" className="text-yellow hover:underline"> btsminicabs@gmail.com </a>.
                        We aim to resolve all disputes fairly and promptly. If we are unable to reach a resolution, you may escalate the matter through the appropriate UK consumer dispute resolution channels.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
                    <p>
                        For any refund-related queries, reach us at:<br />
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com"
                            className="text-yellow hover:underline"
                        >
                            btsminicabs@gmail.com
                        </a><br />
                        <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=447368877853' className="text-yellow-400 hover:underline">+44 7368 877853</a><br />
                        Bright Travel Solutions Ltd, United Kingdom
                    </p>
                </section>

            </div>
        </div>
    )
}