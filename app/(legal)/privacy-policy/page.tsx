import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | BTSCARS',
    description: 'Read our privacy policy to understand how we collect, use and protect your personal data.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="w-[90%] max-w-4xl mx-auto py-16 text-white/80">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">
                Privacy Policy
            </h1>
            <p className="text-white/40 text-sm mb-12">Last updated: January 2026</p>

            <div className="space-y-10 text-base leading-relaxed font-light">

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                    <p>
                        Bright Travel Solutions Ltd ("we", "us", or "our") operates BTSCARS and is committed to protecting your personal information.
                        This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or use our services.
                        Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                    <p className="mb-3">We may collect the following categories of personal information:</p>
                    <div className="flex flex-col gap-2 text-white/60">
                        <p className="text-white/90">Identity Data</p>
                        <p>Name, title, date of birth</p>

                        <p className="text-white/90">Contact Data</p>
                        <p>Billing address, delivery address, email address, and phone numbers</p>

                        <p className="text-white/90">Transaction Data</p>
                        <p>Details about payments and the services you have purchased from us</p>

                        <p className="text-white/90">Technical Data</p>
                        <p>IP address, browser type and version, time zone, browser plug-in types</p>

                        <p className="text-white/90">Usage Data</p>
                        <p>Information about how you use our website and services</p>

                        <p className="text-white/90">Journey Data</p>
                        <p>Pick-up and drop-off locations, flight numbers, and travel preferences</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
                    <p className="mb-3">We use the information we collect in the following ways:</p>
                    <div className="flex flex-wrap gap-2 text-white/60">
                        <span>To process and fulfil your booking requests</span>
                        <span>To send you booking confirmations and service updates</span>
                        <span>To communicate with you about your journey or account</span>
                        <span>To improve our website and service offering</span>
                        <span>To comply with legal obligations</span>
                        <span>To prevent fraud and ensure the safety of our platform</span>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Sharing Your Information</h2>
                    <p>
                        We do not sell, rent, or trade your personal information to third parties. We may share data with trusted
                        service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.
                        We may also disclose information where required by law or to protect the rights, property, or safety of BTSCARS, our customers, or others.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
                    <p>
                        Our website uses cookies to enhance your experience. Cookies are small data files placed on your device.
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our service may not function properly without cookies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
                    <p>
                        We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy,
                        unless a longer retention period is required or permitted by law. When your data is no longer required, it is securely deleted or anonymised.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
                    <p className="mb-3">Under applicable data protection law, you have the right to:</p>
                    <div className="flex flex-wrap gap-2 text-white/60">
                        <span>Access your personal data</span>
                        <span>Correct inaccurate personal data</span>
                        <span>Request erasure of your personal data</span>
                        <span>Object to or restrict processing of your personal data</span>
                        <span>Request the transfer of your personal data</span>
                        <span>Withdraw consent at any time</span>
                    </div>
                    <p className="mt-3">
                        To exercise any of these rights, please contact us at{' '}
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com"
                            className="text-yellow hover:underline"
                        >
                            btsminicabs@gmail.com
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">8. Security</h2>
                    <p>
                        We implement appropriate technical and organisational measures to protect your personal information against accidental or unlawful destruction,
                        loss, alteration, unauthorised disclosure, or access. However, no method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
                    <p>
                        We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page with a revised date.
                        Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
                    <p className="mt-3">
                        To exercise any of these rights, please contact us at{' '}
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=btsminicabs@gmail.com"
                            className="text-yellow hover:underline"
                        >
                            btsminicabs@gmail.com
                        </a>.
                    </p>
                </section>

            </div>
        </div>
    )
}